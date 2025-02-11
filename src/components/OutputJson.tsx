import React from "react";
import { useLocation } from "react-router-dom";
import Graph from "./Graph";
import { Answer } from "../types";

const OutputJson: React.FC = () => {
    const location = useLocation();
    const answers: Answer[] = location.state?.answers || []; // Ensure answers are passed correctly

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-6">Output JSON and Graph</h1>

            {/* Display JSON Output */}
            <div className="bg-gray-50 p-4 rounded shadow-md w-full max-w-xl mb-6">
                <h3 className="text-lg font-bold mb-2">Output JSON</h3>
                <pre className="text-sm bg-gray-200 p-2 rounded">
                    {JSON.stringify(answers, null, 2)}
                </pre>
            </div>

            {/* Render the Graph */}
            {answers.length > 0 && <Graph answers={answers} />}
        </div>
    );
};

export default OutputJson;
