import React from 'react'
import css from '../asserts/css.png'
import html from '../asserts/html.png'
import node from '../asserts/node.png'
import react from '../asserts/react.png'
import tailwind from '../asserts/tailwind.png'

const Experience = () => {

    const cources=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:node,
            title:'Node',
            style:'shadow-green-800'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        }
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                <p className='py-6'>These are the cources i worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 text-center ms:px-0'>
                {cources.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div> 
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience