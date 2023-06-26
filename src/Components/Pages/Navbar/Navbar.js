import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode,
} from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Fragment>
            <nav className='navbar'>
                <div className={(showMenu ? "navbarMenu show-menu" : "navbarMenu")}>
                    <ul className='navbarList'>
                        <li className='navbarItem'>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'navbarLink activeNav' : 'navbarLink'
                            } to={'/'} onClick={() => setShowMenu(!showMenu)}>
                                <FaHome className='navbarIcon' />
                                <h3 className='navbarName'>Home</h3>
                            </NavLink>
                        </li>
                        <li className='navbarItem'>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'navbarLink activeNav' : 'navbarLink'
                            } to={'/about'} onClick={() => setShowMenu(!showMenu)}>
                                <FaUser className='navbarIcon' />
                                <h3 className='navbarName'>About</h3>

                            </NavLink>
                        </li>
                        <li className='navbarItem'>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'navbarLink activeNav' : 'navbarLink'
                            } to={'/projects'} onClick={() => setShowMenu(!showMenu)}>
                                <FaFolderOpen className='navbarIcon' />
                                <h3 className='navbarName'>Projects</h3>

                            </NavLink>
                        </li>
                        <li className='navbarItem'>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'navbarLink activeNav' : 'navbarLink'
                            } to={'/contact'} onClick={() => setShowMenu(!showMenu)}>
                                <FaEnvelopeOpen className='navbarIcon' />
                                <h3 className='navbarName'>Contact</h3>

                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
