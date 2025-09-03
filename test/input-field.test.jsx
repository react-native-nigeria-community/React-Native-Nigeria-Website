import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputField from "../src/components/common/input-field.jsx";

describe("InputField Component", () => {
    it("renders with a label", () => {
        render(<InputField id="name" label="Full Name" />);
        expect(screen.getByText("Full Name")).toBeInTheDocument();
    });

    it("renders a text input when 'as' is not textarea", () => {
        render(<InputField id="email" type="email" placeholder="Email address" />);
        const input = screen.getByPlaceholderText("Email address");
        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe("INPUT");
    });

    it("renders a textarea when 'as' is textarea", () => {
        render(<InputField id="message" as="textarea" placeholder="Write here..." />);
        const textarea = screen.getByPlaceholderText("Write here...");
        expect(textarea).toBeInTheDocument();
        expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("calls onChange when typing into input", () => {
        const handleChange = jest.fn();
        render(
            <InputField
                id="username"
                placeholder="Enter username"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText("Enter username");
        fireEvent.change(input, { target: { value: "Victory" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("shows an error message when error prop is passed", () => {
        render(
            <InputField
                id="email"
                type="email"
                placeholder="Email address"
                error="Please enter a valid email"
            />
        );

        expect(screen.getByRole("alert")).toHaveTextContent(
            "Please enter a valid email"
        );
    });
});