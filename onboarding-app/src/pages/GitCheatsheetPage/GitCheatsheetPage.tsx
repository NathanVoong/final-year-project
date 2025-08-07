import "./styles/FindRepoPage.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import statusOne from "./assets/statusOne.png";
import statusTwo from "./assets/statusTwo.png";
import statusThree from "./assets/statusThree.png";

export default function GitCheatsheetPage() {
    return (
        <div>
            <section className="section">
                <h1>ClearScore Git Cheatsheet</h1>
                <h3>Create and checkout into new branch</h3>
                <SyntaxHighlighter language="bash">
                    {`git checkout -b <new_branch_name>`}
                </SyntaxHighlighter>
                <p>Example:<code className="inline-code">git checkout -b new-branch</code></p>
                <h3>Check status of branch</h3>
                <SyntaxHighlighter language="bash">
                    {`git status`}
                </SyntaxHighlighter>
                <ul>
                    <li>
                        <p>When there are no changes made:</p>
                        <img
                            src={statusOne}
                            alt='jFrog account menu showing "Edit Profile"'
                            className="git-status-image"
                        />
                    </li>
                    <li>
                        <p>When there are changes made:</p>
                        <img
                            src={statusTwo}
                            alt='jFrog account menu showing "Edit Profile"'
                            className="git-status-image"
                        />
                        <p className="subtext">Red files mean they have not been added to the commit</p>
                    </li>
                    <li>
                        <p>When you’ve added changes to be committed:</p>
                        <img
                            src={statusThree}
                            alt='jFrog account menu showing "Edit Profile"'
                            className="git-status-image"
                        />
                        <p className="subtext">Green files mean they have been added to the commit</p>
                    </li>
                </ul>
                <h3>Adding changes to be committed</h3>
                <p>Before adding any changes, it’s useful to run<code className="inline-code">yarn lint --fix</code>to fix the most common issues that can occur in the pipeline.</p>
                <p>Example output in the terminal:</p>
                <img
                    src={terminalOutput}
                    alt='jFrog account menu showing "Edit Profile"'
                    className="git-status-image"
                />
            </section>
        </div>
    );
}
