import "./styles/MoreSlackPage.css";
import slackStepOne from "./assets/slackStepOne.png"
import slackStepTwo from "./assets/slackStepTwo.png"
import slackStepThree from "./assets/slackStepThree.png"

export default function MoreSlackPage() {
    return (
        <div>
            <section className="section">
                <h1>How to find and add more slack channels</h1>
                <ol>
                    <li>
                        On the left-hand side panel, click <b>‘More’ &gt; Channels</b>
                        <div>
                            <img
                                src={slackStepOne}
                                alt='Highlighting more and channel buttons'
                                className="slack-image-vertical"
                            />
                        </div>
                    </li>
                    <li>
                        Search for any channel you want to add.
                        <div>
                            <img
                                src={slackStepTwo}
                                alt='Showing search bar for searching for slack channels'
                                className="slack-images"
                            />
                        </div>
                    </li>
                    <li>
                        You can view a channel without joining it/being a member by clicking on it. You can also join it
                        directly by clicking ‘Join’.
                        <div>
                            <img
                                src={slackStepThree}
                                alt='red circle showing two buttons to view the channel and to join'
                                className="slack-images"
                            />
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
}
