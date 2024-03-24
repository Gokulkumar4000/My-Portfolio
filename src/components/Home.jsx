import React from 'react';
import {Link} from 'react-scroll';
import Hero from '../asserts/hero.jpg';
import Mark from '../asserts/mark.jpg';
import Jeff from '../asserts/jeff.jpg';
import Elon from '../asserts/elon.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
const Home = () => {
    const slideImages = [Hero, Mark, Jeff,Elon];
    return (
        <div name='home' className='h-full w-full bg-gradient-to-b from-black via-black to-gray-800 py-20'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-7xl font-bold text-white'>
                        I'm a Full-Stack Developer
                    </h2>
                    <p className='text-white py-2 max-w-md  '>
                        <b>Hey</b>, I'm <b> K.Gokul kumar from தமிழ்நாடு  in India</b>.I'm a good skilled <b>FullStack Developer</b>.I have done many projects including this portfolio website.I have <b>3 years</b> of experience and I completed many course in <b>Sololearn & Greatlearning</b>.I like you to know about me.
                    </p>
                    <div>
                        <Link to='projects' smooth duration={500} className='bg-gradient-to-l from-cyan-500 to-blue-500 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/3 mt-60 md:mt-0'>
                    <Slide
                        easing='ease'
                        autoplay={true}
                        autoplayInterval={10} 
                    >
                        {slideImages.map((image, index) => (
                            <div key={index} className='each-slide'>
                                <img src={image} alt={`slide-${index}`} className='rounded-2xl w-full h-96 max-w-md object-cover' />
                            </div>
                        ))}
                    </Slide>
                    {/* <img src={Hero} alt="img" className='rounded-2xl mx-auto w-100 h-96 md:w-full' /> */}
                </div>
            </div>
        </div>
    );
}

export default Home