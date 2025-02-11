import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state
    const [error, setError] = useState(''); // New error state
    const [users, setUsers] = useState<{ email: string }[]>([]); // Local state for users
    const navigate = useNavigate();

    const handleRegister = () => {
        setLoading(true); // Set loading to true
        setError(''); // Reset error state

        if (!email) {
            setError('Email is required');
            setLoading(false); // Reset loading state
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format');
            setLoading(false); // Reset loading state
            return;
        }

        const userExists = users.some(user => user.email === email);

        if (!userExists) {
            setUsers([...users, { email }]); // Add user to local state
            setSuccess(true);
            setTimeout(() => navigate('/selectfeature'), 1500); // Redirect to dashboard
        } else {
            setError('User already exists!');
        }
        setLoading(false); // Reset loading state
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-4 w-80 rounded"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
            <button
                onClick={handleRegister}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                disabled={loading} // Disable button while loading
            >
                Register
            </button>
            {success && <p className="text-green-500 mt-4">Registration successful! Redirecting...</p>}
            {loading && <p className="text-blue-500 mt-4">Loading...</p>} {/* Loading feedback */}
        </div>
    );
};

export default Register;
