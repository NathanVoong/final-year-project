import { render, screen } from "@testing-library/react";
import ClubsPage from "./ClubsPage";

jest.mock("./assets/basketballClub.jpg", () => "basketballClub.jpg");
jest.mock("./assets/boardGamesClub.jpeg", () => "boardGamesClub.jpeg");
jest.mock("./assets/cinemaClub.webp", () => "cinemaClub.webp");
jest.mock("./assets/climbingClub.jpeg", () => "climbingClub.jpeg");
jest.mock("./assets/cycleClub.jpeg", () => "cycleClub.jpeg");
jest.mock("./assets/dndClub.webp", () => "dndClub.webp");
jest.mock("./assets/footballClub.webp", () => "footballClub.webp");
jest.mock("./assets/legoClub.webp", () => "legoClub.webp");
jest.mock("./assets/movemberClub.webp", () => "movemberClub.webp");
jest.mock("./assets/primeClub.jpg", () => "primeClub.jpg");
jest.mock("./assets/queerScore.webp", () => "queerScore.webp");
jest.mock("./assets/runningClub.jpeg", () => "runningClub.jpeg");
jest.mock("./assets/tennisClub.jpg", () => "tennisClub.jpg");
jest.mock("./assets/volunteeringClub.webp", () => "volunteeringClub.webp");
jest.mock("./assets/womensClub.webp", () => "womensClub.webp");
jest.mock("./assets/yogaClub.jpeg", () => "yogaClub.jpeg");

describe("ClubsPage", () => {
    it("renders the heading", () => {
        render(<ClubsPage />);
        const heading: HTMLElement = screen.getByRole("heading", { name: "Clubs and Communities" });
        expect(heading).toBeInTheDocument();
    });

    it("renders all club cards with correct titles and images", () => {
        render(<ClubsPage />);
        const clubs: Array<[title: string, alt: string]> = [
            ["LEGO Club", "LEGO Club"],
            ["Movember", "Movember Community"],
            ["Womens Network", "Womens Network Community"],
            ["Board Games", "Board Games Club"],
            ["Football", "Football Club"],
            ["QueerScore", "QueerScore Community"],
            ["Yoga", "Yoga Club"],
            ["Climbing Crew", "Climbing Club"],
            ["Cinema", "Cinema Club"],
            ["CycleScore", "Cycle Club"],
            ["Prime", "Club representing interests of minority ethnics"],
            ["Running", "Running Club"],
            ["Basketball", "Basketball Club"],
            ["Dungeons and Dragons", "Dungeons and Dragons Club"],
            ["Tennis", "Tennis Club"],
            ["Foodbank Volunteering", "Foodbank Volunteering Club"],
        ];
        clubs.forEach(([title, alt]: [string, string]) => {
            const clubHeading: HTMLElement = screen.getByRole("heading", { name: title });
            expect(clubHeading).toBeInTheDocument();

            const clubImg: HTMLImageElement = screen.getByAltText(alt) as HTMLImageElement;
            expect(clubImg).toBeInTheDocument();
        });
    });

    it("renders each club card as a link with target _blank", () => {
        render(<ClubsPage />);
        const cardLinks: HTMLAnchorElement[] = screen.getAllByRole("link", { hidden: true }) as HTMLAnchorElement[];
        expect(cardLinks.length).toBe(16);
        cardLinks.forEach((link: HTMLAnchorElement) => {
            expect(link).toHaveAttribute("target", "_blank");
            expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
            expect(link).toHaveAttribute("href");
            expect(link.getAttribute("href")).toMatch(/^https:\/\/www\.notion\.so\//);
        });
    });

    it("matches club cards with correct images", () => {
        render(<ClubsPage />);
        const legoImg: HTMLImageElement = screen.getByAltText("LEGO Club") as HTMLImageElement;
        expect(legoImg).toHaveAttribute("src", "legoClub.webp");

        const movemberImg: HTMLImageElement = screen.getByAltText("Movember Community") as HTMLImageElement;
        expect(movemberImg).toHaveAttribute("src", "movemberClub.webp");

        const womensImg: HTMLImageElement = screen.getByAltText("Womens Network Community") as HTMLImageElement;
        expect(womensImg).toHaveAttribute("src", "womensClub.webp");

        const boardGamesImg: HTMLImageElement = screen.getByAltText("Board Games Club") as HTMLImageElement;
        expect(boardGamesImg).toHaveAttribute("src", "boardGamesClub.jpeg");
    });
});
