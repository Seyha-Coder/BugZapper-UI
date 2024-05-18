import React from 'react'

function Login() {
  return (
    <div className="relative flex items-center justify-center w-full h-full font-poppins">
        <img src="assets\background\loginRightSide.svg" alt="" className='absolute top-0 right-0' />
        <img src="assets\background\loginLeftSide.svg" alt="" className='absolute bottom-0 left-0' />
      <div className='relative w-10/12 rounded-lg shadow h-4/6'>
        
           <div className='absolute w-full h-full bg-white rounded-lg opacity-60'></div>
           <div className='absolute flex w-full h-full'>
              <div className='w-6/12 h-full '>
                  
                  <div className='w-full p-10 bg-green-200 h-[25%]'>
                      <img src="/assets/logo/blueLogo.svg" alt="" />
                  </div>
                  <div className='flex items-center justify-center w-full h-[75%]'>
                     <div className='w-8/12 h-full p-0 m-0 bg-red-200'>
                        <p className=' text-primary text-sub_header_medium'>Welcome to BugZapper</p>
                        <p className=' text-gray_slate'>Streamline the work effeciently</p>
                     </div>
                  </div>
              </div>
              <div className='w-6/12 h-full bg-primary'>
                  kk
              </div>
           </div>
      </div>
    </div>

  )
}

export default Login