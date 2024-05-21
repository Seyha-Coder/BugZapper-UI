import React from 'react'

function NotificationUserSmallCard() {
  return (
    <div className='flex w-[330px] h-[60px] rounded-sm shadow-around p-2'>
        <div className='w-[15%] h-full flex justify-center items-center '>
            <img src="https://th.bing.com/th/id/OIP.OfwHEnnlPIFsXJkjQa2l5AHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            className='w-[44px] h-[44px] rounded-full'
            alt="" />
        </div>
        <div className='p-1 pl-3 w-[78%] h-full'>
            <div className='flex'>
                <span className='text-gray-600 text-paragraph16_regular'>Senior</span>
                <span className='pl-1 text-gray-500 text-paragraph14_regular'>Updated his profile</span>
            </div>
            <p className='text-gray-400 text-paragraph_small_regular'>just now</p>
        </div>
        <div className='flex items-center justify-end w-[7%] '>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-12 font-bold ' viewBox="0 0 20 20"><path fill="currentColor" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/></svg>
        </div>
    </div>
  )
}

export default NotificationUserSmallCard