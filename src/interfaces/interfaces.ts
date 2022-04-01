import { MouseEventHandler } from "react";

export interface ICred {
    username: string;
    password: string;
    isLoggedIn: boolean;
}

export interface RegistrationErrors {
    usernameError?: string;
    passwordError?: string;
}

export interface Fact {
    fact: string,
    length: number
}

export interface LoginError {
    loginError?: string;
}

export interface State  {
    loading:boolean;
    facts: Fact[];
    error:string;
    favFacts: Fact[];
    isLoggedIn:boolean;
} 

export interface FactCardProps {
    fact: Fact;
    favButtonDisabled?: boolean;
    onClick: MouseEventHandler;
    buttonText: String;
}