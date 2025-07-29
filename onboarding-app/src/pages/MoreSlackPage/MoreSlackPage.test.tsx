import { render, screen } from "@testing-library/react";
import MoreSlackPage from "./MoreSlackPage";

jest.mock("./assets/slackStepOne.png", () => "slackStepOne.png");
jest.mock("./assets/slackStepTwo.png", () => "slackStepTwo.png");
jest.mock("./assets/slackStepThree.png", () => "slackStepThree.png");

describe("MoreSlackPage", () => {
    it("renders the main heading", () => {
        render(<MoreSlackPage />);
        const heading: HTMLElement = screen.getByRole("heading", {
            level: 1,
            name: "How to find and add more slack channels",
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders all step instructions as list items", () => {
        render(<MoreSlackPage />);
        const listItems: HTMLElement[] = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(3);

        expect(listItems[0]).toHaveTextContent(/More.*Channels/i);
        expect(listItems[1]).toHaveTextContent(/Search for any channel/i);
        expect(listItems[2]).toHaveTextContent(/view a channel without joining/i);
    });

    it("renders the correct images with alt text and class", () => {
        render(<MoreSlackPage />);
        const stepOneImg = screen.getByAltText("Highlighting more and channel buttons") as HTMLImageElement;
        const stepTwoImg = screen.getByAltText("Showing search bar for searching for slack channels") as HTMLImageElement;
        const stepThreeImg = screen.getByAltText("red circle showing two buttons to view the channel and to join") as HTMLImageElement;

        expect(stepOneImg).toHaveAttribute("src", "slackStepOne.png");
        expect(stepOneImg).toHaveClass("slack-image-vertical");

        expect(stepTwoImg).toHaveAttribute("src", "slackStepTwo.png");
        expect(stepTwoImg).toHaveClass("slack-images");

        expect(stepThreeImg).toHaveAttribute("src", "slackStepThree.png");
        expect(stepThreeImg).toHaveClass("slack-images");
    });
});
