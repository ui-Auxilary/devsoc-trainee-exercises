import { createContext, useContext, useState } from "react";
import users from 'mockUserData.json';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [premium, setPremium] = useState(false);

    const fetchUser = () => {
        return user;
    }

    const onLoginHandle = (loginData) => {
        if (!loginData) return false;

        console.log('Parsed data', loginData);
        const filteredUsers = users['users'].filter(user => 
            user.username.toLocaleLowerCase() === loginData.username.toLocaleLowerCase() &&
            user.password === loginData.password
        )
            
        if (filteredUsers.length > 0) {
            console.log('user', filteredUsers)
            const {username, password} = filteredUsers;
            // Check if user exists in local storage, if not reset values
            let coins = 0;
            let isPremium = loginData.username.toLocaleLowerCase() === 'premium' ? true : false;
            
            if (window.localStorage.getItem(username)) {
                console.log('User exists')
                console.log(true)
                coins = window.localStorage.getItem(`${username}-coins`);
            } else {
                // Set a new user
                console.log('Setting new user')
                window.localStorage.setItem(username, true);
                window.localStorage.setItem(`${username}-coins`, 0);
            }
            setUser({
                username: loginData.username,
                coins,
                isPremium
            })
            setLoggedIn(true);
            return true;
        }    
        
        return user;
    }

    return (
        <AuthContext.Provider value={{setUser, setPremium, fetchUser, onLoginHandle, loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
