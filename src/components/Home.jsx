import React from 'react';
import {Link} from 'react-scroll';
import HeroImage from '../asserts/hero.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
const Home = () => {
  return (
    <div name='home' className='h-full w-full bg-gradient-to-b from-black via-black to-gray-800 py-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:text-7xl font-bold text-white'>
                    I'm a Full-Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md  '>
                    <b>Hey</b>, I'm <b> K.Gokul kumar </b>from Tamilnadu in India.I'm a good skilled <b>FullStack Developer</b>.I have done many projects including this portfolio website.I have <b>6 years</b> of experience and I completed many course in <b>Sololearn & Greatlearning</b>.I like you to know about me.
                </p>
                <div>
                    <Link to='projects' smooth duration={500} className='bg-gradient-to-l from-cyan-500 to-blue-500 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                    '>
                        Projects
                        <span c className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage}alt='img' className='rounded-2xl mx-auto w-full h-96 md:w-full  '/>
            </div>
        </div>
    </div>
  )
}

export default Home