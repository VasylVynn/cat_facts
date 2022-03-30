import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import {
    Nav,
    Logo,
    Hamburger,
    MenuLink,
    Menu,
    LogoutB
} from './styles'
import Logout from '../Logout/Logout';
import { ICred } from '../../interfaces/interfaces';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const routeChange = (path: string) => {
        navigate(path);
    }

    function CheckLogin() {
        const localStorageUsers: ICred[] = localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials") as string) : [];
        let isLoggedIn = false;
        if (localStorageUsers.length) {
            localStorageUsers.forEach(user => {
                if (user.isLoggedIn === true) {
                    isLoggedIn = true;
                }
            });
        }
        return isLoggedIn;
    };

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
            <MenuLink isLoggedIn={!CheckLogin()} to={"/login"} component={Link} >Log in</MenuLink>
            <MenuLink isLoggedIn={!CheckLogin()} to={"/register"} component={Link}>Register</MenuLink>
            <MenuLink isLoggedIn={CheckLogin()} to={"/facts"} component={Link}>Facts</MenuLink>
            <MenuLink isLoggedIn={CheckLogin()} to={"/fav_facts"} component={Link}>My Facts</MenuLink>
            <LogoutB isLoggedIn={CheckLogin()} onClick={() => { Logout(); routeChange('/') }}>Logout</LogoutB>
        </Menu>
    </Nav>;
}

export default Navbar;
