import { render, screen } from "@testing-library/react";
import FasterOktaPage from "./FasterOktaPage";

// Mock images so they don't error in tests
jest.mock("../../assets/OktaSettings.png", () => "OktaSettings.png");
jest.mock("../../assets/OktaBiometric.png", () => "OktaBiometric.png");

describe("FasterOktaPage", () => {
    it("renders the heading and intro text", () => {
        render(<FasterOktaPage />);
        expect(
            screen.getByRole("heading", { level: 1, name: /Setting up faster Okta verification/i })
        ).toBeInTheDocument();
        expect(
            screen.getByText(/how to setup faster Okta fingerprint verification/i)
        ).toBeInTheDocument();
    });

    it("renders all instructional steps", () => {
        render(<FasterOktaPage />);
        expect(
            screen.getByText(/click on your name at the top-left and click on Settings/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Security Methods/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/instead of needing to authenticate Okta through your phone/i)
        ).toBeInTheDocument();
    });

    it("has a link to Okta homepage that opens in a new tab", () => {
        render(<FasterOktaPage />);
        const link = screen.getByRole("link", { name: /Okta homepage/i });
        expect(link).toHaveAttribute("href", "https://clearscore.okta-emea.com/app/UserHome");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
});
