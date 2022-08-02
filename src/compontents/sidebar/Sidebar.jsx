import React from 'react'
import './Sidebar.css'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import {IoIosArrowDropdown, IoMdArrowDropleft } from 'react-icons/io';
import {AiOutlineDashboard} from 'react-icons/ai';
import {BsTruck, BsTrash} from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import {GoPrimitiveDot} from 'react-icons/go';
import {FcSearch} from 'react-icons/fc'


export default function Sidebar () {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                        <div className='sideBarProfile'>
                            <CgProfile className='sidebarprofilePic'/>
                    
                        <div className='profiledetails'>
                            <h3 className='sidebarprofileName'>Kachigo</h3>
                            <h4 className='inidicatortext'><GoPrimitiveDot className='onlineindicator'/>Online</h4>
                        </div>
                        </div>
                        <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="search"/>
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"><FcSearch/></i>
                                </button>
                            </div>
                            </div>
                        
                <h3 className='sidebarTitle'> <AiOutlineDashboard/> Dashboard <IoMdArrowDropleft/> </h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        Dashboard
                    </li>
                </ul>
                <h3 className='sidebarTitle'> <BsTruck className='sidebarIcons'/> Trucks <IoMdArrowDropleft/></h3>
                <h3><BsTrash className='sidebarIcons'/>  Bins<IoMdArrowDropleft/></h3>
                <div className='bottommenusection'>
                    <h3>settings</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
