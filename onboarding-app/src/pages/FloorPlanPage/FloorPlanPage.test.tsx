import { render, screen } from "@testing-library/react";
import FloorPlanPage from "./FloorPlanPage";

jest.mock("./assets/groundFloorSmall.jpg", () => "groundFloorSmall.jpg");
jest.mock("./assets/groundFloorBig.png", () => "groundFloorBig.png");
jest.mock("./assets/firstFloor.jpg", () => "firstFloor.jpg");
jest.mock("./assets/secondFloor.jpg", () => "secondFloor.jpg");
jest.mock("./assets/thirdFloor.jpg", () => "thirdFloor.jpg");

describe("FloorPlanPage", () => {
    it("renders the main heading", () => {
        render(<FloorPlanPage />);
        const heading: HTMLElement = screen.getByRole("heading", {
            level: 1,
            name: /Floor plan and meeting rooms/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders all floor section headings", () => {
        render(<FloorPlanPage />);
        const headings: HTMLElement[] = [
            screen.getByRole("heading", { level: 3, name: "Ground Floor" }),
            screen.getByRole("heading", { level: 3, name: "First Floor" }),
            screen.getByRole("heading", { level: 3, name: "Second Floor" }),
            screen.getByRole("heading", { level: 3, name: "Third Floor ( Canteen/eating space )" }),
        ];
        headings.forEach((h) => expect(h).toBeInTheDocument());
    });

    it("renders correct floor descriptions", () => {
        render(<FloorPlanPage />);
        expect(
            screen.getByText("For FLR, PPP and Admin")
        ).toBeInTheDocument();
        expect(
            screen.getByText("For GTM, Data & Analytics and Upstream")
        ).toBeInTheDocument();
        expect(
            screen.getByText("For Capabilities, Surfaces, Infrastructure and the IT Team")
        ).toBeInTheDocument();
    });

    it("renders two images for ground floor with correct alt and src", () => {
        render(<FloorPlanPage />);
        const img1 = screen.getByAltText(
            "Floor plan of the ground floor showing the admin desks, reception and 2 big meeting rooms"
        ) as HTMLImageElement;
        const img2 = screen.getByAltText(
            "Larger picture of the ground floor plan showing everything"
        ) as HTMLImageElement;
        expect(img1).toHaveAttribute("src", "groundFloorSmall.jpg");
        expect(img2).toHaveAttribute("src", "groundFloorBig.png");
        expect(img1).toHaveClass("floor-plan-image");
        expect(img2).toHaveClass("floor-plan-image");
    });

    it("renders one image per each upper floor with correct alt and src", () => {
        render(<FloorPlanPage />);
        const firstFloorImg = screen.getByAltText("Floor plan of the first floor") as HTMLImageElement;
        const secondFloorImg = screen.getByAltText("Floor plan of the second floor") as HTMLImageElement;
        const thirdFloorImg = screen.getByAltText("Floor plan of the third floor") as HTMLImageElement;

        expect(firstFloorImg).toHaveAttribute("src", "firstFloor.jpg");
        expect(secondFloorImg).toHaveAttribute("src", "secondFloor.jpg");
        expect(thirdFloorImg).toHaveAttribute("src", "thirdFloor.jpg");

        expect(firstFloorImg).toHaveClass("floor-plan-image");
        expect(secondFloorImg).toHaveClass("floor-plan-image");
        expect(thirdFloorImg).toHaveClass("floor-plan-image");
    });

    it("renders only five images in total", () => {
        render(<FloorPlanPage />);
        const images = screen.getAllByRole("img") as HTMLImageElement[];
        expect(images.length).toBe(5);
    });

    it("all images have unique alt texts", () => {
        render(<FloorPlanPage />);
        const alts = screen.getAllByRole("img").map((img) => img.getAttribute("alt"));
        const uniqueAlts = Array.from(new Set(alts));
        expect(alts.length).toBe(uniqueAlts.length);
    });
});
