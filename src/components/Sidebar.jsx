'use client'

import { useState } from 'react';
import { SideBarNavigation } from '@/lib/navigations'
import { IoMdMenu } from "react-icons/io";
import { HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  
  const pathname = usePathname();
  console.log(pathname , "current path");
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };
  


  const [isOpenWorkSpace, setIsOpenWorkSpace] = useState(false);
  const toggleWorkSpaceDropdown = () => {
    setIsOpenWorkSpace(!isOpenWorkSpace);
  };

  // Close when click on another title of menu
  const toggleWorkSpaceClose = () => {
    setIsOpenWorkSpace(false);
  };

  return (
    
    <div className={`h-screen ${open ? 'sm:w-40 lg:w-72 md:w-64' : 'w-14'} transition-all space-y-3 shadow z-50 text-blue-600`}>
      <div className={`${open ? '' : 'flex items-center justify-center'} flex justify-between space-x-2 h-[63px] p-0 m-0`}>
        <div className={`flex items-center justify-center p-2 text-white ${open ? 'flex' : 'hidden'}`}>
          <img src={'/assets/logo/blueLogo.svg'} alt="Logo" />
        </div>
        <div className={`flex items-center justify-center h-16 p-2 text-2xl  cursor-pointer ${open? 'transition-all': 'w-full '}`} onClick={toggleOpen}>
          <IoMdMenu className='text-blue-500' />
        </div>
      </div>
      <div className={` text-lg  ${open? 'pr-5 transition-all': ''}`}>
        {SideBarNavigation.map((link, index) => (
          <div key={index} >
            {link.path ? (
              <Link href={link.path} key={index} className={`${pathname ==link.path? 'bg-primary text-white ': ''} rounded-md flex w-full h-auto p-2  hover:no-underline  items-center text-xl ${open? 'transition-all':'justify-center'}`} onClick={toggleWorkSpaceClose}>
                <span className=''>{link.icon}</span>
                <span className={`${open ? 'ml-2 transition-all text-lg' : 'hidden'}`}>{link.tittle}</span>
              </Link>
            ) : (
              <div className={` ${isOpenWorkSpace ? 'transition-all duration-400 ' : 'transition-all duration-400'} rounded-md text-xl hover:cursor-pointer flex items-center p-2 space-x-2 hover:bg-gray-200 hover:rounded-r-xl  ${open? 'transition-all':'justify-center'}`} onClick={toggleWorkSpaceDropdown}>
                <span className='text-xl'>{link.icon}</span>
                <span className={` ${open ? 'transition-all text-lg' : 'hidden'} flex justify-between items-center w-full`}>
                  {link.tittle}
                  {isOpenWorkSpace ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                </span>
              </div>
            )}
            {link.childrens && (
              <div className={`${isOpenWorkSpace ? 'block  bg-gray-200 transition-all duration-400' : 'hidden transition-all duration-400'} transition-all w-full h-auto no-underline duration-400 text-xl`}>
                {link.childrens.map((child, childIndex) => (
                  <Link href={child.path} key={childIndex} className={`${pathname ==child.path? 'bg-primary text-white ': ''} flex items-center  hover:no-underline rounded-md  p-2 pl-5`}>
                    <span className='text-xl'>{child.icon}</span>
                    <span className={`${open ? 'transition-all' : 'hidden'} ml-2`}>{child.tittle}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
