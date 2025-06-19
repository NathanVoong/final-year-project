const downloads = [
    { label: 'Git Cheat Sheet', url: '/downloads/git-cheat-sheet.pdf' },
    { label: 'Code Review Template', url: '/downloads/code-review-template.docx' },
];

export default function Resources() {
    return (
        <div>
            <h2>Downloadable Resources</h2>
            <ul>
                {downloads.map((file, i) => (
                    <li key={i}>
                        <a href={file.url} download>{file.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
