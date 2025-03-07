import Button, { FilledButton } from '../ButtonComponents/BorderButton';

const HeroBanner = ({ text, desc, img, btn, btn2 }) => {
  return (
    <div className='relative w-full h-[400px] sm:h-[600px]'>
      {/* Image with overlay text */}
      <div className='relative w-full h-full'>
        <img
          src={img}
          alt='carousel'
          className='w-full h-full object-cover rounded-md'
        />
        {/* Text Overlay */}
        <div className='absolute inset-0 flex items-center text-white  bg-black bg-opacity-50 justify-between font-roboto'>
          <main className='mx-4'>
            {text && (
              <h1 className='text-3xl sm:text-5xl font-semibold leading-snug sm:ms-5 mb-4'>{text}</h1>
            )}
            {desc && <p className='text-md sm:text-lg font-semibold sm:ms-5'>{desc}</p>}
            <div className='flex items-center justify-center gap-4 text-white'>
              {btn && (
                <Button
                  className='text-white hover:text-black'
                  text={'Get Started'}
                  color={'white'}
                />
              )}
              {btn2 && <FilledButton text={'Contact Us'} color={'black'} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
