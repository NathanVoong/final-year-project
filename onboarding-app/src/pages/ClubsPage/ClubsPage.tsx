import "./styles/ClubsPage.css";
import basketBall from "./assets/basketballClub.jpg";
import boardGamesClub from "./assets/boardGamesClub.jpeg";
import cinemaClub from "./assets/cinemaClub.webp";
import climbingClub from "./assets/climbingClub.jpeg";
import cycleClub from "./assets/cycleClub.jpeg";
import dndClub from "./assets/dndClub.webp";
import footballClub from "./assets/footballClub.webp";
import legoClub from "./assets/legoClub.webp";
import movemberClub from "./assets/movemberClub.webp";
import primeClub from "./assets/primeClub.jpg";
import queerScoreClub from "./assets/queerScore.webp";
import runningClub from "./assets/runningClub.jpeg"
import tennisClub from "./assets/tennisClub.jpg";
import volunteeringClub from "./assets/volunteeringClub.webp";
import womensClub from "./assets/womensClub.webp";
import yogaClub from "./assets/yogaClub.jpeg";
import {CardImage} from "../Home/components/Card.tsx";

export default function ClubsPage() {
    return (
        <div>
            <section className="section">
                <h1>Clubs and Communities</h1>
                {/*first row of clubs*/}
                <div className="row-wrapper">
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=2d5f12f8248f494986bbcb6f89741b29&pm=c">
                        <div className="image-card">
                            <img src={legoClub} alt="LEGO Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">LEGO Club</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=a0c43cb3dd524545bcbfc38130fa304d&pm=c">
                        <div className="image-card">
                            <img src={movemberClub} alt="Movember Community" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Movember</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=8bf80fe326104459ae4d12fd07f82ddb&pm=c">
                        <div className="image-card">
                            <img src={womensClub} alt="Womens Network Community" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Womens Network</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=286dd93df9d7484aa683e4acd1d49ee0&pm=c">
                        <div className="image-card">
                            <img src={boardGamesClub} alt="Board Games Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Board Games</h3>
                            </div>
                        </div>
                    </CardImage>
                </div>
                {/*second row of clubs*/}
                <div className="row-wrapper">
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=c432c89682874d84a5e6dbeca7250f8a&pm=c">
                        <div className="clubs-image-card">
                            <img src={footballClub} alt="Football Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Football</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=40467ea94add4acc96689b0c892bebd4&pm=c">
                        <div className="clubs-image-card">
                            <img src={queerScoreClub} alt="QueerScore Community" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">QueerScore</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=fbca95e2e219484e8f68106444f57225&pm=c">
                        <div className="clubs-image-card">
                            <img src={yogaClub} alt="Yoga Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Yoga</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=1b398ffb59384ba3a306cb538b0d2c1b&pm=c">
                        <div className="clubs-image-card">
                            <img src={climbingClub} alt="Climbing Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Climbing Crew</h3>
                            </div>
                        </div>
                    </CardImage>
                </div>
                {/*third row of clubs*/}
                <div className="row-wrapper">
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=0ab1ee568a124ddeb71dd08fccd7bc10&pm=c">
                        <div className="clubs-image-card">
                            <img src={cinemaClub} alt="Cinema Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Cinema</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=48286f1c84c44795aa4f282168d4c207&pm=c">
                        <div className="clubs-image-card">
                            <img src={cycleClub} alt="Cycle Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">CycleScore</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=482813fbb5c3449aa9fe4520e5d64581&pm=c">
                        <div className="clubs-image-card">
                            <img src={primeClub} alt="Club representing interests of minority ethnics" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Prime</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=1d5d712042548065ac83d2dff7bf053e&pm=c">
                        <div className="clubs-image-card">
                            <img src={runningClub} alt="Running Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Running</h3>
                            </div>
                        </div>
                    </CardImage>
                </div>
                {/*fourth row of clubs*/}
                <div className="row-wrapper">
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=4653b0f943cb4d84a5310eb4b0a1ee07&pm=c">
                        <div className="clubs-image-card">
                            <img src={basketBall} alt="Basketball Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Basketball</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=6d4e706eb3644fab9074db63bffb6dc0&pm=c">
                        <div className="clubs-image-card">
                            <img src={dndClub} alt="Dungeons and Dragons Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Dungeons and Dragons</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=f43c63eccafa4469aaa87dfa686674de&pm=c">
                        <div className="clubs-image-card">
                            <img src={tennisClub} alt="Tennis Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Tennis</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=cd487927503243d89a903e191d7e7a69&pm=c">
                        <div className="clubs-image-card">
                            <img src={volunteeringClub} alt="Foodbank Volunteering Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Foodbank Volunteering</h3>
                            </div>
                        </div>
                    </CardImage>
                </div>
            </section>
        </div>
    );
}
