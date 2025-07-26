import "./styles/ClubsPage.css";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import meetingImage from "../Home/assets/meeting-image.jpg";
import {Badge} from "../Home/components/Badge.tsx";
import {CardImage} from "../Home/components/Card.tsx";

export default function ClubsPage() {
    return (
        <div>
            <section className="section">
                <h1>Clubs and Communities</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="/floor-plan">
                        <div className="image-card">
                            <img src={meetingImage} alt="Meeting room" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Floor plan and meeting rooms</h3>
                                <p>Floor plans for the London office</p>
                            </div>
                        </div>
                    </CardImage>
                </div>
            </section>
        </div>
    );
}
