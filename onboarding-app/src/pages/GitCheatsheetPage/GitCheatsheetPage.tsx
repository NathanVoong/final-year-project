import "./styles/FindRepoPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function GitCheatsheetPage() {
    return (
        <div>
            <section className="section">
                <h1>ClearScore Git Cheatsheet</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
