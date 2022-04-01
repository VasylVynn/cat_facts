import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ICred, LoginError } from '../../interfaces/interfaces';
import {
    Wrapper,
    InputBox,
    Input,
    Label,
    LogInBTN,
    ErrorMessage,
    LoginTitle
} from './styles'
import { SetCurrentUser } from '../../components/Logout/Logout';

const Login = () => {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<LoginError>(
        {
            loginError: ''
        }
    )
    const navigate = useNavigate();
    const routeChange = (path: string) => {
        navigate(path);
    }

    function Login() {
        const localStorageUsers: ICred[] = localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials") as string) : [];
        let userFound = false;
        if (localStorageUsers.length) {
            localStorageUsers.forEach(user => {
                if (user.username === username && user.password === password && user.isLoggedIn === false) {
                    userFound = true;
                    SetCurrentUser(user.username);
                    user.isLoggedIn = true;
                }
                if (localStorageUsers.length)
                    localStorage.setItem("credentials", JSON.stringify(localStorageUsers))
            });
        }
        if (userFound) {
            routeChange('/facts')
        } else setErrors({ loginError: "Wrong username or password" })
    }

    return <Wrapper>
        <LoginTitle>Login</LoginTitle>
        <InputBox>
            <Label>Username</Label>
            <Input type="text" name="Username" onChange={function handleUsername(event) {
                SetUsername(event.target.value)
                setErrors({ loginError: "" })
            }} required />
        </InputBox>
        <InputBox>
            <Label>Password</Label>
            <Input type="password" name="Password" onChange={function handlePassword(event) {
                SetPassword(event.target.value)
                setErrors({ loginError: "" })
            }} required />
            {errors.loginError && <ErrorMessage>{errors.loginError}</ErrorMessage>}
        </InputBox>
        <LogInBTN onClick={Login} >Log in</LogInBTN>
    </Wrapper>;
}

export default Login;
