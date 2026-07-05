import React from "react";
import TypographyComponent from "../components/commons/typography";
import { useTranslation } from "../context/useTranslation";
import NewsletterCard from "../components/commons/newsletter-card";
import { useSubstackFeed } from "../hooks/useSubstackFeed";

const NewsletterArchive: React.FC = () => {
    const { t } = useTranslation();
    const { newsletters, loading, error } = useSubstackFeed();

    return (
        <>
            <section className={"py-12 px-6 lg:bg-bg1"}>
                <div className={"text-center lg:mx-auto"}>
                    <TypographyComponent
                        as={"h1"}
                        variant={"h1"}
                        className={"text-bg1 lg:text-white"}
                    >
                        {t.newsletterPage.title}
                    </TypographyComponent>

                    <TypographyComponent
                        as={"p"}
                        variant={"p"}
                        className={"mt-4 text-secondary lg:text-white"}
                    >
                        {t.newsletterPage.description}
                    </TypographyComponent>
                </div>
            </section>

            <section className={"px-6 py-12"}>
                <div className={"grid gap-6 md:grid-cols-2 lg:max-w-[1000px] mx-auto"}>
                    {loading && (
                        <TypographyComponent as="p" variant="p" className="col-span-full text-center text-secondary">
                            Loading newsletters...
                        </TypographyComponent>
                    )}
                    {error && (
                        <TypographyComponent as="p" variant="p" className="col-span-full text-center text-red-500">
                            Failed to load newsletters. Please try again later.
                        </TypographyComponent>
                    )}
                    {newsletters.map((newsletter, index) => (
                        <NewsletterCard
                            key={index}
                            title={newsletter.title}
                            date={newsletter.date}
                            description={newsletter.description}
                            link={newsletter.link}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default NewsletterArchive;