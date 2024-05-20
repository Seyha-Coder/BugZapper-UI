import React from 'react'

function HistoryCard() {
  return (
    <div className='flex-col h-40 p-3 bg-red-100 shadow-md w-72 rounded-radius'>
        <div className='flex justify-between w-full'>
            <div className='flex'>
                <img src="https://www.bing.com/th?id=OIP.KoKk_vYZW-dFP-YSdRSOZwHaEo&w=153&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='w-10 h-10 rounded-full' alt="" />
                <div className='px-3'>
                    <h3 className=' text-paragraph14_medium'>John Wich</h3>
                    <p className='text-gray-400 text-paragraph_small_regular'>Company</p>
                </div>
            </div>
            <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/></svg>
            </div>
        </div>
        <div className='w-full'>
            <h3 className='py-2 text-paragraph16_medium'>UI/UX Design</h3>
            <p className=' text-paragraph14_regular'>Lorem ipsum dolor sit amet conse ctetur adipisicing</p>
        </div>
        <div className='flex justify-between w-full my-1'>
            <div className='flex items-center text-gray-400 text-paragraph_small_regular'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120m59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z"/></svg>
                <span className='px-2'>12/12/2022</span>
            </div>
            <button className='px-4 text-white bg-red-600 rounded-[10px] text-paragraph_small_medium'>
                Poor
            </button>
        </div>
    </div>
  )
}

export default HistoryCard