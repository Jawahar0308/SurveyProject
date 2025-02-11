import React, { useState } from 'react';
import surveyData from '../data/surveyTaken.json';
import { useNavigate } from 'react-router-dom';
import users from '../data/users.json';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        const userExists = users.some(user => user.email === email.trim());

        if (!email) {
            setError('Email is required');
            setLoading(false);
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format');
            setLoading(false);
            return;
        }
        if (userExists) {
            const user = users.find(user => user.email === email.trim());
            if (user?.hasTakenSurvey) {
                navigate('/output', { state: { answers: surveyData } }); // Pass survey data
            } else {
                navigate('/selectfeature'); // Navigate to feature selection
            }
        } else {
            setError('User does not exist. Please register.');
            setSuccess(false);
            navigate('/register');
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-4 w-80 rounded"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">Login successful!</p>}
            {loading && <p className="text-blue-500 mb-4">Loading...</p>}
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={loading}
            >
                Login
            </button>
        </div>
    );
};

export default Login;
