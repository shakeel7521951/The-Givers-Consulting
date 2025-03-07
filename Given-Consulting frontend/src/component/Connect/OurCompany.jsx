import React from 'react';
import three from '../../assets/ConnectImage/three.jpg';
import { Link } from 'react-router-dom';

export default function OurCompany() {
    const ship = [
        {
            img: three,
            title: 'Our Company',
            leading: 'Leading the industry and connecting the world.',
            para: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            get: 'Get Personalised Business Advice',
            btn: 'Contact us',
        },
    ];

    return (
        <>

        {/* shipment our company section */}
        
            <div className="w-full h-auto py-5 flex justify-center items-center rounded-lg ">
                <div className="w-full max-w-5xl bg-cyan-100  shadow-lg overflow-hidden rounded">
                    {ship.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row items-center lg:items-stretch"
                        >
                            <img
                                src={data.img}
                                className="w-full lg:w-1/2 object-cover"
                                alt="Our Company"
                            />
                            <div className="flex flex-col justify-center items-center p-6 lg:p-10 bg-white">
                                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                                    {data.title}
                                </h1>
                                <h3 className="text-lg font-semibold text-gray-600 mb-4 text-center lg:text-left">
                                    {data.leading}
                                </h3>
                                <p className="text-gray-500 text-center lg:text-left mb-6">
                                    {data.para}
                                </p>
                                <h2 className="text-gray-700 font-semibold mb-4 text-center lg:text-left">
                                    {data.get}
                                </h2>
                                <Link to='/contact' className="bg-[#BCF20B] text-gray-800 font-semibold py-2 px-6 rounded hover:bg-[#A9E10A]">
                                    {data.btn}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className='  text-center text-3xl my-5 md:my-8'>Contact Us</h1>
        </>
    );
}
