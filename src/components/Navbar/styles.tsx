import styled from "styled-components";
import { Link } from 'react-router-dom';




export {
    Nav,
    Logo,
    Hamburger,
    MenuLink,
    Menu
}



const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #cfcfcf;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const Logo = styled.a`
    padding: 1rem 0;
    color: #16ce5d;
    text-decoration: none;
    font-weight: 800;
    font-size: 2rem;

    span{
        font-weight: 400;
        font-size: 1.6rem;

    }

`;
const Hamburger = styled.div`
display: none;
 flex-direction: column;
 cursor: pointer;

 span {
     height: 5px;
     width: 30px;
     background: #7b7fda;
     margin: 4px;
     border-radius: 5px;
 }
 @media (max-width: 768px) {
     display: flex;
    }
`;

type LinkProps = {
    to?: string;
    component?: any;
    isLoggedIn?: boolean;
}
const MenuLink = styled(Link) <LinkProps>`
    padding:1rem 2rem;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #449c78;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    display: ${({ isLoggedIn }) => (isLoggedIn ? "block" : "none")};

    &:hover{
        color: #eeeeee;
        background-color: #1f8145;
        border-radius: 5px;

}
`;
type Login = {
    isLoggedIn: boolean;
}


export const LogoutB = styled.button<Login>`
 padding:1rem 2rem;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #449c78;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    border:0;
    background-color: transparent;
    display: ${({ isLoggedIn }) => (isLoggedIn ? "block" : "none")};

    &:hover{
        color: #eeeeee;
        background-color: #1f8145;
        border-radius: 5px;}
    
`;

type Props = {
    isOpen: boolean;
}
const Menu = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in-out;
        background-color: #0be5ec;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    }

`;

