import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypographyComponent from "../src/components/commons/typography.jsx";

describe("Typography Component", () => {
    it("renders text inside the correct HTML tag", () => {
        render(<TypographyComponent variant="h1" as="h1">Heading 1</TypographyComponent>);
        const heading = screen.getByText("Heading 1");
        expect(heading.tagName).toBe("H1");
    });

    it("applies the correct variant class", () => {
        render(<TypographyComponent variant="h2" as="h2">Heading 2</TypographyComponent>);
        const heading = screen.getByText("Heading 2");
        expect(heading).toHaveClass("text-h2");
    });

    it("defaults to paragraph if no props are passed", () => {
        render(<TypographyComponent>Default Paragraph</TypographyComponent>);
        const para = screen.getByText("Default Paragraph");
        expect(para.tagName).toBe("P");
        expect(para).toHaveClass("text-p");
    });

    it("merges custom className with variant styles", () => {
        render(
            <TypographyComponent variant="h3" as="h3" className="text-red-500">
                Custom Heading
            </TypographyComponent>
        );
        const heading = screen.getByText("Custom Heading");
        expect(heading).toHaveClass("text-mh3"); // mobile first
        expect(heading).toHaveClass("lg:text-h3"); // responsive
        expect(heading).toHaveClass("text-red-500"); // custom class
    });

    it("renders multiple variants correctly", () => {
        render(
            <>
                <TypographyComponent variant="h4" as="h4">Heading 4</TypographyComponent>
                <TypographyComponent variant="p" as="p">Paragraph</TypographyComponent>
            </>
        );

        expect(screen.getByText("Heading 4")).toHaveClass("text-h4");
        expect(screen.getByText("Paragraph")).toHaveClass("text-p");
    });

    it("applies responsiveVariant classes correctly", () => {
        render(
            <TypographyComponent
                variant="p"
                as="p"
                responsiveVariant={{ lg: "h4", md: "h2" }}
            >
                Responsive Text
            </TypographyComponent>
        );

        const text = screen.getByText("Responsive Text");

        // Default base class
        expect(text).toHaveClass("text-p");

        // Responsive classes applied
        expect(text).toHaveClass("md:text-h2");
        expect(text).toHaveClass("lg:text-h4");
    });
});