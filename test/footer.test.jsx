import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterComponent from "../src/components/layouts/footer.jsx";

describe("Footer Component", () => {
    it("renders logo and title text", () => {
        render(<FooterComponent />);

        // logo image
        const logo = screen.getByAltText("official-logo");
        expect(logo).toBeInTheDocument();

        // text
        expect(screen.getByText("Build with React Native")).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        render(<FooterComponent />);
        const links = ["Home", "About Us", "Events", "Contact"];

        links.forEach((link) => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
    });

    it("renders social icons", () => {
        render(<FooterComponent />);
        const twitter = screen.getByAltText("twitter-png");
        const instagram = screen.getByAltText("instagram-icon");

        expect(twitter).toBeInTheDocument();
        expect(instagram).toBeInTheDocument();
    });

    it("renders copyright with current year", () => {
        render(<FooterComponent />);
        const year = new Date().getFullYear();

        expect(
            screen.getByText(`@ ${year} Build with React Native`)
        ).toBeInTheDocument();
    });

    it("renders policy links", () => {
        render(<FooterComponent />);

        expect(screen.getByText("Privacy & Policy")).toBeInTheDocument();
        expect(screen.getByText("Terms & Condition")).toBeInTheDocument();
    });
});