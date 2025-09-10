import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Newsletter from "../src/components/sections/newsletter.jsx";

// mock window.alert so it doesn’t actually pop up during test
// eslint-disable-next-line no-undef
global.alert = jest.fn();

describe("Newsletter Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders heading with responsive typography classes and subheading", () => {
        render(<Newsletter />);

        // heading check
        const heading = screen.getByText("Subscribe to our newsletter");
        expect(heading).toBeInTheDocument();

        // check responsive classes applied
        expect(heading).toHaveClass("text-h3");
        expect(heading).toHaveClass("lg:text-h4");

        // subheading check
        expect(
            screen.getByText(/Stay updated with events, resources, and the latest in React Native./i)
        ).toBeInTheDocument();
    });

    it("shows error when submitting invalid email", () => {
        render(<Newsletter />);
        const input = screen.getByPlaceholderText("Email address");
        const button = screen.getByRole("button", { name: /subscribe/i });

        fireEvent.change(input, { target: { value: "invalid-email" } });
        fireEvent.click(button);

        expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
        // eslint-disable-next-line no-undef
        expect(global.alert).not.toHaveBeenCalled();
    });

    it("calls alert and clears input when submitting valid email", () => {
        render(<Newsletter />);
        const input = screen.getByPlaceholderText("Email address");
        const button = screen.getByRole("button", { name: /subscribe/i });

        fireEvent.change(input, { target: { value: "test@example.com" } });
        fireEvent.click(button);

        // eslint-disable-next-line no-undef
        expect(global.alert).toHaveBeenCalledWith("Subscribed with: test@example.com");
        expect(input.value).toBe(""); // should clear after submit
    });
});