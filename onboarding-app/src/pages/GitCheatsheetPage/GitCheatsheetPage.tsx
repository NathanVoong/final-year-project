import "./styles/GitCheatsheetPage.css";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import statusOne from "./assets/statusOne.png";
import statusTwo from "./assets/statusTwo.png";
import statusThree from "./assets/statusThree.png";
import terminalOutput from "./assets/terminalOutput.png";
import terminalError from "./assets/terminalError.png";
import terminalNoError from "./assets/terminalNoError.png";

export default function GitCheatsheetPage() {
    return (
        <div>
            <section className="section">
                <h1>ClearScore Git Cheatsheet</h1>
                <p>These are the most used git commands you’ll probably ever use during your time at ClearScore</p>
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
                <p>Before adding any changes, it’s useful to run<code className="inline-code">yarn lint --fix</code>to
                    fix the most common issues that can occur in the pipeline.</p>
                <p>Example output in the terminal:</p>
                <img
                    src={terminalOutput}
                    alt='jFrog account menu showing "Edit Profile"'
                    className="git-status-image"
                />
                <img
                    src={terminalError}
                    alt='jFrog account menu showing "Edit Profile"'
                    className="git-status-image"
                />
                <p>You can ignore the warnings but you must fix the errors. Click on the blue link in the terminal
                    linked to the error to be taken directly to the issue. In this case, there is a console log to be
                    removed.</p>
                <p>Rerun<code className="inline-code">yarn lint --fix</code>to check if you have resolved the error</p>
                <img
                    src={terminalNoError}
                    alt='jFrog account menu showing "Edit Profile"'
                    className="git-status-image"
                />
                <p className="subtext">0 errors means you’re good to go</p>
                <p>Add specific changed files:</p>
                <SyntaxHighlighter language="bash">
                    {`git add <file_name>`}
                </SyntaxHighlighter>
                <p>Add all changes made:</p>
                <SyntaxHighlighter language="bash">
                    {`git add .`}
                </SyntaxHighlighter>
                <h3>Commit changes</h3>
                <SyntaxHighlighter language="bash">
                    {`git commit -m "feat/fix/chore: commit_message" -m "ticket_number"`}
                </SyntaxHighlighter>
                <p>Example:<code className="inline-code">git commit -m “feat: add tests” -m “RPM-123”</code></p>
                <h3>Add all changes and commit changes</h3>
                <p>The difference/shortcut is the <b>-am</b> flag before the commit message.</p>
                <p>This command isn’t recommended because you can accidentally add and commit unwanted changes.</p>
                <SyntaxHighlighter language="bash">
                    {`git commit -am "feat/fix/chore: commit_message" -m "ticket_number"`}
                </SyntaxHighlighter>
                <p>Example:<code className="inline-code">git commit -am “feat: add tests” -m “RPM-123”</code></p>
                <p>If you don’t know your ticket number, follow: <a
                    href="https://www.notion.so/How-to-find-my-ticket-number-1b3d7120425480b6844efc2db5ec3005"
                    target="blank">How to find my ticket number</a></p>
                <h3>Revert/restore changes</h3>
                <p>Run<code className="inline-code">git status</code>and all red files can have their changes reverted
                    using:</p>
                <SyntaxHighlighter language="bash">
                    {`#For reverting specific files
git restore <file>

#For reverting all changed files
git restore .`}
                </SyntaxHighlighter>
                <p>For all <b>green</b> files, their changes can be reverted using:</p>
                <SyntaxHighlighter language="bash">
                    {`#For reverting specific files
git restore --staged <file>
git restore <file>

#For reverting all changed files
git restore --staged .
git restore .`}
                </SyntaxHighlighter>
                <h3>Pushing changes</h3>
                <p>After running the command below, click on the link that appears in the terminal to create your pull request.</p>
                <SyntaxHighlighter language="bash">
                    {`git push --set-upstream origin <branch_name>`}
                </SyntaxHighlighter>
                <p>Example:<code className="inline-code">git push --set-upstream origin new-branch</code></p>
                <h3>Update from master</h3>
                <p>To update from master, without having to switch branches by using the fetch command then rebasing from origin.</p>
                <SyntaxHighlighter language="bash">
                    {`git fetch && git rebase origin/master`}
                </SyntaxHighlighter>
                <h3>Panic button</h3>
                <p>If you don’t know what’s happening and want revert back to your latest version of the main branch before you made any changes.</p>
                <SyntaxHighlighter language="bash">
                    {`git reset --hard origin/{branch-name}`}
                </SyntaxHighlighter>
                <h3>Getting a specific file from another branch and overwriting your version of the file</h3>
                <p>If there is a specific version of a file you want to just add onto your current branch or local computer, run the command below.</p>
                <SyntaxHighlighter language="bash">
                    {`git checkout {branch} {file}`}
                </SyntaxHighlighter>
                <p>Example:<code className="inline-code">git checkout master app/sdui/sections/marketing-preferences/sections/emails/emails.ts</code></p>
            </section>
        </div>
    );
}
