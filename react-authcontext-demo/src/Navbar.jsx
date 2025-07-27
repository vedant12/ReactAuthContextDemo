import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'

export default function Navbar() {

    const { user, logout } = useContext(AuthContext);

    return (
        <nav style={{ padding: '1rem', background: '#eee' }}>
            {user ? (
                <>
                    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                    <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
                    <button onClick={logout} style={{ marginLeft: '1rem' }}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    )
}