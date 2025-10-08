import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonComponent from "../src/components/commons/button.jsx";

describe("Button Component", () => {
    it("renders with children text", () => {
        render(<ButtonComponent>Click Me</ButtonComponent>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("applies primary variant styles by default", () => {
        render(<ButtonComponent>Primary</ButtonComponent>);
        const button = screen.getByRole("button", { name: /Primary/i });
        // Default variant is "primary" => bg-bg2
        expect(button).toHaveClass("bg-bg2");
        expect(button).toHaveClass("rounded-lg");
        expect(button).toHaveClass("font-rubik");
    });

    it("applies secondary variant styles", () => {
        render(<ButtonComponent variant="secondary">Secondary</ButtonComponent>);
        const button = screen.getByRole("button", { name: /Secondary/i });
        // Secondary variant => bg-primary
        expect(button).toHaveClass("bg-primary");
        expect(button).toHaveClass("w-[206px]");
    });

    it("applies accent variant styles", () => {
        render(<ButtonComponent variant="accent">Accent</ButtonComponent>);
        const button = screen.getByRole("button", { name: /Accent/i });
        // Accent variant => border-2 and border-border-primary
        expect(button).toHaveClass("border-2");
        expect(button).toHaveClass("border-border-primary");
        expect(button).toHaveClass("text-secondary");
    });

    it("calls onClick when clicked", () => {
        const handleClick = jest.fn();
        render(<ButtonComponent onClick={handleClick}>Click Me</ButtonComponent>);
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when disabled prop is true", () => {
        render(<ButtonComponent disabled>Disabled</ButtonComponent>);
        const button = screen.getByText("Disabled");
        expect(button).toBeDisabled();
        // Should also have disabled style
        expect(button).toHaveClass("disabled:opacity-50");
    });
});