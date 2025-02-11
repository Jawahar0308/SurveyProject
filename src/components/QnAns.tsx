import React, { useState } from "react";
import QuestionForm from "../components/QuestionForm";
import { Feature, Answer, Question } from "../types";
import { inputJSON } from "../data/features";
import { useLocation, useNavigate } from "react-router-dom";

const QnAns: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract selected feature IDs from location state
    const selectedFeatureIds = location.state?.selectedFeatures || [];

    const [responses, setResponses] = useState<Answer[]>([]);
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Filter the features based on selectedFeatureIds
    const features: Feature[] = inputJSON.features.filter((feature) =>
        selectedFeatureIds.includes(feature.feature_id)
    );

    const currentFeature = features[currentFeatureIndex];
    const questions: Question[] = currentFeature ? currentFeature.questions : [];

    // Handle the change of response for a question
    const handleResponseChange = (question_id: number, answer: string) => {
        setResponses((prevResponses) => {
            const updatedResponses = [...prevResponses];
            const existingIndex = updatedResponses.findIndex(
                (response) => response.question_id === question_id
            );
            if (existingIndex !== -1) {
                updatedResponses[existingIndex].answer = answer;
            } else {
                updatedResponses.push({ question_id, answer });
            }
            return updatedResponses;
        });
    };

    // Handle navigation between questions and features
    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            // Move to the next question within the current feature
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else if (currentFeatureIndex < features.length - 1) {
            // Move to the next feature and reset the question index
            setCurrentFeatureIndex(currentFeatureIndex + 1);
            setCurrentQuestionIndex(0);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            // Move to the previous question within the current feature
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else if (currentFeatureIndex > 0) {
            // Move to the previous feature and set the question index to the last question of the previous feature
            const previousFeatureIndex = currentFeatureIndex - 1;
            const previousFeatureQuestions = features[previousFeatureIndex].questions;
            setCurrentFeatureIndex(previousFeatureIndex);
            setCurrentQuestionIndex(previousFeatureQuestions.length - 1);
        }
    };

    const handleSubmit = () => {
        // Submit the responses here or navigate to a new page
        console.log("User Responses:", JSON.stringify({ answers: responses }, null, 2));
        navigate("/output", { state: { answers: responses } });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-6">Answer the Questions</h1>

            {currentFeature && (
                <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
                    <h2 className="text-lg font-semibold mb-4">
                        {`Feature: ${currentFeature.feature}`}
                    </h2>

                    {questions.length > 0 && (
                        <QuestionForm
                            question={questions[currentQuestionIndex]}
                            response={responses.find(
                                (response) =>
                                    response.question_id ===
                                    questions[currentQuestionIndex].question_id
                            )}
                            onResponseChange={handleResponseChange}
                        />
                    )}

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePrevious}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            disabled={currentFeatureIndex === 0 && currentQuestionIndex === 0}
                        >
                            Previous
                        </button>
                        {currentFeatureIndex === features.length - 1 &&
                            currentQuestionIndex === questions.length - 1 ? (
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QnAns;
