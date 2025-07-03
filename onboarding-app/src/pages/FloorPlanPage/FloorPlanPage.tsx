import "./styles/FloorPlanPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function FloorPlanPage() {
    return (
        <div>
            <section className="section">
                <h1>Floor plan and meeting rooms</h1>
                <SyntaxHighlighter language="typescript">
                    {`const hello = world`}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
