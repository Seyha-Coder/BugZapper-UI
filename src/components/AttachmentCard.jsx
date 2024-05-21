import React from 'react'

function AttachmentCard() {
  return (
    <div className='w-[414px] h-[77px] rounded-radius shadow-md flex '>
        <div className='p-3 border-r text-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 256"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 176H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m-8-56V44l44 44Z"/></svg>
        </div>
        <div className='h-full p-4 '>
            <h3 className='mb-1 text-paragraph16_medium'>To-do-min-project...</h3>
            <p className='text-gray-400 text-paragraph16_regular'>Lorem ipsum dolor sit amet.</p>
        </div>

    </div>
  )
}

export default AttachmentCard