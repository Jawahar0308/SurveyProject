export interface Question {
    question_id: number;
    question: string;
    question_type: "YN" | "TEXT" | "MCQ";
    options: string[];
}

export interface Feature {
    feature_id: string;
    feature: string;
    questions: Question[];
}

export interface Answer {
    question_id: number;
    answer: string;
}