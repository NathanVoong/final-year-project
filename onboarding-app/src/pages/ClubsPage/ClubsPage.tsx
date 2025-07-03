import "./styles/ClubsPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function ClubsPage() {
    return (
        <div>
            <section className="section">
                <h1>Clubs and Communities</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
