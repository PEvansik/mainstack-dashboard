
import './header.css'
import { useState } from 'react'
import mainstack from '../asset/mainstack/mainstack.svg'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdClose} from 'react-icons/md'


export const Header = ({toggleMenu, ham}) => {

    // console.log(menu)
    const close = {color: "red", fontSize: "24px"}

    return(
        <div className="header">
            {/* Remove this logo when removing the hamburger button */}
            <div className="logo"> 
                <img src={mainstack} alt="mainstack-logo" />
            </div>

            <div className="dash-head">
                <h3>Dashboard</h3>
            </div>

            {/* add menu button for mobil on this side */}
            <div className="hamburger" onClick={toggleMenu}>
                {!ham 
                    ? <RxHamburgerMenu className='open-menu' size='24px'/> 
                    : <MdClose className='close-menu' style={close} />}
            </div>
        </div>
    )
}