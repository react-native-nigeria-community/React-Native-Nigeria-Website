import React from "react";
import TypographyComponent from "./typography";
import { useTranslation } from "../../context/useTranslation";

interface NewsletterCardProps {
    title: string;
    date: string;
    description: string;
    link: string;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({ title, date, description, link }) => {
    const { t } = useTranslation();
    
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
                {t.newsletterCard.readNewsletter}
            </a>
        </div>
    );
}

export default NewsletterCard;
