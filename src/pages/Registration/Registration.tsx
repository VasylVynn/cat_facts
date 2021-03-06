import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
    Wrapper,
    InputBox,
    Input,
    Label,
    SubmitBTN,
    ErrorMessage,
    RegistrationTitle
} from './styles'
import validateInfo from './validate';
import { SetCurrentUser } from '../../components/Logout/Logout';
import { RegistrationErrors } from '../../interfaces/interfaces';


const Registration = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const isLoggedIn: boolean = true;
    const [repeatPassword, setRepeatPassword] = useState('')

    const [errors, setErrors] = useState<RegistrationErrors>(
        {
            usernameError: '',
            passwordError: ''
        }
    )

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeChange = (path: string) => {
        navigate(path);
    }

    function Submit() {
        if (password === repeatPassword && username.length > 3) {
            const credentials = { username, password, isLoggedIn };
            let users = [credentials];
            const localStorageUsers = localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials") as string) : [];
            if (localStorageUsers.length)
                users = [...localStorageUsers, credentials]
            localStorage.setItem("credentials", JSON.stringify(users))
            SetCurrentUser(username);
            routeChange('/facts');
        } else setErrors(validateInfo(username, password, repeatPassword))
    }

    function PasswordChange(event: React.FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value)
        setErrors(prevState => ({
            ...prevState,
            passwordError: ''
        }))
    }

    function Password2Change(event: React.FormEvent<HTMLInputElement>) {
        setRepeatPassword(event.currentTarget.value)
        setErrors(prevState => ({
            ...prevState,
            passwordError: ''
        }))
    }
    return <Wrapper>
        <RegistrationTitle>Registration</RegistrationTitle>
        <InputBox>
            <Label>Username</Label>
            <Input type="text" name="Username" value={username} onChange={function UsernameChange(event) {
                setUsername(event.target.value)
                setErrors(prevState => ({
                    ...prevState,
                    usernameError: ''
                }))
            }} required />
            {errors.usernameError && <ErrorMessage>{errors.usernameError}</ErrorMessage>}
        </InputBox>
        <InputBox>
            <Label>Password</Label>
            <Input type="password" name="Password" value={password} onChange={PasswordChange} required />
            {errors.passwordError && <ErrorMessage>{errors.passwordError}</ErrorMessage>}
        </InputBox>
        <InputBox>
            <Label>Repeat password</Label>
            <Input type="password" name="Repeat Password" required onChange={Password2Change} />
        </InputBox>
        <SubmitBTN onClick={Submit} >Register</SubmitBTN>
    </Wrapper>;
}

export default Registration;
