import { Card, CardContent, CardImage } from "./components/Card";
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import "./styles/Home.css";
import meetingImage from "../../assets/meeting-image.jpg";

export default function Home() {
    return (
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
                <div className="header-welcome">
                    <h1>Welcome, <strong>Apprentice</strong></h1>
                    <p className="countdown">659 days left until IC1</p>
                </div>
            </header>
            <section className="section">
                <h2>Onboarding</h2>
                <Card>
                    <CardContent>
                        <Badge variant="destructive">Action needed</Badge>
                        <h3>Setting up your dev environment</h3>
                        <p>Set up your environment to start your journey at ClearScore</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Badge variant="success">Recommended</Badge>
                        <h3>Set up faster Okta verification</h3>
                        <p>Verify Okta using your fingerprint instead of needing a 2FA code</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Badge variant="success">Recommended</Badge>
                        <h3>Clubs and Communities</h3>
                        <p>Find something that suits you</p>
                    </CardContent>
                </Card>
            </section>
            <section className="section">
                <h2>Feeling lost and can't find your meeting room?</h2>
                <p>Floor plans and meeting room locations</p>
                <CardImage>
                    <div className="image-card">
                        <img src={meetingImage} alt="Meeting room" className="image-background" />
                        <div className="image-content">
                            <Badge variant="secondary">Useful</Badge>
                            <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                            <p>Floor plans for the London office</p>
                        </div>
                    </div>
                </CardImage>
            </section>
            <section className="section">
                <h2>Useful guides</h2>
                <div className="grid">
                    {[
                        {
                            title: "How to add more slack channels",
                            description: "Find interesting or helpful channels"
                        },
                        {
                            title: "How to clone GitHub repositories",
                            description: "Copy GitHub projects locally"
                        },
                        {
                            title: "How to find GitHub repositories",
                            description: "Find other ClearScore projects"
                        }
                    ].map((guide, i) => (
                        <Card key={i}>
                            <CardContent>
                                <Badge variant="secondary">Useful</Badge>
                                <h3>{guide.title}</h3>
                                <p>{guide.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
