import { Feature } from '../types'

export const inputJSON: { features: Feature[] } = {
    features: [
        {
            "feature_id": "1",
            "feature": "Budget",
            "questions": [
                {
                    "question_id": 2,
                    "question": "Are you willing to take on student loans to finance your study abroad program?",
                    "question_type": "YN",
                    "options": []
                },
                {
                    "question_id": 1,
                    "question": "What is your budget? (Tuition Fees + Living Expense)",
                    "question_type": "TEXT",
                    "options": []
                }
            ]
        },
        {
            "feature_id": "2",
            "feature": "Location",
            "questions": [
                {
                    "question_id": 13,
                    "question": "What is your city preference?",
                    "question_type": "TEXT",
                    "options": []
                },
                {
                    "question_id": 16,
                    "question": " Reason for choosing your primary choice of country? ",
                    "question_type": "TEXT",
                    "options": []
                },
                {
                    "question_id": 14,
                    "question": " Do you have any city of choice?",
                    "question_type": "TEXT",
                    "options": []
                }
            ]
        },
        {
            "feature_id": "3",
            "feature": "Quality/ranking",
            "questions": [
                {
                    "question_id": 27,
                    "question": " What ranking of universities do you prefer? ",
                    "question_type": "MCQ",
                    "options": [
                        "Top 100",
                        "Top 250",
                        "Top 500",
                        "Top 1000"
                    ]
                }
            ]
        },
        {
            "feature_id": "4",
            "feature": "Part time",
            "questions": [
                {
                    "question_id": 18,
                    "question": " Are you dependent on Part time to pay your balance tuition fees and Living expenses? ",
                    "question_type": "YN",
                    "options": []
                },
                {
                    "question_id": 17,
                    "question": " Are you looking for part time opportunity countries? ",
                    "question_type": "YN",
                    "options": []
                }
            ]
        },
        {
            "feature_id": "5",
            "feature": "PR  opportunities",
            "questions": [
                {
                    "question_id": 21,
                    "question": " Is PR your motive for a degree abroad?",
                    "question_type": "YN",
                    "options": []
                },
                {
                    "question_id": 24,
                    "question": " Which country is your primary choice? ",
                    "question_type": "MCQ",
                    "options": [
                        "Canada",
                        "Australia",
                        "New Zealand",
                        "Germany"
                    ]
                },
                {
                    "question_id": 23,
                    "question": " Are you willing to learn a foreign language in order to get your PR? ",
                    "question_type": "YN",
                    "options": []
                }
            ]
        },
        {
            "feature_id": "6",
            "feature": "Job opportunities",
            "questions": [
                {
                    "question_id": 9,
                    "question": " Are you looking for countries which give a Job Search visa/ Stay back after studies?",
                    "question_type": "YN",
                    "options": []
                },
                {
                    "question_id": 10,
                    "question": " What is the duration of stay back you are looking for? ",
                    "question_type": "MCQ",
                    "options": [
                        "1 Year",
                        "2 year",
                        "3 year"
                    ]
                },
                {
                    "question_id": 11,
                    "question": " Are you looking for a spouse visa? ",
                    "question_type": "YN",
                    "options": []
                }
            ]
        },
        {
            "feature_id": "9",
            "feature": "Diversity",
            "questions": [
                {
                    "question_id": 5,
                    "question": " How important is it to have a cohort of diverse students? ",
                    "question_type": "YN",
                    "options": []
                },
                {
                    "question_id": 6,
                    "question": " Are you looking for a diverse faculty? ",
                    "question_type": "YN",
                    "options": []
                }
            ]
        },
        {
            "feature_id": "10",
            "feature": "Research",
            "questions": [
                {
                    "question_id": 29,
                    "question": " Are you looking for Technical research or business/management research after studies? ",
                    "question_type": "YN",
                    "options": []
                },
                {
                    "question_id": 30,
                    "question": " Are you looking for a degree with research? ",
                    "question_type": "YN",
                    "options": []
                }
            ]
        }
    ]
}