import "./styles/CloneRepoPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function GithubPage() {
    return (
        <div>
            <section className="section">
                <h1>How to find & clone GitHub repositories</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
