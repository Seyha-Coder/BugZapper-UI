import React from 'react'

function TopRecruitmentSmallCard() {
  return (
    <div className='w-[327px] h-[56px] flex p-2 bg-white shadow-sm'>
        <img src="https://th.bing.com/th/id/OIP.OfwHEnnlPIFsXJkjQa2l5AHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
        className='w-[44px] h-[44px] rounded-sm'
        alt="" />
        <div className='p-1 pl-3'>
            <p className=' text-paragraph16_regular'>Senior Software Developer</p>
            <p className='text-gray-400 text-paragraph14_regular'>We are excited to announce an op...</p>
        </div>
    </div>
  )
}

export default TopRecruitmentSmallCard