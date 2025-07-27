import { createContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        navigate('/')
    }

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}