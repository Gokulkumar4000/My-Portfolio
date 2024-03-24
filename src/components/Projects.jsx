import React from 'react'
import installNode from '../asserts/installNode.jpg'
import navbar from '../asserts/navbar.jpg'
import reactParallax from '../asserts/reactParallax.jpg'
import reactSmooth from '../asserts/reactSmooth.jpg'
import reactWeather from '../asserts/reactWeather.jpg'
import userstate from '../asserts/usestate.jpg'

const Projects = () => {

  const projects =[
    {
        id:1,
        src:installNode,
        button1:'Code',
        button2:'Demo'
    },
    {
        id:2,
        src:navbar,
        button1:'Code',
        button2:'Demo'
    },
    {
        id:3,
        src:reactParallax,
        button1:'Code',
        button2:'Demo'
    },
    {
        id:4,
        src:reactSmooth,
        button1:'Code',
        button2:'Demo'
    },
    {
        id:5,
        src:reactWeather,
        button1:'Code',
        button2:'Demo'
    },
    {
        id:6,
        src:userstate,
        button1:'Code',
        button2:'Demo'
    },
]

  return (
    <div name='projects' className='bg-gradient-to-b from-black to-gray-800 h-full w-full text-white '> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div pb-4>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 ms:px-0'>
            {projects.map(({id,src,button1,button2})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='installNode' className='rounded-md duration-200 hover:scale-105'/> 
                    <div className='flex items-center justify-center'>
                        <button className='w-fit px-6 py-3 m-4 duration-200 hover:scale-105   text-white bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md '>{button1}</button>
                        <button className='w-fit px-6 py-3 m-4 duration-200 hover:scale-105   text-white bg-gradient-to-l from-cyan-500 to-blue-500  hover:bg-gradient-to-r from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md '>{button2}</button>
                    </div>
                </div>
            ))}
            </div>            
        </div>
    </div>
  )
}

export default Projects