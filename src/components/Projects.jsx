import React from 'react'
import installNode from '../asserts/installNode.jpg'
import navbar from '../asserts/navbar.jpg'
import reactParallax from '../asserts/reactParallax.jpg'
import reactSmooth from '../asserts/reactSmooth.jpg'
import reactWeather from '../asserts/reactWeather.jpg'
import userstate from '../asserts/usestate.jpg'

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'Node.js Installer',
      src: installNode,
      button1: 'Code',
      button2: 'Demo',
      codeLink: 'https://github.com/yourusername/node-installer',
      demoLink: 'https://node-installer-demo.netlify.app'
    },
    {
      id: 2,
      name: 'Responsive Navbar',
      src: navbar,
      button1: 'Code',
      button2: 'Demo',
      codeLink: 'https://github.com/yourusername/responsive-navbar',
      demoLink: 'https://responsive-navbar-demo.netlify.app'
    },
    {
      id: 3,
      name: 'React Parallax',
      src: reactParallax,
      button1: 'Code',
      button2: 'Demo',
      codeLink: 'https://github.com/yourusername/react-parallax',
      demoLink: 'https://react-parallax-demo.netlify.app'
    },
    {
      id: 4,
      name: 'Smooth Scrolling',
      src: reactSmooth,
      button1: 'Code',
      button2: 'Demo',
      codeLink: 'https://github.com/yourusername/smooth-scrolling',
      demoLink: 'https://smooth-scrolling-demo.netlify.app'
    },
    {
      id: 5,
      name: 'Weather App',
      src: reactWeather,
      button1: 'Code',
      button2: 'Demo',
      codeLink: 'https://github.com/yourusername/weather-app',
      demoLink: 'https://weather-app-demo.netlify.app'
    },
    {
      id: 6,
      name: 'React useState Guide',
      src: userstate,
      button1: 'Code',
      button2: 'Demo',
      codeLink: 'https://github.com/yourusername/react-usestate',
      demoLink: 'https://react-usestate-demo.netlify.app'
    },
  ]

  return (
    <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'> 
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({id, name, src, button1, button2, codeLink, demoLink}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <div className='p-4 text-center'>
                <h3 className='text-xl font-semibold text-cyan-400'>{name}</h3>
              </div>
              <img src={src} alt={`${name} screenshot`} className='rounded-md duration-200 hover:scale-105'/> 
              <div className='flex items-center justify-center'>
                <a 
                  href={codeLink} 
                  target='_blank' 
                  rel='noreferrer'
                  className='w-fit px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center rounded-md'
                >
                  {button1}
                </a>
                <a 
                  href={demoLink} 
                  target='_blank' 
                  rel='noreferrer'
                  className='w-fit px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center rounded-md'
                >
                  {button2}
                </a>
              </div>
            </div>
          ))}
        </div>            
      </div>
    </div>
  )
}

export default Projects
