import TypographyComponent from "./typography.jsx";

function NewsletterCard({ title, date, description, link }) {
    return (
        <div className={"p-6 border rounded-lg space-y-2"}>
            <TypographyComponent as={"h4"} variant={"h4"}>
                {title}
            </TypographyComponent>

            <TypographyComponent
                as={"p"}
                variant={"p"}
                className={"text-secondary text-sm"}
            >
                {date}
            </TypographyComponent>

            <TypographyComponent as={"p"} variant={"p"}>
                {description}
            </TypographyComponent>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={"text-accent underline"}
            >
                Read newsletter
            </a>
        </div>
    );
}

export default NewsletterCard;
