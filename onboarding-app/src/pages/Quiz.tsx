import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Answer = {
    id: number;
    answer_text: string;
    is_correct: boolean;
};

type Question = {
    id: number;
    question_text: string;
    answers: Answer[];
};

const QUIZ_DATA: Record<string, Question[]> = {
    '1': [
        {
            id: 1,
            question_text: 'What is React?',
            answers: [
                { id: 1, answer_text: 'A CSS library', is_correct: false },
                { id: 2, answer_text: 'A JS library for building UIs', is_correct: true },
                { id: 3, answer_text: 'A testing tool', is_correct: false },
            ],
        },
        {
            id: 2,
            question_text: 'What language is React written in?',
            answers: [
                { id: 1, answer_text: 'Python', is_correct: false },
                { id: 2, answer_text: 'JavaScript', is_correct: true },
                { id: 3, answer_text: 'Java', is_correct: false },
            ],
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
        },
        {
            id: 2,
            question_text: 'Which tool is used for hosting in this project?',
            answers: [
                { id: 1, answer_text: 'AWS EC2', is_correct: false },
                { id: 2, answer_text: 'Vercel', is_correct: true },
                { id: 3, answer_text: 'Netlify', is_correct: false },
            ],
        },
    ],
};

export default function Quiz() {
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
        <div>
            <h2>{q.question_text}</h2>
            <ul>
                {q.answers.map((a) => (
                    <li key={a.id}>
                        <button onClick={() => handleAnswer(a.id)}>{a.answer_text}</button>
                    </li>
                ))}
            </ul>
            <h3>Score: {score ?? 0}</h3>
            <h3>Current: {current ?? 0}</h3>
            <h3>questions length: {questions.length ?? 0}</h3>
        </div>
    );
}
