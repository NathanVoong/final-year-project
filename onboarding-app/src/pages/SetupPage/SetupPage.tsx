import "./styles/SetupPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function SetupPage() {
    return (
        <div>
            <section className="section">
                <h1>Setting up your dev environment</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
