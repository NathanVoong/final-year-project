import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import FloorPlanQuiz from './pages/FloorPlanPage/FloorPlanQuiz.tsx';
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
import welcomeImage from "./pages/Home/assets/welcome-image.png";

function WelcomeCard() {
    return (
        <div className="welcome-container">
            <img src={welcomeImage} alt="welcome home image" className="welcome-image"/>
            <div className="welcome-elements-container">
                <div className="welcome-text">
                    <span className="welcome-text">Welcome,</span>
                    <span className="apprentice-text">Apprentice</span>
                </div>
                <div className="countdown-circle">
                    <span className="days">323</span>
                    <span className="label">days left until IC1</span>
                </div>
            </div>
        </div>
    );
}

function Layout() {
    const location = useLocation();

    return (
        <div className="app-container">
            <header className="header">
                <div className="header-top">
                    <div className="logo">ClearScore</div>
                    <nav className="nav-links">
                        <Button variant="ghost" destination="/">Home</Button>
                        {/*Temporarily removed until more resources are added*/}
                        {/*<Button variant="ghost" destination="/resources">Resources</Button>*/}
                        <Button variant="ghost" destination="/quiz/1">Quizzes</Button>
                    </nav>
                    <div className="user-greeting">Hey Apprentice</div>
                </div>
            </header>

            {location.pathname === "/" && <WelcomeCard/>}

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/quiz/:quizId" element={<FloorPlanQuiz/>}/>
                    <Route path="/resources" element={<Resources/>}/>
                    <Route path="/setup" element={<SetupPage/>}/>
                    <Route path="/okta-verification" element={<FasterOktaPage/>}/>
                    <Route path="/clubs-and-communities" element={<ClubsPage/>}/>
                    <Route path="/floor-plan" element={<FloorPlanPage/>}/>
                    <Route path="/more-slack-channels" element={<MoreSlackPage/>}/>
                    <Route path="/github" element={<GitHubPage/>}/>
                    <Route path="/git-commands" element={<GitCheatsheetPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    );
}
