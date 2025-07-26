import "./styles/ClubsPage.css";
import boardGamesClub from "./assets/boardGamesClub.jpeg";
import legoClub from "./assets/legoClub.webp";
import movemberClub from "./assets/movemberClub.webp";
import queerScoreClub from "./assets/queerScore.webp";
import womensClub from "./assets/womensClub.webp";
import yogaClub from "./assets/yogaClub.jpeg";
import {CardImage} from "../Home/components/Card.tsx";

export default function ClubsPage() {
    return (
        <div>
            <section className="section">
                <h1>Clubs and Communities</h1>
                {/*first row of clubs*/}
                <div style={{display: "flex", justifyContent: "space-between"}}>
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
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=286dd93df9d7484aa683e4acd1d49ee0&pm=c">
                        <div className="image-card">
                            <img src={boardGamesClub} alt="Board Games Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Board Games</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=40467ea94add4acc96689b0c892bebd4&pm=c">
                        <div className="image-card">
                            <img src={queerScoreClub} alt="QueerScore Community" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">QueerScore</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=fbca95e2e219484e8f68106444f57225&pm=c">
                        <div className="image-card">
                            <img src={yogaClub} alt="Yoga Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Yoga</h3>
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
                {/*third row of clubs*/}
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=286dd93df9d7484aa683e4acd1d49ee0&pm=c">
                        <div className="image-card">
                            <img src={boardGamesClub} alt="Board Games Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Board Games</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=40467ea94add4acc96689b0c892bebd4&pm=c">
                        <div className="image-card">
                            <img src={queerScoreClub} alt="QueerScore Community" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">QueerScore</h3>
                            </div>
                        </div>
                    </CardImage>
                    <CardImage destination="https://www.notion.so/1cc2a8138c6843db9598299af6559f8c?v=cadc521687294b91ba604e149d12d924&p=fbca95e2e219484e8f68106444f57225&pm=c">
                        <div className="image-card">
                            <img src={yogaClub} alt="Yoga Club" className="image-background"/>
                            <div className="image-content">
                                <h3 className="h3Bright">Yoga</h3>
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
            </section>
        </div>
    );
}
