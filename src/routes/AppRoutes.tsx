import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import OutputJson from '../components/OutputJson'; // Import OutputJson component
import SelectFeatures from '../components/SelectFeatures';
import QnAns from '../components/QnAns';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/outputjson" element={<OutputJson />} /> Route for OutputJson */}
                <Route path="/selectfeature" element={<SelectFeatures />} />
                <Route path="/qnans" element={<QnAns />} />
                <Route path="/output" element={<OutputJson />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
