import { render, screen } from '@testing-library/react';
import GitCheatsheetPage from './GitCheatsheetPage';

jest.mock('./assets/statusOne.png', () => 'statusOne.png');
jest.mock('./assets/statusTwo.png', () => 'statusTwo.png');
jest.mock('./assets/statusThree.png', () => 'statusThree.png');
jest.mock('./assets/terminalOutput.png', () => 'terminalOutput.png');
jest.mock('./assets/terminalError.png', () => 'terminalError.png');
jest.mock('./assets/terminalNoError.png', () => 'terminalNoError.png');

describe('GitCheatsheetPage', () => {
    it('renders the main heading', () => {
        render(<GitCheatsheetPage />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ClearScore Git Cheatsheet');
    });

    it('renders all expected subheadings', () => {
        const expectedHeadings = [
            'Create and checkout into new branch',
            'Check status of branch',
            'Adding changes to be committed',
            'Commit changes',
            'Add all changes and commit changes',
            'Revert/restore changes',
            'Pushing changes',
            'Update from master',
            'Panic button',
            'Getting a specific file from another branch and overwriting your version of the file',
        ];

        render(<GitCheatsheetPage />);
        expectedHeadings.forEach(text => {
            expect(screen.getByRole('heading', { level: 3, name: text })).toBeInTheDocument();
        });
    });

    it('renders syntax highlighter code blocks', () => {
        render(<GitCheatsheetPage />);
        const codeBlocks = screen.getAllByRole('code');
        expect(codeBlocks.length).toBeGreaterThanOrEqual(10); // Adjust if needed
    });

    it('renders all images with alt text', () => {
        render(<GitCheatsheetPage />);
        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThan(0);
        images.forEach(img => {
            expect(img).toHaveAttribute('alt');
        });
    });

    it('contains link to Notion ticket guide', () => {
        render(<GitCheatsheetPage />);
        const link = screen.getByRole('link', { name: /How to find my ticket number/i });
        expect(link).toHaveAttribute('href', expect.stringContaining('notion.so'));
    });
});
