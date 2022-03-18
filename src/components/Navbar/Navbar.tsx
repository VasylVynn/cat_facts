import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/facts/factReducer";
import { logoutSuccess } from "../../redux/facts/factsActions";
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



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeChange = (path: string) => {
        navigate(path);
    }

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
            <MenuLink isLoggedIn={!isLoggedIn} to={"/login"} component={Link} >Log in</MenuLink>
            <MenuLink isLoggedIn={!isLoggedIn} to={"/register"} component={Link}>Register</MenuLink>
            <MenuLink isLoggedIn={isLoggedIn} to={"/facts"} component={Link}>Facts</MenuLink>
            <MenuLink isLoggedIn={isLoggedIn} to={"/fav_facts"} component={Link}>My Facts</MenuLink>
            <LogoutB isLoggedIn={isLoggedIn} onClick={() => {
                dispatch(logoutSuccess()); Logout(); routeChange('/')

            }}>Logout</LogoutB>



        </Menu>
    </Nav>;
}


export default Navbar;
