import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';
import {Button} from "./pages/Home/components/Button.tsx";
import "./pages/Home/styles/Home.css";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
            <header className="header">
                <div className="header-top">
                    <div className="logo">ClearScore</div>
                    <nav className="nav-links">
                        <Button variant="ghost" destination="/">Home</Button>
                        <Button variant="ghost" destination="/resources">Resources</Button>
                        <Button variant="ghost" destination="/quiz/1">Quizzes</Button>
                    </nav>
                    <div className="user-greeting">Hey Apprentice</div>
                </div>
            </header>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz/:quizId" element={<Quiz />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </div>
            </div>
        </BrowserRouter>
    );
}
