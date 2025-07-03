import "./styles/FasterOktaPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function FasterOktaPage() {
    return (
        <div>
            <section className="section">
                <h1>Set up faster Okta verification</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
