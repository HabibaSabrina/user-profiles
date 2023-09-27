import React, { createContext , useEffect, useState } from 'react';

export const UserContext = createContext([])
const UserProvider = ({children}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('/persons.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
   
    return (
        <UserContext.Provider value={[users]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;