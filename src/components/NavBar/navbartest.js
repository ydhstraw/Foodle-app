import React from 'react';
import {Nav, NavLink,  NavMenu} from './navbarteststyle';
const Navbartest = () => {
    return (
        <>
        <div>
            <Nav>
                <NavMenu>
                    <NavLink to="/lowfat" activeStyle>
                    <span>Lowfat </span> 
                    </NavLink>
                    <NavLink to="/balanced" activeStyle>
                    <span>Balanced </span> 
                    </NavLink>
                    <NavLink to="/highprotein" activeStyle>
                    <span>High Protein </span> 
                    </NavLink>
                </NavMenu>
            </Nav>
            </div>
        </>
    );
};

export default Navbartest;