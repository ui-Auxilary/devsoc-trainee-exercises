import itemUnlock from "helper/itemUnlock";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserUpdateContext = createContext();

export const UserProvider = ({children}) => {
    const [coins, setCoins] = useState(0);
    const [exp, setExp] = useState(0);
    const [summons, setSummons] = useState(0);
    const [unlockedItems, setUnlockedItems] = useState([]);

    useEffect(() => {
        console.log('New exp:', exp);
    }, [exp])
    const fetchUser = () => {
        return user;
    }

    const updateCoins = (value) => {

    }

    const updateExp = (value) => {
        console.log('Updating xp', exp + value, (exp + value) / 100, (exp + value) % 100, (((exp + value) / 100) <= 6))
        if (value < 0 && exp > 20 || value > 0) {
            setExp(exp => exp + value);
            if ((exp + value) % 100 == 0 && (exp + value) / 100 <= 6) {
                const test = itemUnlock((exp + value) / 100);
                console.log('returned: ', test)
            }
        } else {
            setExp(0);
        }
    }

    const updateSummons = (value) => {

    }

    const updateUnlockedItems = (value) => {

    }

    return (
        <UserContext.Provider value={{unlockedItems, setUnlockedItems, fetchUser, coins, exp, summons}}>
            <UserUpdateContext.Provider value={{updateCoins, updateExp, updateSummons, updateUnlockedItems}}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);
export const useUpdateUserContext = () => useContext(UserUpdateContext);
