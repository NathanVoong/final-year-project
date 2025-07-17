import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component", () => {
    it("renders the onboarding section", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Headings
        expect(screen.getByText(/Onboarding/i)).toBeInTheDocument();
        expect(screen.getByText(/Setting up your dev environment/i)).toBeInTheDocument();
        expect(screen.getByText(/Set up your environment to start your journey/i)).toBeInTheDocument();
    });

    it("renders the floor plan card", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText(/Floor plan and meeting rooms/i)).toBeInTheDocument();
        expect(screen.getByText(/Floor plans for the London office/i)).toBeInTheDocument();
    });

    it("renders all useful guides", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(screen.getByText(/How to add more slack channels/i)).toBeInTheDocument();
        expect(screen.getByText(/How to clone GitHub repositories/i)).toBeInTheDocument();
        expect(screen.getByText(/How to find GitHub repositories/i)).toBeInTheDocument();
    });
});
