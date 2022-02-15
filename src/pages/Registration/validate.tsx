import { RegistrationErrors } from "./Registration";

export default function validateInfo(username: string, password: string, repeatPassword: string): RegistrationErrors {
    let set = {
        usernameError: '',
        passwordError: ''
    }

    const regularExpression = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/;

    if (username.length < 3) {
        set.usernameError = 'Username should be minimum 3 characters'
    }

    if (!password.trim()) {
        set.passwordError = 'Password is empty'
    }

    if (password !== repeatPassword) {
        set.passwordError = 'Passwords did not match'
    }

    if (password === repeatPassword && !regularExpression.test(password)) {
        set.passwordError = 'Passwords should contain at least one capital letter and special character'
    }

    return set
}