import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

const Navbar =()=>{
    return(
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Ziggurat
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="product">Product</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="docs">Docs</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="company">Company</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="register">Register</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    )
}
export default Navbar;