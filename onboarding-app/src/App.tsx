import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz/:quizId" element={<Quiz />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
