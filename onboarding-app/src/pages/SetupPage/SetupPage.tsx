import React from "react";
import "./styles/SetupPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function SetupPage() {
    const [isCopied, setIsCopied] = React.useState(false);
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

    return (
        <div>
            <section className="section">
                <h1>Setting up your dev environment</h1>
                <h3>Account access</h3>
                <p>To ensure you can access all the tools you might need, drop a message in <a
                    href="https://clearscore.enterprise.slack.com/archives/CCEMY9VKP" target="blank">#ask-it</a> using
                    the template below.</p>
                <div style={{ position: "relative" }}>
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
                <div className="button-group">
                    <button className="previous-button">Previous</button>
                    <button className="next-button">Next</button>
                </div>
            </section>
        </div>
    );
}
