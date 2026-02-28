import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputFieldComponent from "../src/components/commons/input-field";

describe("InputField Component", () => {
    it("renders with a label", () => {
        render(
            <InputFieldComponent
                id="name"
                label="Full Name"
                cols={30}
                rows={5}
                as="input"
                value=""
                onChange={() => {}}
                error=""
                className=""
            />
        );
        expect(screen.getByText("Full Name")).toBeInTheDocument();
    });

    it("renders a text input when 'as' is not textarea", () => {
        render(<InputFieldComponent id="email" type="email" placeholder="Email address" label={undefined} cols={undefined} rows={undefined} as={undefined} value={undefined} onChange={undefined} error={undefined} className={undefined} />);
        const input = screen.getByPlaceholderText("Email address");
        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe("INPUT");
    });

    it("renders a textarea when 'as' is textarea", () => {
        render(<InputFieldComponent id="message" as="textarea" placeholder="Write here..." label={undefined} cols={undefined} rows={undefined} value={undefined} onChange={undefined} error={undefined} className={undefined} />);
        const textarea = screen.getByPlaceholderText("Write here...");
        expect(textarea).toBeInTheDocument();
        expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("calls onChange when typing into input", () => {
        const handleChange = jest.fn();
        render(
            <InputFieldComponent
                id="username"
                placeholder="Enter username"
                value=""
                onChange={handleChange} label={undefined} cols={undefined} rows={undefined} as={undefined} error={undefined} className={undefined}            />
        );

        const input = screen.getByPlaceholderText("Enter username");
        fireEvent.change(input, { target: { value: "Victory" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("shows an error message when error prop is passed", () => {
        render(
            <InputFieldComponent
                id="email"
                type="email"
                placeholder="Email address"
                error="Please enter a valid email" label={undefined} cols={undefined} rows={undefined} as={undefined} value={undefined} onChange={undefined} className={undefined}            />
        );

        expect(screen.getByRole("alert")).toHaveTextContent(
            "Please enter a valid email"
        );
    });
});