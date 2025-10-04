import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import AccordionComponent from "../src/components/commons/accordion.jsx";

describe("Accordion Component", () => {
    const accordionItems = [
        { title: "Question 1", content: "Answer 1" },
        { title: "Question 2", content: "Answer 2" },
        { title: "Question 3", content: "Answer 3" },
    ];

    it("renders all accordion titles", () => {
        render(<AccordionComponent items={accordionItems} />);
        accordionItems.forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });

    it("expands and collapses content when clicked", () => {
        render(<AccordionComponent items={accordionItems} />);
        const firstButton = screen.getByText("Question 1");

        // Get the content container for the first accordion item
        const contentContainer = screen.getByText("Answer 1").closest('div').parentElement;

        // Initially should have collapsing classes
        expect(contentContainer).toHaveClass("max-h-0");
        expect(contentContainer).toHaveClass("opacity-0");

        // Click to expand
        fireEvent.click(firstButton);
        expect(contentContainer).toHaveClass("max-h-96");
        expect(contentContainer).toHaveClass("opacity-100");
        expect(contentContainer).toHaveClass("mt-4");

        // Click again to collapse
        fireEvent.click(firstButton);
        expect(contentContainer).toHaveClass("max-h-0");
        expect(contentContainer).toHaveClass("opacity-0");
    });

    it("only allows one open at a time when allowMultiple=false", () => {
        render(<AccordionComponent items={accordionItems} allowMultiple={false} />);

        const firstButton = screen.getByText("Question 1");
        const secondButton = screen.getByText("Question 2");

        // Get content containers for both accordion items
        const firstContentContainer = screen.getByText("Answer 1").closest('div').parentElement;
        const secondContentContainer = screen.getByText("Answer 2").closest('div').parentElement;

        // Click first button - should expand first content
        fireEvent.click(firstButton);
        expect(firstContentContainer).toHaveClass("max-h-96");
        expect(firstContentContainer).toHaveClass("opacity-100");
        expect(secondContentContainer).toHaveClass("max-h-0");
        expect(secondContentContainer).toHaveClass("opacity-0");

        // Click second button - should collapse first and expand second
        fireEvent.click(secondButton);
        expect(firstContentContainer).toHaveClass("max-h-0");
        expect(firstContentContainer).toHaveClass("opacity-0");
        expect(secondContentContainer).toHaveClass("max-h-96");
        expect(secondContentContainer).toHaveClass("opacity-100");
    });

    it("allows multiple open when allowMultiple=true", () => {
        render(<AccordionComponent items={accordionItems} allowMultiple={true} />);

        const firstButton = screen.getByText("Question 1");
        const secondButton = screen.getByText("Question 2");

        // Get content containers for both accordion items
        const firstContentContainer = screen.getByText("Answer 1").closest('div').parentElement;
        const secondContentContainer = screen.getByText("Answer 2").closest('div').parentElement;

        // Click first button - should expand first content
        fireEvent.click(firstButton);
        expect(firstContentContainer).toHaveClass("max-h-96");
        expect(firstContentContainer).toHaveClass("opacity-100");
        expect(secondContentContainer).toHaveClass("max-h-0");
        expect(secondContentContainer).toHaveClass("opacity-0");

        // Click second button - should expand second content while keeping first open
        fireEvent.click(secondButton);
        expect(firstContentContainer).toHaveClass("max-h-96");
        expect(firstContentContainer).toHaveClass("opacity-100");
        expect(secondContentContainer).toHaveClass("max-h-96");
        expect(secondContentContainer).toHaveClass("opacity-100");
    });
});