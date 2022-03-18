import { ICred } from '../../interfaces/interfaces';
import { currentUser } from '../../pages/LogIn/Login';
import { useNavigate } from "react-router-dom";


export default function Logout(){
   
    
    const localStorageUsers: ICred[] = localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials") as string) : [];
        if (localStorageUsers.length) {
            localStorageUsers.forEach(user => {
                user.isLoggedIn = false;
                if (localStorageUsers.length)
                    localStorage.setItem("credentials", JSON.stringify(localStorageUsers))

            });
        }
}