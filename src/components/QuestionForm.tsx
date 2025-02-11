import React from "react";
import { Question, Answer } from "../types";

interface Props {
    question: Question;
    response?: Answer;
    onResponseChange: (question_id: number, answer: string) => void;
}

const QuestionForm: React.FC<Props> = ({ question, response, onResponseChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onResponseChange(question.question_id, event.target.value);
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
            {question.question_type === "YN" && (
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name={`question-${question.question_id}`}
                            value="Yes"
                            checked={response?.answer === "Yes"}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Yes
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name={`question-${question.question_id}`}
                            value="No"
                            checked={response?.answer === "No"}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        No
                    </label>
                </div>
            )}
            {question.question_type === "TEXT" && (
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={response?.answer || ""}
                    onChange={handleChange}
                />
            )}
            {question.question_type === "MCQ" && (
                <select
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={response?.answer || ""}
                    onChange={handleChange}
                >
                    <option value="" disabled>
                        Select an option
                    </option>
                    {question.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default QuestionForm;
