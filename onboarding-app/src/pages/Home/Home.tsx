import { Card, CardContent, CardImage } from "./components/Card";
import { Badge } from "./components/Badge";
import "./styles/Home.css";
import meetingImage from "../../assets/meeting-image.jpg";

export default function Home() {
    return (
        <div>
            <section className="section">
                <h2>Onboarding</h2>
                <Card destination="/setup">
                    <CardContent>
                        <Badge variant="destructive">Action needed</Badge>
                        <h3>Setting up your dev environment</h3>
                        <p>Set up your environment to start your journey at ClearScore</p>
                    </CardContent>
                </Card>
                <Card destination="/okta-verification">
                    <CardContent>
                        <Badge variant="success">Recommended</Badge>
                        <h3>Set up faster Okta verification</h3>
                        <p>Verify Okta using your fingerprint instead of needing a 2FA code</p>
                    </CardContent>
                </Card>
                <Card destination="/clubs-and-communities">
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
                <CardImage destination="/floor-plan">
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
                            description: "Find interesting or helpful channels",
                            destination: "/more-slack-channels"
                        },
                        {
                            title: "How to clone GitHub repositories",
                            description: "Copy GitHub projects locally",
                            destination: "/clone-repositories"
                        },
                        {
                            title: "How to find GitHub repositories",
                            description: "Find other ClearScore projects",
                            destination: "/find-repositories"
                        }
                    ].map((guide, i) => (
                        <Card key={i} destination={guide.destination}>
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
