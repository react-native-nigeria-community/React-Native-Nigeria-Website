import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../src/components/common/accordion.jsx";

describe("Accordion Component", () => {
    const accordionItems = [
        { title: "Question 1", content: "Answer 1" },
        { title: "Question 2", content: "Answer 2" },
        { title: "Question 3", content: "Answer 3" },
    ];

    it("renders all accordion titles", () => {
        render(<Accordion items={accordionItems} />);
        accordionItems.forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });

    it("expands and collapses content when clicked", () => {
        render(<Accordion items={accordionItems} />);
        const firstButton = screen.getByText("Question 1");

        // Initially content is hidden
        expect(screen.queryByText("Answer 1")).not.toBeVisible();

        // Click to expand
        fireEvent.click(firstButton);
        expect(screen.getByText("Answer 1")).toBeVisible();

        // Click again to collapse
        fireEvent.click(firstButton);
        expect(screen.queryByText("Answer 1")).not.toBeVisible();
    });

    it("only allows one open at a time when allowMultiple=false", () => {
        render(<Accordion items={accordionItems} allowMultiple={false} />);

        const firstButton = screen.getByText("Question 1");
        const secondButton = screen.getByText("Question 2");

        fireEvent.click(firstButton);
        expect(screen.getByText("Answer 1")).toBeVisible();

        fireEvent.click(secondButton);
        expect(screen.getByText("Answer 2")).toBeVisible();
        expect(screen.queryByText("Answer 1")).not.toBeVisible();
    });

    it("allows multiple open when allowMultiple=true", () => {
        render(<Accordion items={accordionItems} allowMultiple={true} />);

        const firstButton = screen.getByText("Question 1");
        const secondButton = screen.getByText("Question 2");

        fireEvent.click(firstButton);
        fireEvent.click(secondButton);

        expect(screen.getByText("Answer 1")).toBeVisible();
        expect(screen.getByText("Answer 2")).toBeVisible();
    });
});