import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Typography from "../src/components/common/typography.jsx";

describe("Typography Component", () => {
    it("renders text inside the correct HTML tag", () => {
        render(<Typography variant="h1" as="h1">Heading 1</Typography>);
        const heading = screen.getByText("Heading 1");
        expect(heading.tagName).toBe("H1");
    });

    it("applies the correct variant class", () => {
        render(<Typography variant="h2" as="h2">Heading 2</Typography>);
        const heading = screen.getByText("Heading 2");
        expect(heading).toHaveClass("text-h2");
    });

    it("defaults to paragraph if no props are passed", () => {
        render(<Typography>Default Paragraph</Typography>);
        const para = screen.getByText("Default Paragraph");
        expect(para.tagName).toBe("P");
        expect(para).toHaveClass("text-p");
    });

    it("merges custom className with variant styles", () => {
        render(
            <Typography variant="h3" as="h3" className="text-red-500">
                Custom Heading
            </Typography>
        );
        const heading = screen.getByText("Custom Heading");
        expect(heading).toHaveClass("text-h3");
        expect(heading).toHaveClass("text-red-500");
    });

    it("renders multiple variants correctly", () => {
        render(
            <>
                <Typography variant="h4" as="h4">Heading 4</Typography>
                <Typography variant="p" as="p">Paragraph</Typography>
            </>
        );

        expect(screen.getByText("Heading 4")).toHaveClass("text-h4");
        expect(screen.getByText("Paragraph")).toHaveClass("text-p");
    });
});