import { ICred } from '../../interfaces/interfaces';

export let currentUser = '';
export function SetCurrentUser (user:string) {
    currentUser=user;
}

export default function Logout(){
    const localStorageUsers: ICred[] = localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials") as string) : [];
        if (localStorageUsers.length) {
            localStorageUsers.forEach(user => {
                user.isLoggedIn = false;
                if (localStorageUsers.length)
                    localStorage.setItem("credentials", JSON.stringify(localStorageUsers))
            });
            SetCurrentUser('');
        }
}
