import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Feature } from '../types';  // Assuming Feature type is correctly defined in types
import { inputJSON } from '../data/features';  // Import your JSON data containing the features

// interface Prop{
//     featureId : string;
// }

const SelectFeatures: React.FC = () => {
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    // Make sure inputJSON has a features array and map it
    const features = inputJSON.features;

    // Handle the change when a checkbox is clicked
    const handleCheckboxChange = (featureId: string) => {
        if (selectedFeatures.includes(featureId)) {
            // Deselect feature if already selected
            setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
        } else {
            // Add feature if not already selected
            setSelectedFeatures([...selectedFeatures, featureId]);
        }
    };

    // Handle form submission
    const handleSubmit = () => {
        if (selectedFeatures.length !== 3) {
            setError("You must select exactly 3 features.");
        } else {
            navigate('/qnans', { state: { selectedFeatures } });  // Pass selected features to the next page
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4">Feature Selector</h1>
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-lg font-semibold mb-4">Select Features</h2>
                {features.map((feature: Feature) => (
                    <div key={feature.feature_id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={`feature-${feature.feature_id}`}
                            className="mr-2"
                            value={feature.feature_id}
                            checked={selectedFeatures.includes(feature.feature_id)}
                            onChange={() => handleCheckboxChange(feature.feature_id)}
                        />
                        <label htmlFor={`feature-${feature.feature_id}`} className="text-gray-800">
                            {feature.feature}
                        </label>
                    </div>
                ))}
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SelectFeatures;
