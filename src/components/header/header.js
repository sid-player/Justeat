import React, { useState } from 'react';
import './header.css';
import logo from '../../pages/logo.png'
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Nav, NavbarText, NavbarToggler } from 'reactstrap';
import {Icon} from '@material-ui/core'

const Header = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);


    return (
        <div>
            <Navbar color='light' expand='md' light >
                <NavbarBrand href='/'>
                    <div className="row logo_container">
                        <img src={logo} className="logo" alt="logo" />
                        <h4 className="LogoName">JustEat</h4>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
                <Collapse isOpen={isNavbarOpen} navbar />
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink href='/cart'>
                            <NavbarText>Cart</NavbarText>
                            <Icon className='fa fa-shopping-cart' />
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;