// src/contexts/AuthContext.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthDataState] = useState({
        token: localStorage.getItem('token'),
        username: localStorage.getItem('username'),
    });

    const setAuthData = (data) => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        }
        setAuthDataState(data);
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
}
