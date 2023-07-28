import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white p-4'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full p-4 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
                <p className='py-6'>You can contact me with below form</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/8f1b0ff1-1acc-42fd-a803-c125003741cf" method='POST' className='flex flex-col w-fll md:w-1/2'>
                    <input type='text' name='name' required="required" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='email' name='email' required="required" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" required="required" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message here'></textarea>
                    <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit?</button>
                </form>
            </div>
        </div>
    </div>
  ) 
}

export default Contact