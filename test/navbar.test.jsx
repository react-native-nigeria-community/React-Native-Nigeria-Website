import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../src/components/layouts/navbar.jsx";

describe("Navbar Component", () => {
    it("renders logo and branding text", () => {
        render(<Navbar />);
        expect(screen.getByAltText("official-logo")).toBeInTheDocument();
        expect(screen.getByText("Build with React Native")).toBeInTheDocument();
    });

    it("renders desktop menu items (hidden on small screens)", () => {
        render(<Navbar />);
        const desktopMenu = screen.getAllByRole("list")[0]; // first <ul> = desktop
        expect(within(desktopMenu).getByText("Home")).toBeInTheDocument();
        expect(within(desktopMenu).getByText("About")).toBeInTheDocument();
        expect(within(desktopMenu).getByText("Events")).toBeInTheDocument();
    });

    it("hides mobile menu by default", () => {
        render(<Navbar />);
        const mobileMenu = screen.getAllByRole("list")[1]; // second <ul> = mobile
        expect(mobileMenu).toHaveClass("scale-y-0");
        expect(mobileMenu).toHaveClass("opacity-0");
    });

    it("shows mobile menu when menu button is clicked", () => {
        render(<Navbar />);
        const menuButton = screen.getByAltText("menu").closest("button"); // pick the mobile menu toggle
        fireEvent.click(menuButton);
        const mobileMenu = screen.getAllByRole("list")[1];
        expect(mobileMenu).toHaveClass("scale-y-100");
        expect(mobileMenu).toHaveClass("opacity-100");
    });

    it("hides mobile menu again when menu button is clicked twice", () => {
        render(<Navbar />);
        const menuButton = screen.getByAltText("menu").closest("button");
        fireEvent.click(menuButton); // open
        fireEvent.click(menuButton); // close
        const mobileMenu = screen.getAllByRole("list")[1];
        expect(mobileMenu).toHaveClass("scale-y-0");
        expect(mobileMenu).toHaveClass("opacity-0");
    });
});