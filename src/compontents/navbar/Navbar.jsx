import React, { Component } from 'react';
import "./Navbar.css";
import { MdNotificationsNone } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
            <div className='navbarwrapper'>
                <div className='topleft'>
                    <span className='logo'>SmartFetch</span>
                </div>
                <div className='topRight'>
                    <div className='navbarIconCntainer'>
                        <MdNotificationsNone className='notIcon'/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='navbarIconCntainer'>
                        <CgProfile className='profilePic'/>
                        <span className='profileName'>Kachigo</span>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
