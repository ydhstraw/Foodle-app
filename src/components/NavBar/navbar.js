import React from 'react';
import {Nav, NavLink,  NavMenu} from './NavbarStyle';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <span>Foodle</span>
                </NavLink>
                
                <NavMenu>
                    
                    <NavLink to="./favorite" activeStyle >
                        <span>Foodmark</span> 
                    </NavLink>
                    <NavLink to="/type" activeStyle>
                        <span>Type </span> 
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        <span>About </span> 
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;