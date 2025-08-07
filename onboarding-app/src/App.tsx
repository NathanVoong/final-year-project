import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';
import {Button} from "./pages/Home/components/Button.tsx";
import "./pages/Home/styles/Home.css";
import SetupPage from "./pages/SetupPage/SetupPage.tsx";
import FasterOktaPage from "./pages/FasterOktaPage/FasterOktaPage.tsx";
import ClubsPage from "./pages/ClubsPage/ClubsPage.tsx";
import FloorPlanPage from "./pages/FloorPlanPage/FloorPlanPage.tsx";
import MoreSlackPage from "./pages/MoreSlackPage/MoreSlackPage.tsx";
import GitCheatsheetPage from "./pages/GitCheatsheetPage/GitCheatsheetPage.tsx";
import GitHubPage from "./pages/GitHubPage/GitHubPage.tsx";

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
                    <Route path="/setup" element={<SetupPage />} />
                    <Route path="/okta-verification" element={<FasterOktaPage />} />
                    <Route path="/clubs-and-communities" element={<ClubsPage />} />
                    <Route path="/floor-plan" element={<FloorPlanPage />} />
                    <Route path="/more-slack-channels" element={<MoreSlackPage />} />
                    <Route path="/github" element={<GitHubPage />} />
                    <Route path="/git-commands" element={<GitCheatsheetPage />} />
                </Routes>
            </div>
            </div>
        </BrowserRouter>
    );
}
