import React from 'react'
import './Sidebar.css'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import {IoIosArrowDropdown, IoMdArrowDropleft } from 'react-icons/io';
import {AiOutlineDashboard} from 'react-icons/ai';
import {BsTruck, BsTrash} from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import {GoPrimitiveDot} from 'react-icons/go'


export default function Sidebar () {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <div className='sideBarProfile'>
                        <CgProfile className='profilePic'/>
                        <div className='profiledetails'>
                            <span className='profileName'>Kachigo</span>
                            <span><GoPrimitiveDot/>Online</span>
                        </div>
                </div>
                <div className='sidebarsearch'>
                    <h3>search</h3>
                </div>
                <h3 className='sidebarTitle'> <AiOutlineDashboard/> Dashboard <IoMdArrowDropleft/> </h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        Dashboard
                    </li>
                </ul>
                <h3 className='sidebarTitle'> <BsTruck/>Trucks <IoMdArrowDropleft/></h3>
                <h3><BsTrash/> Bins <IoMdArrowDropleft/></h3>
            </div>
        </div>
    </div>
  )
}
