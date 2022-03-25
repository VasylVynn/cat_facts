import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Nav,
    Logo,
    Hamburger,
    MenuLink,
    Menu
} from './styles'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Nav>
        <Logo href='#'>
            Cat <span>Facts</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)} >
            <span />
            <span />
            <span />
        </Hamburger>
        <Menu isOpen={isOpen} >
            <MenuLink to={"/login"} component={Link} >Log in</MenuLink>
            <MenuLink to={"/register"} component={Link}>Register</MenuLink>
            <MenuLink to={"/facts"} component={Link}>Facts</MenuLink>
            <MenuLink to={"/fav_facts"} component={Link}>My Facts</MenuLink>

        </Menu>
    </Nav>;
}


export default Navbar;
