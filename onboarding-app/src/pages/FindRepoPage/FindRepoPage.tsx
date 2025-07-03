import "./styles/FindRepoPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function FindRepoPage() {
    return (
        <div>
            <section className="section">
                <h1>How to find GitHub repositories</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
