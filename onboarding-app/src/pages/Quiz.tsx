import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Answer = {
    id: number;
    answer_text: string;
    is_correct: boolean; // won't be shown to user
};

type Question = {
    id: number;
    question_text: string;
    answers: Answer[];
};

export default function Quiz() {
    const { quizId } = useParams();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        // Simulated API call with static data
        setQuestions([
            {
                id: 1,
                question_text: 'What is React?',
                answers: [
                    { id: 1, answer_text: 'A database', is_correct: false },
                    { id: 2, answer_text: 'A JavaScript library for building UIs', is_correct: true },
                    { id: 3, answer_text: 'A backend language', is_correct: false },
                ],
            },
        ]);
    }, [quizId]);

    const handleAnswer = (selectedId: number) => {
        const isCorrect = questions[current].answers.find(a => a.id === selectedId)?.is_correct;
        if (isCorrect) setScore(prev => (prev ?? 0) + 1);
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            setScore((prev) => prev ?? 0); // finalize score
        }
    };

    if (!questions.length) return <p>Loading quiz...</p>;
    if (score !== null && current >= questions.length) {
        return <p>You scored {score} out of {questions.length}</p>;
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
        </div>
    );
}
