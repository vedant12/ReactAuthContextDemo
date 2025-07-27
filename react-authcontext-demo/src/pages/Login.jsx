import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

function Login() {

    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [usernameValidation, setUsernameValidation] = useState(false);

    const handleLogin = () => {

        if (username.length === 0) {
            setUsernameValidation(true);
            return;
        };

        const fakeUser = {
            name: username,
            token: btoa(username)
        }

        login(fakeUser);
    }



    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ background: '#eee' }}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Login Form
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={{ background: 'white', padding: 30, borderRadius: 10 }}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                name="username"
                                placeholder='username'
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                            {usernameValidation &&
                                <p style={{ color: 'red' }}>Please enter username</p>}
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login