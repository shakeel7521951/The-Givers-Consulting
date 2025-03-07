import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navList = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Services', link: '/it' },
    { id: 3, title: 'Consultancy', link: '/consultancy' },
    { id: 4, title: 'Human Resource', link: '/human-resources' },
    { id: 5, title: 'Import & Export', link: '/import-export' },
  ];

  const servicesDropdown = [
    { id: 78, title: 'Travelling', link: '/international' },
    { id: 79, title: 'Employement', link: '/it' },
    { id: 80, title: 'IT Services', link: '/it' },
  ];

  const contact = [
    { id: 1, title: '+92 300 8677267' },
    { id: 2, title: '+92 300 5589959' },
    { id: 3, title: '+27 79 573 2438' },
  ];

  return (
    <footer className='bg-gradient-to-b from-gray-800 to-black text-white py-10 mt-12'>
      {/* Top Section */}
      <div className='container mx-auto px-4 md:flex md:justify-between'>
        {/* Logo and About */}
        <div className='mb-8 md:mb-0 md:w-1/3'>
          <img src={logo} alt='logo' className='w-20 h-20 mb-4' />
          <p className='text-gray-400 text-sm w-64'>
            Delivering top-notch services across various domains with
            professionalism and expertise.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='mb-8 md:mb-0 md:w-1/3'>
          <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
          <ul>
            {navList.map((item) => (
              <li key={item.id} className='mb-2'>
                <Link
                  to={item.link}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Dropdown Links */}
        <div className='md:w-1/3'>
          <h2 className='text-lg font-bold mb-4'>Our Services</h2>
          <ul>
            {servicesDropdown.map((service) => (
              <li key={service.id} className='mb-2'>
                <Link
                  to={service.link}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className='md:w-1/3'>
          <h2 className='text-lg font-bold mb-4'>Contact</h2>
          <ul>
            {contact.map((contactItem) => (
              <li key={contactItem.id} className='mb-2 text-gray-400'>
                {contactItem.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 mt-10 pt-6'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm text-center md:text-left'>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a
              href='#'
              className='text-gray-400 hover:text-white transition-colors'
              aria-label='Facebook'
            >
              <FaFacebook size={20} />
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-white transition-colors'
              aria-label='Twitter'
            >
              <FaTwitter size={20} />
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-white transition-colors'
              aria-label='LinkedIn'
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-white transition-colors'
              aria-label='Instagram'
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Default export
export default Footer;
