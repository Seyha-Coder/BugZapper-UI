import React from 'react'

function MemberCard() {
  return (
    <div className='w-[270px] h-[106px] bg-white rounded-radius shadow-md p-4 flex items-center' >
        <img src="https://www.bing.com/th?id=OIP.KoKk_vYZW-dFP-YSdRSOZwHaEo&w=153&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='rounded-full h-14 w-14' alt="" />
        <div className='flex-col px-3'>
            <h3 className=' text-paragraph16_medium'>John Wich</h3>
            <span className=' text-paragraph_small_regular text-primary'>Developer</span>
            <span className='text-gray-400 text-paragraph_small_regular'>Jesica@gmail.com</span>
        </div>
    </div>
  )
}

export default MemberCard