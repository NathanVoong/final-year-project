import "./styles/MoreSlackPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function MoreSlackPage() {
    return (
        <div>
            <section className="section">
                <h1>How to find more slack channels</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
