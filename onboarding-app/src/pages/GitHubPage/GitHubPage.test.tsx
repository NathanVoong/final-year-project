import { render, screen } from "@testing-library/react";
import GitHubPage from "./GitHubPage";

// Mock image imports
jest.mock("./assets/findRepoOne.png", () => "findRepoOne.png");
jest.mock("./assets/findRepoTwo.png", () => "findRepoTwo.png");
jest.mock("./assets/cloneRepoOne.png", () => "cloneRepoOne.png");
jest.mock("./assets/cloneRepoTwo.png", () => "cloneRepoTwo.png");

describe("GitHubPage", () => {
    it("renders the main heading", () => {
        render(<GitHubPage />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("How to find & clone GitHub repositories");
    });

    it("renders all instructional images", () => {
        render(<GitHubPage />);
        expect(screen.getByAltText("GitHub homepage")).toBeInTheDocument();
        expect(screen.getByAltText("Showing search bar for searching for github repositories")).toBeInTheDocument();
        expect(screen.getByAltText("red circle highlighting code button")).toBeInTheDocument();
        expect(screen.getByAltText("red circle highlighting SSH tab")).toBeInTheDocument();
    });

    it("contains a link to GitHub", () => {
        render(<GitHubPage />);
        const link = screen.getByRole("link", { name: "GitHub" });
        expect(link).toHaveAttribute("href", "https://github.com/");
    });

    it("contains a link to terminal commands", () => {
        render(<GitHubPage />);
        const link = screen.getByRole("link", { name: "terminal commands" });
        expect(link).toHaveAttribute("href", "https://builtin.com/software-engineering-perspectives/terminal-commands");
    });
});
