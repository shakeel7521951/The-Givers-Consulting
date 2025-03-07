import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

const ContactUs = () => {
    const contacts = [
        {
            icon: <IoLocationOutline className="text-4xl text-black" />,
            title: 'Address:',
            detail: 'Office No 3021, Giga Mall Islamabad',
        },
        {
            icon: <MdOutlineEmail className="text-4xl text-black" />,
            title: 'Email:',
            detail: 'info@thegivers.com',
        },
        {
            icon: <FiPhone className="text-4xl text-black" />,
            title: 'Phone:',
            detail: '+923008677267',
        },
    ];

    return (
        <div className=" py-4">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white  p-6 rounded-lg "
                    >
                        <div className="mb-4 h-[60px] w-[60px]  rounded-full bg-[#BCF20B] flex justify-center items-center ">{contact.icon}</div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">{contact.title}</h2>
                        <p className="text-gray-600">{contact.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;
