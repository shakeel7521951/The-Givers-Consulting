import { Fragment, useState } from 'react';

const ContactUs = () => {
  const contactDetails = ['+1', '+2', '+3', '+4', '+5', '+6', '+7'];
  const [FileName, setFileName] = useState('');
  const [FormError, setFormError] = useState({});
  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData({ ...FormData, file });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...FormData,
      [id]: value,
    });
  };

  const validation = () => {
    const newErrors = {};
    if (!FormData.firstName) {
      newErrors.firstName = 'First Name is required.';
    }
    if (!FormData.lastName) {
      newErrors.lastName = 'Last Name is required.';
    }
    if (!FormData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!FormData.phone) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\d+$/.test(FormData.phone)) {
      newErrors.phone = 'Phone number must contain only numbers.';
    }
    if (!FormData.message) {
      newErrors.message = 'Message is required.';
    }
    if (!FileName) {
      newErrors.file = 'Please upload a file.';
    }
    setFormError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <Fragment>
      <div className='flex justify-center items-center flex-col min-h-screen px-4 py-8'>
        <h1 className='text-gray-950 font-semibold text-2xl mb-6'>Apply Now</h1>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-6 text-center w-full sm:w-[90%] md:w-[70%] lg:w-[45%] rounded-lg shadow-md'
        >
          <p className='text-gray-900 p-3'>
            Let’s set up a time to talk if you need talent or upload your resume
            if you’re looking for a reputable company.
          </p>

          <div className='flex flex-col sm:flex-row justify-between gap-4 mb-4'>
            <div className='flex flex-col text-start gap-2 w-full'>
              <label htmlFor='firstName' className='text-gray-700 font-medium'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                value={FormData.firstName}
                onChange={handleChange}
                placeholder='Enter your first name'
                className='p-3 border rounded w-full focus:ring-2 focus:ring-blue-600'
              />
              {FormError.firstName && (
                <p className='text-red-500 text-sm'>{FormError.firstName}</p>
              )}
            </div>
            <div className='flex flex-col text-start gap-2 w-full'>
              <label htmlFor='lastName' className='text-gray-700 font-medium'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                value={FormData.lastName}
                onChange={handleChange}
                placeholder='Enter your last name'
                className='p-3 border rounded w-full focus:ring-2 focus:ring-blue-600'
              />
              {FormError.lastName && (
                <p className='text-red-500 text-sm'>{FormError.lastName}</p>
              )}
            </div>
          </div>

          <div className='flex flex-col text-start gap-2 mb-4'>
            <label htmlFor='email' className='text-gray-700 font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={FormData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='p-3 border rounded w-full focus:ring-2 focus:ring-blue-600'
            />
            {FormError.email && (
              <p className='text-red-500 text-sm'>{FormError.email}</p>
            )}
          </div>

          <div className='flex flex-col text-start gap-2 mb-4'>
            <label htmlFor='phone' className='text-gray-700 font-medium'>
              Phone
            </label>
            <div className='flex items-center border rounded p-3 bg-white focus-within:ring-2 focus-within:ring-blue-600'>
              <select className='border-none bg-transparent focus:outline-none'>
                {contactDetails.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                type='text'
                id='phone'
                value={FormData.phone}
                onChange={handleChange}
                placeholder='Enter your number'
                className='flex-grow p-1 outline-none border-none focus:outline-none'
              />
            </div>
            {FormError.phone && (
              <p className='text-red-500 text-sm'>{FormError.phone}</p>
            )}
          </div>

          {/* Message */}
          <div className='flex flex-col text-start gap-2 mb-4'>
            <label htmlFor='message' className='text-gray-700 font-medium'>
              Message
            </label>
            <textarea
              id='message'
              value={FormData.message}
              onChange={handleChange}
              placeholder='Enter your message'
              className='p-3 border rounded w-full h-32 resize-none focus:ring-2 focus:ring-blue-600'
            ></textarea>
            {FormError.message && (
              <p className='text-red-500 text-sm'>{FormError.message}</p>
            )}
          </div>

          <div className='flex flex-col gap-4 sm:flex-row justify-between items-center'>
            {/* Input Field for File Name */}
            <input
              type='text'
              value={FileName}
              readOnly
              className='w-full sm:flex-grow p-2 px-4 border rounded outline-none text-sm sm:text-base'
              placeholder='No file chosen'
            />

            {/* Button Container */}
            <div className='flex gap-2 w-full sm:w-auto justify-between sm:justify-start'>
              {/* Upload Button */}
              <button
                type='button'
                className='w-full sm:w-auto bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition text-sm sm:text-base'
              >
                <label htmlFor='file-upload' className='cursor-pointer'>
                  <input
                    type='file'
                    id='file-upload'
                    className='hidden'
                    onChange={handleFileChange}
                  />
                  Upload
                </label>
              </button>

              {/* Browse Button */}
              <button
                type='submit'
                className='w-full sm:w-auto bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base'
              >
                Browse
              </button>
            </div>
          </div>

          {FormError.file && (
            <p className='text-red-500 text-sm mt-2'>{FormError.file}</p>
          )}

          {/* Submit */}
          <div className='flex justify-start items-center mt-6'>
            <button
              type='submit'
              className='bg-blue-600 font-medium text-gray-950 px-6 py-3 rounded hover:bg-blue-700 transition w-full sm:w-auto'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactUs;
