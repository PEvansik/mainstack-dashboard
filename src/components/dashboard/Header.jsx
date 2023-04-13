
import './header.css'
import { useState } from 'react'
import mainstack from '../asset/mainstack/mainstack.svg'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdClose} from 'react-icons/md'


export const Header = ({toggleMenu, ham}) => {

    const close = {color: "red", fontSize: "24px"}

    return(
        <div className="header">

            <div className="logo"> 
                <img src={mainstack} alt="mainstack-logo" />
            </div>

            <div className="dash-head">
                <h3>Dashboard</h3>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {!ham 
                    ? <RxHamburgerMenu className='open-menu' size='24px'/> 
                    : <MdClose className='close-menu' style={close} />}
            </div>
        </div>
    )
}