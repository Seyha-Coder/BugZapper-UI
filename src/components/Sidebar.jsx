'use client'

import { useState } from 'react';
import { SideBarNavigation } from '@/lib/navigations';
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi';

const Sidebar = () => {
  const pathname = usePathname();
 
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedWorkSpace, setIsExpandedWorkSpace] = useState(false);

  const toggleSidebar = () => {
    setisExpanded(!isExpanded);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleWorkSpaceDropdown = () => {
    setIsExpandedWorkSpace(!isExpandedWorkSpace);
  };


  return (
    <>
      {/*large screens */}
      <div className="hidden h-screen bg-white shadow-md text-primary lg:flex lg:flex-col lg:w-64">
        <div className='flex items-center justify-center w-full h-20 p-4'>
          <img src="/assets/logo/blueLogo.svg" alt="Logo" className='h-auto w-36' />
        </div>
        <div className="flex flex-col p-4">
          {SideBarNavigation.map((item, index) => (
            item.path ? (
              <Link href={item.path} key={index} className={`flex items-center p-2 hover:bg-gray-200 rounded ${pathname === item.path ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}>
                {item.icon}
                <span className="ml-4">{item.tittle}</span>
              </Link>
            ) : (
              <div key={index} className=''>
                <div className={`flex items-center p-2  rounded cursor-pointer hover:bg-gray-200 transition-all`} onClick={toggleWorkSpaceDropdown}>
                 <span className='text-xl'> {item.icon}</span>
                  <div className='flex items-center w-6/12'>
                 
                    {/* {item.icon} */}
                    <span className='ml-4'>{item.tittle}</span>
                  </div>
                  <div className='flex justify-end w-6/12'>
                    {isExpandedWorkSpace ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                  </div>
                </div>
                {isExpandedWorkSpace && (
                  <div className="pl-8 transition-all">
                    {item.childrens.map((child, childIndex) => (
                      <Link href={child.path} key={childIndex} className={`flex items-center p-2 hover:bg-gray-200 rounded ${pathname === child.path ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}>
                        {child.icon}
                        <span className="ml-4">{child.tittle}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>

      {/*small screens */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-40 transform bg-white text-primary transition-all duration-300 ${isExpanded ? 'w-60' : 'w-20'}`}>
        <div className={`flex items-center justify-between p-4 h-16`}>
          <img src="/assets/logo/logo.svg" alt="Logo" className={`h-auto w-16 transition-all duration-300 ${isExpanded ? 'hidden' : 'block'}`} />
          <img src="/assets/logo/blueLogo.svg" alt="Logo" className={`h-auto w-32 ${isExpanded ? 'block' : 'hidden'}`} />
          <button onClick={toggleSidebar} className={`p-2 text-2xl transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}>
            <IoMdMenu className='text-blue-500' onClick={toggleExpand} />
          </button>
        </div>
        <div className='h-full shadow-md'>
          <div className={`flex justify-center ${isExpanded ? 'hidden' : 'block'}`}>
            <button onClick={toggleSidebar} className={`p-2 text-2xl transition-all duration-300 ${isExpanded ? 'hidden' : 'block'}`}>
              <IoMdMenu className='text-blue-500' onClick={toggleExpand} />
            </button>
          </div>
          <div className="flex flex-col p-4 mt-4 ">
            {SideBarNavigation.map((item, index) => (
              item.path ? (
                <Link href={item.path} key={index} className={`flex ${isExpanded ? 'items-center' : 'justify-center'} p-2 hover:bg-gray-200 rounded ${pathname === item.path ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}>
                  <span className='text-xl'>{item.icon}</span>
                  <span className={`transition-all duration-300 ${isExpanded ? 'block px-2' : 'hidden'}`}>{item.tittle}</span>
                </Link>
              ) : (
                <div key={index} className=''>
                  <div className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-200 transition-all ${isExpanded ? 'flex justify-between' : 'justify-center'}`} onClick={toggleWorkSpaceDropdown}>
                    <div className='flex items-center'>
                    <span className='text-xl'> {item.icon}</span>
                      <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>{item.tittle}</span>
                    </div>
                    <HiOutlineChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpandedWorkSpace ? 'rotate-180' : ''} ${isExpanded? 'block': 'hidden'}`} />
                  </div>
                  {isExpandedWorkSpace && (
                    <div className={`transition-all ${isExpanded ? 'pl-8' : 'flex-col items-center pl-6'}`}>
                      {item.childrens.map((child, childIndex) => (
                        <Link href={child.path} key={childIndex} className={`flex items-center p-2 hover:bg-gray-200 rounded ${isExpanded? '': ' justify-center'} ${pathname === child.path ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}>
                          <span>{child.icon}</span>
                          <span className={`ml-4 ${isExpanded ? 'block' : 'hidden'}`}>{child.tittle}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
