import "./styles/CloneRepoPage.css";
import findRepoOne from "./assets/findRepoOne.png";
import findRepoTwo from "./assets/findRepoTwo.png";
import cloneRepoOne from "./assets/cloneRepoOne.png";
import cloneRepoTwo from "./assets/cloneRepoTwo.png";

export default function GitHubPage() {
    return (
        <div>
            <section className="section">
                <h1>How to find & clone GitHub repositories</h1>
                <ol>
                    <li>
                        From the home screen of <a href="https://github.com/"
                                                   target="_blank"
                                                   rel="noopener noreferrer">GitHub</a>, click <b>View Organisation</b>.
                        <div>
                            <img
                                src={findRepoOne}
                                alt='GitHub homepage'
                                className="github-images"
                            />
                        </div>
                    </li>
                    <li>
                        Scroll down to the repository search bar and search for any repository you want.
                        <div>
                            <img
                                src={findRepoTwo}
                                alt='Showing search bar for searching for github repositories'
                                className="github-images"
                            />
                        </div>
                    </li>
                    <li>
                        Once you’ve found a repo you want to clone, <b>click the green button ‘Code’</b> near the
                        top-right of your screen.
                        <div>
                            <img
                                src={cloneRepoOne}
                                alt='red circle highlighting code button'
                                className="github-images"
                            />
                        </div>
                    </li>
                    <li>
                        Make sure you <b>select the SSH tab</b> and copy the link provided
                        <div>
                            <img
                                src={cloneRepoTwo}
                                alt='red circle highlighting SSH tab'
                                className="github-images"
                            />
                        </div>
                    </li>
                    <li>
                        It is recommended to create a folder that contains all your GitHub repo’s that you clone to stay organised:
                        <ul>
                            <li>
                                In your terminal, make sure you’re in the home directory by running<code className="inline-code">cd</code>
                            </li>
                            <li>
                                Run<code className="inline-code">mkdir projects</code>to create a folder called ‘projects’.
                            </li>
                            <li>
                                Run<code className="inline-code">cd projects</code>to go into that folder.
                            </li>
                            <li>
                                Now if you clone a repo, it will sit inside the folder.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Go to your terminal and run<code className="inline-code">git clone [ link ]</code>and you’re done.
                    </li>
                    <li>
                        To further understand the terminal commands used and more, refer to: <a href="https://builtin.com/software-engineering-perspectives/terminal-commands"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer">terminal commands</a>
                    </li>
                </ol>
            </section>
        </div>
    );
}
