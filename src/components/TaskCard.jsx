import React from 'react'

function TaskCard() {
  return (
    <div className='relative w-[255px] h-[189px]  rounded-radius shadow-around'>
    <button className='absolute px-4  mb-10 text-red-300 bg-red-200 -top-[11px] left-[20px] text-paragraph_small_regular rounded-radius'>
        Web Design
    </button>
    <div className='w-full p-4 pt-6'>
        <h3 className='my-3 text-paragraph16_medium'>Learn about next js</h3>
        <p className='text-gray-400 text-paragraph_small_regular'>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
        </p>
    </div>
    <hr />
    <div className='flex-col p-4'>
        <p className='text-gray-400 text-paragraph_small_regular'>Deadline</p>
        <div className='flex'>
            <div className='flex items-center text-gray-400 text-paragraph_small_regular'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120m59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z"/></svg>
                <span className='px-2'>12/12/2022</span>
            </div>
            <div className='flex items-center text-gray-400 text-paragraph_small_regular'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path stroke-linecap="round" d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2m5 9h6m-6 4h3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></g></svg>
                <span className='px-1'>0 files</span>
                
            </div>
        </div>
    </div>
</div>

  )
}

export default TaskCard