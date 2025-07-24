import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import SetupPage from "./SetupPage";

jest.mock("../../assets/jFrogSetup.png", () => "jFrogSetup.png");
jest.mock("../../assets/jFrogUsername.png", () => "jFrogUsername.png");
jest.mock("../../assets/jFrogPassword.png", () => "jFrogPassword.png");

describe("SetupPage", () => {
    beforeEach(() => {
        // Mock clipboard API
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn(() => Promise.resolve())
            }
        });
        // Mock scrollTo
        window.scrollTo = jest.fn();
    });

    it("renders the first slide by default", () => {
        render(<SetupPage/>);
        expect(screen.getByText("Setting up your dev environment")).toBeInTheDocument();
        expect(screen.getByText("Account access")).toBeInTheDocument();
        expect(screen.getByText("Copy")).toBeInTheDocument();
    });

    it("navigates to next and previous slides", () => {
        render(<SetupPage/>);
        // Slide 0: Account access
        expect(
            screen.getByRole("heading", {level: 3, name: "Account access"})
        ).toBeInTheDocument();
        // Next to Slide 1: Software
        fireEvent.click(screen.getByRole("button", { name: "Next" }));
        expect(
            screen.getByRole("heading", {level: 3, name: "Software"})
        ).toBeInTheDocument();
        // Next to Slide 2: jFrog setup
        fireEvent.click(screen.getByRole("button", { name: "Next" }));
        expect(
            screen.getByRole("heading", {level: 3, name: "jFrog setup"})
        ).toBeInTheDocument();
        // Next to Slide 3: .npmrc + .yarnrc.yml setup
        fireEvent.click(screen.getByRole("button", { name: "Next" }));
        expect(
            screen.getByRole("heading", {level: 3, name: ".npmrc + .yarnrc.yml setup"})
        ).toBeInTheDocument();
        // Go back to to Slide 2: jFrog setup
        fireEvent.click(screen.getByRole("button", { name: "Previous" }));
        expect(
            screen.getByRole("heading", {level: 3, name: "jFrog setup"})
        ).toBeInTheDocument();
    });

    it("calls window.scrollTo on slide change", () => {
        render(<SetupPage/>);
        fireEvent.click(screen.getByRole("button", { name: "Next" }));
        expect(window.scrollTo).toHaveBeenCalledWith({top: 0, behavior: "smooth"});
    });

    it("copies the code when Copy button is clicked", async () => {
        render(<SetupPage/>);
        const copyButton = screen.getByText("Copy");
        fireEvent.click(copyButton);
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
        await waitFor(() => {
            expect(screen.getByText("Copied!")).toBeInTheDocument();
        });
    });
});
