import React, { useState, useContext } from 'react';

const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
    const [result, setResult] = useState();

    return (
        <MyContext.Provider value={{ result, setResult }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};