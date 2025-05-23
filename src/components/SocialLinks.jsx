import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>LinkedIn<FaLinkedin size={30} /></>
      ),
      href: 'https://linkedin.com',
    },
    {
      id: 2,
      child: (
        <>Github<FaGithub size={30} /></>
      ),
      href: 'https://github.com/Gokulkumar4000',
    },
    {
      id: 3,
      child: (
        <>Mail<HiOutlineMail size={30} /></>
      ),
      href: 'mailto:gokulkumargk295@gmail.com',
    },
    {
      id: 4,
      child: (
        <>Resume<BsFillPersonLinesFill size={30} /></>
      ),
      href: 'https://drive.google.com/file/d/110t5f-IG75bLnrLCV3QCgcsTEyid7IOh/view?usp=drive_link',
      // style: 'rounded-br-md',
      download: 'GokulKumar_Resume'
    },
    {
      id: 5,
      child: (
        <>Instagram<FaInstagram size={30} /></>
      ),
      href: 'https://instagram.com/g_o_k_.u_l',
    },
  ];

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li 
            key={id} 
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style || ''}`}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer noopener'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
