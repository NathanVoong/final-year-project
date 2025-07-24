import React from "react";
import "./styles/SetupPage.css";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jFrogImage from "../../assets/jFrogSetup.png";
import jFrogUsername from "../../assets/jFrogUsername.png";
import jFrogPassword from "../../assets/jFrogPassword.png";

export default function SetupPage() {
    const [isCopied, setIsCopied] = React.useState(false);
    const [carouselSlide, setCarouselSlide] = React.useState(0);
    const codeString = `Hey @itteam, could I please have access to: 

- JFrog Artifactory
- GitHub
- IntelliJ IDEA license 
- JIRA 
- Miro 
- Postman 
- ChatGPT 
- Twingate VPN 
- Datadog 
- Amplitude 
- Figma`;
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        }).catch((err) => {
            console.error("Error copying text: ", err);
        });
    };

    const handlePrevious = () => {
        setCarouselSlide((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCarouselSlide((prev) => Math.min(3, prev + 1)); // assuming 3 slides: 0, 1, 2
    };

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [carouselSlide]);

    return (
        <div>
            <section className="section">
                <h1>Setting up your dev environment</h1>
                {carouselSlide === 0 &&
                    <>
                        <h3>Account access</h3>
                        <p>To ensure you can access all the tools you might need, drop a message in <a
                            href="https://clearscore.enterprise.slack.com/archives/CCEMY9VKP"
                            target="blank">#ask-it</a> using
                            the template below.</p>
                        <div style={{position: "relative"}}>
                            <SyntaxHighlighter language="typescript">
                                {codeString}
                            </SyntaxHighlighter>
                            <button
                                onClick={handleCopy}
                                className="copy-button"
                            >
                                {isCopied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </>
                }
                {carouselSlide === 1 &&
                    <>
                        <h3>Software</h3>
                        <p>
                            Feel free to set your dev environment up in whatever way you want. Many of us use VSCode or
                            IntelliJ, the choice is yours.
                        </p>
                        <p>
                            The required softwares are:
                        </p>
                        <ul>
                            <li>
                                <strong>Node &gt;= 20.8.0</strong>
                                <ul>
                                    <li>
                                        Run<code className="inline-code">curl https://get.volta.sh | bash</code>to
                                        install <a href="https://volta.sh" target="_blank"
                                                   rel="noopener noreferrer">Volta</a>
                                    </li>
                                    <li>
                                        Run<code className="inline-code">volta install node</code>to install the latest
                                        version of NodeJS
                                    </li>
                                    <li>
                                        <span>You can use <a href="https://volta.sh" target="_blank"
                                                             rel="noopener noreferrer">Volta</a> to manage your node/yarn versions. Volta will automatically switch versions when navigating between frontend development repos.</span>
                                    </li>
                                    <li>
                                        Enable<code className="inline-code">corepack</code>to allow better package
                                        manager integration
                                        <ul>
                                            <li>
                                                Run<code className="inline-code">corepack enable</code>
                                            </li>
                                            <li>
                                                More details: <a href="https://nodejs.org/api/corepack.html"
                                                                 target="_blank"
                                                                 rel="noopener noreferrer">https://nodejs.org/api/corepack.html</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Yarn &gt;= 1.22.10</strong>
                                <ul>
                                    <li>
                                        Run<code className="inline-code">brew install yarn</code>to install yarn via <a
                                        href="https://brew.sh/" target="_blank"
                                        rel="noopener noreferrer">Homebrew</a> and get Yarn v1.22.22
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </>
                }
                {carouselSlide === 2 &&
                    <>
                        <h3>jFrog setup</h3>
                        <ol>
                            <li>
                                Login to jFrog with Okta here:{" "}
                                <a
                                    href="https://clearscoredev.jfrog.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >https://clearscoredev.jfrog.io/</a>{" "}
                                (this will generate you an account and is necessary for the next steps)
                            </li>
                            <li>
                                Click on your account (furthest top-right side) then click <strong>"Edit
                                Profile"</strong>
                                <div>
                                    <div className="img-wrapper">
                                        <img
                                            src={jFrogImage}
                                            alt='jFrog account menu showing "Edit Profile"'
                                            className="jfrog-image"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                Scroll down on the page and Generate API key
                            </li>
                            <li>
                                Follow the next steps below
                            </li>
                        </ol>
                        <h3>Github Setup</h3>
                        <p>Once you have Github access, you'll need to follow these GitHub docs in order:</p>
                        <ol>
                            <li>
                                <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
                                   target="_blank"
                                   rel="noopener noreferrer">Generate new SSH key</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"
                                   target="_blank"
                                   rel="noopener noreferrer">Setup GitHub SSH</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on"
                                   target="_blank"
                                   rel="noopener noreferrer">Authorise the SSH key for use with SSO</a>
                            </li>
                        </ol>
                    </>
                }
                {carouselSlide === 3 &&
                    <>
                        <h3>.npmrc + .yarnrc.yml setup</h3>
                        <p>All of the frontend applications rely on packages stored in jFrog artifactory. In order to
                            pull packages from jFrog, you will need to set up a<code
                                className="inline-code">.npmrc</code>file and for some repos a<code
                                className="inline-code">.yarnrc.yml</code></p>
                        <p>To do this, you need to execute the following commands: <b>(Note: You need to have completed
                            setting up GitHub SSH and have git installed):</b></p>
                        <div style={{position: "relative"}}>
                            <SyntaxHighlighter language="bash">
                                {`npx -p ClearScore/fed-config npmrc

npx -p ClearScore/fed-config berry`}
                            </SyntaxHighlighter>
                            <button
                                onClick={handleCopy}
                                className="copy-button"
                            >
                                {isCopied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                        <b>The process is similar for both commands</b>
                        <ol>
                            <li>
                                When prompted for your email address, use your ClearScore email address (<code
                                className="inline-code">forename.surname@clearscore.com</code>)
                            </li>
                            <li>
                                When prompted for your full name, enter<code className="inline-code">Forename
                                Surname</code>
                            </li>
                            <li>
                                When prompted for your jFrog username go to <a href="https://clearscoredev.jfrog.io/"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">jFrog</a>,
                                click on your account icon and it will be the top text shown in the image below
                                <div>
                                    <div className="img-wrapper">
                                        <img
                                            src={jFrogUsername}
                                            alt='jFrog account menu showing "Edit Profile"'
                                            className="jfrog-image"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                When prompted for your password go to <a href="https://clearscoredev.jfrog.io/"
                                                                         target="_blank"
                                                                         rel="noopener noreferrer">jFrog</a>, click on
                                your account icon &gt; Edit Profile &gt; scroll down to your API key &gt; copy and paste
                                it as your password
                                <div className="jfrog-password-wrapper">
                                    <div className="img-wrapper">
                                        <img
                                            src={jFrogImage}
                                            alt='jFrog account menu showing "Edit Profile"'
                                            className="jfrog-image"
                                        />
                                    </div>
                                    <div className="img-wrapper">
                                        <img
                                            src={jFrogPassword}
                                            alt='jFrog account menu showing "Edit Profile"'
                                            className="jfrog-password"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </>
                }
                <div className="carousel-indicator">
                    {[0, 1, 2, 3].map(idx => (
                        <span
                            key={idx}
                            className={`carousel-dot${carouselSlide === idx ? " active" : ""}`}
                        />
                    ))}
                </div>
                <div className="button-group">
                    <button
                        className="previous-button"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="next-button"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </section>
        </div>
    );
}
