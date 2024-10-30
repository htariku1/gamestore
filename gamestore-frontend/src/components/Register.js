// src/components/Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/auth/register', {
                username,
                password,
            });
            alert('Registration successful');
            navigate('/login');
        } catch (error) {
            console.error('Registration error', error);
            alert('Registration failed');
        }
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-bold mb-5">Register</h2>
            <form onSubmit={handleRegister} className="max-w-md">
                <div className="mb-4">
                    <label className="block mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border px-3 py-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-primary text-white px-4 py-2">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
