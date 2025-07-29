import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

jest.mock("./assets/meeting-image.jpg", () => "meeting-image.jpg");

describe("Home component", () => {
    it("renders the onboarding section", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Headings
        expect(screen.getByText("Onboarding")).toBeInTheDocument();
        expect(screen.getByText("Setting up your dev environment")).toBeInTheDocument();
        expect(screen.getByText("Set up your environment to start your journey at ClearScore")).toBeInTheDocument();
    });

    it("renders the floor plan card", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText("Floor plan and meeting rooms")).toBeInTheDocument();
        expect(screen.getByText("Floor plans for the London office")).toBeInTheDocument();
    });

    it("renders all useful guides", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText("How to find/add more slack channels")).toBeInTheDocument();
        expect(screen.getByText("How to clone GitHub repositories")).toBeInTheDocument();
        expect(screen.getByText("How to find GitHub repositories")).toBeInTheDocument();
    });
});
