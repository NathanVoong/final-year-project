import "./styles/FloorPlanPage.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import roomQuiz from './assets/roomQuiz.png'

type Answer = {
    id: number;
    answer_text: string;
    is_correct: boolean;
};

type Question = {
    id: number;
    question_text: string;
    answers: Answer[];
    image: string;
};

const QUIZ_DATA: Record<string, Question[]> = {
    '1': [
        {
            id: 1,
            question_text: 'Where is Dagobah?',
            answers: [
                { id: 1, answer_text: 'Purple', is_correct: true },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Red', is_correct: false },
                { id: 4, answer_text: 'Green', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 2,
            question_text: 'Where is Naboo?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: false },
                { id: 2, answer_text: 'Blue', is_correct: true },
                { id: 3, answer_text: 'Purple', is_correct: false },
                { id: 4, answer_text: 'Green', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 3,
            question_text: 'Where is Hoth?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: false },
                { id: 2, answer_text: 'Purple', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: true },
                { id: 4, answer_text: 'Blue', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 4,
            question_text: 'Where is Alderaan?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: false },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: true },
                { id: 4, answer_text: 'Purple', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 5,
            question_text: 'Where is X-Wing?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: false },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Yellow', is_correct: true },
                { id: 4, answer_text: 'Green', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 6,
            question_text: 'Where is Bespin?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: false },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: false },
                { id: 4, answer_text: 'Purple', is_correct: true },
            ],
            image: roomQuiz,
        },
        {
            id: 7,
            question_text: 'Where is Star Destroyer?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: true },
                { id: 2, answer_text: 'Purple', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: false },
                { id: 4, answer_text: 'Blue', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 8,
            question_text: 'Where is Imperial Base?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: true },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: false },
                { id: 4, answer_text: 'Purple', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 9,
            question_text: 'Where is Y-Wing?',
            answers: [
                { id: 1, answer_text: 'Yellow', is_correct: true },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: false },
                { id: 4, answer_text: 'Purple', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 10,
            question_text: 'Where is Endor?',
            answers: [
                { id: 1, answer_text: 'Red', is_correct: false },
                { id: 2, answer_text: 'Blue', is_correct: false },
                { id: 3, answer_text: 'Green', is_correct: true },
                { id: 4, answer_text: 'Purple', is_correct: false },
            ],
            image: roomQuiz,
        },
    ],
    '2': [
        {
            id: 1,
            question_text: 'What does CI/CD stand for?',
            answers: [
                { id: 1, answer_text: 'Continuous Integration/Continuous Deployment', is_correct: true },
                { id: 2, answer_text: 'Code Inspection/Code Debugging', is_correct: false },
                { id: 3, answer_text: 'Create/Implement', is_correct: false },
            ],
            image: roomQuiz,
        },
        {
            id: 2,
            question_text: 'Which tool is used for hosting in this project?',
            answers: [
                { id: 1, answer_text: 'AWS EC2', is_correct: false },
                { id: 2, answer_text: 'Vercel', is_correct: true },
                { id: 3, answer_text: 'Netlify', is_correct: false },
            ],
            image: roomQuiz,
        },
    ],
};

export default function FloorPlanQuiz() {
    const { quizId } = useParams();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        const quiz = QUIZ_DATA[quizId ?? '1'];
        setQuestions(quiz || []);
        setScore(null);
        setCurrent(0);
    }, [quizId]);

    const handleAnswer = (selectedId: number) => {
        const isCorrect = questions[current].answers.find(a => a.id === selectedId)?.is_correct;
        if (isCorrect) {
            setScore(prev => (prev ?? 0) + 1);
            setCurrent(current + 1);
        } else {
            setScore(prev => prev ?? 0);
            setCurrent(current + 1);
        }
    };

    if (!questions.length) return <p>Quiz not found or loading...</p>;
    if (score !== null && current >= questions.length) {
        return <p>You scored {score ?? 0} out of {questions.length}</p>;
    }

    const q = questions[current];

    return (
        <div className="quiz">
            <img src={q.image} className="quiz-image"/>
            <h2>{q.question_text}</h2>
            <ul className="quiz-options-grid">
                {q.answers.map((a) => (
                    <li key={a.id}>
                        <button className="quiz-option" onClick={() => handleAnswer(a.id)}>
                            {a.answer_text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
