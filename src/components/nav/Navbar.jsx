

import mainstack from '../asset/mainstack/mainstack.svg'
import dashlogo from '../asset/nav/dashlogo.svg'
import profilepic from '../asset/nav/profilepic.svg'
import dots from '../asset/nav/dots.svg'
import item1 from '../asset/nav/item1.svg'
import item2 from '../asset/nav/item2.svg'
import item3 from '../asset/nav/item3.svg'
import item4 from '../asset/nav/item4.svg'
import item5 from '../asset/nav/item5.svg'
import item6 from '../asset/nav/item6.svg'
import item7 from '../asset/nav/item7.svg'
import item8 from '../asset/nav/item8.svg'

import './navbar.css'


export const Navbar = () => {


    return (
        <div className="navbar">
            <div className="side-nav-logo">
                <div className="nav-logo"> 
                    <img src={mainstack} alt="mainstack-logo" />
                </div>
            </div>

            <div className="list-profile">
                <div className="nav-items">
                    <div className="nav-dash">
                        <Navitem 
                            headlogo={dashlogo}
                            headlogoalt='dashlogo'
                            headtext='Dashboard'/>
                        <div className="navlistitem-container">
                            <Navlistitem
                                listlogo={item1}
                                listlogoalt='item1'
                                listtext='1' />
                            <Navlistitem
                                listlogo={item2}
                                listlogoalt='item2'
                                listtext='2' />
                            <Navlistitem
                                listlogo={item3}
                                listlogoalt='item3'
                                listtext='3' />
                        </div>

                    </div>

                    <div className="nav-other ">
                        <p className="other">OTHERS 1</p>
                        <div className="navlistitem-container">
                            <Navlistitem
                                listlogo={item4}
                                listlogoalt='item4'
                                listtext='4' />
                            <Navlistitem
                                listlogo={item5}
                                listlogoalt='item5'
                                listtext='5' />
                        </div>

                    </div>

                    <div className="nav-other">
                        <p className="other">OTHER 2</p>
                        <div className="navlistitem-container">
                        <Navlistitem
                            listlogo={item6}
                            listlogoalt='item6'
                            listtext='6' />
                        <Navlistitem
                            listlogo={item7}
                            listlogoalt='item7'
                            listtext='7' />
                        <Navlistitem
                            listlogo={item8}
                            listlogoalt='item8'
                            listtext='8' />
                        </div>

                    </div>
                    
                </div>

                <div className="profile">
                    <div className="profile-holder">
                        <div className="profile-details">
                            <div className="profile-pic">
                                <img src={profilepic} alt="profile-pic" />
                            </div>
                            <p className="name">Blessing Daniels</p>
                        </div>
                        <div className="dots">
                            <img src={dots} alt="dots" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const Navitem = ({headlogo, headlogoalt, headtext}) => {
    return (
        <div className="nav-item">
            <div className="nav-item-head">
                <img className='nav-item-image' src={headlogo} alt={headlogoalt} />
                <p className='nav-item-text'>{headtext}</p>
            </div>

        </div>
    )
}


export const Navlistitem = ({listlogo, listlogoalt, listtext}) => {
    return(
        <div className="nav-list-item">
            <div className="nav-list-item-holder">
                <img src={listlogo} alt={listlogoalt} />
            </div>

            <p>item {listtext}</p>
        </div>
    )
}