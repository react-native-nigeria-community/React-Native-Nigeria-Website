import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from '../src/components/common/button.jsx';

describe("Button Component", () => {
    it("renders with children text", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("applies primary variant styles by default", () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole("button", { name: /Primary/i });
        expect(button).toHaveClass("bg-secondary");
    });

    it("applies secondary variant styles", () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole("button", { name: /Secondary/i });
        expect(button).toHaveClass("bg-primary");
    });

    it("applies accent variant styles", () => {
        render(<Button variant="accent">Accent</Button>);
        const button = screen.getByRole("button", { name: /Accent/i });
        expect(button).toHaveClass("border-2");
    });

    it("calls onClick when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByText("Disabled");
        expect(button).toBeDisabled();
    });
});