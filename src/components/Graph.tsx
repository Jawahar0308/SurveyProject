import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Answer } from "../types";

// Register the Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GraphProps {
    answers: Answer[]; // Pass the dynamic JSON data as props
}

const Graph: React.FC<GraphProps> = ({ answers }) => {
    // Check if answers are available
    if (!answers || answers.length === 0) {
        return <p>No data available for the graph.</p>;
    }

    // Find the maximum question_id to handle alignment correctly
    const maxQuestionId = Math.max(...answers.map((answer) => answer.question_id));

    // Create labels for all question IDs (e.g., Q1, Q2, Q3, ...)
    const labels = Array.from({ length: maxQuestionId }, (_, index) => `Q${index + 1}`);

    // Create a dataValues array aligned to the question_id
    const dataValues = Array(maxQuestionId).fill(null); // Start with `null` for all indices
    answers.forEach((answer) => {
        const parsedValue = parseFloat(answer.answer);
        dataValues[answer.question_id - 1] = isNaN(parsedValue) ? null : parsedValue;
    });

    // Chart.js data structure
    const data = {
        labels, // X-axis labels (all questions)
        datasets: [
            {
                label: "Answers",
                data: dataValues, // Y-axis values (aligned with question_id)
                backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Chart.js options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "User Answers Chart",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Answer Value",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Questions",
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
            <Bar data={data} options={options} />
        </div>
    );
};

export default Graph;
