import TypographyComponent from "../components/commons/typography.jsx";
import { useTranslation } from "../context/useTranslation";
import NewsletterCard from "../components/commons/newsletter-card.jsx";
import newsletters from "../constants/newsletters.js";

function NewsletterArchive() {
    const { t } = useTranslation();

    return (
        <>
            {/* First section: Page introduction */}
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

            {/* Second section: Newsletter list (empty for now) */}
            <section className={"px-6 py-12"}>
                <div className={"grid gap-6 md:grid-cols-2 lg:max-w-[1000px] mx-auto"}>
                    {newsletters.map((newsletter) => {
                        const item = t.newsletterPage.items[newsletter.id];
                        
                        return (
                            <NewsletterCard
                                key={newsletter.id}
                                title={item.title}
                                date={item.date}
                                description={item.description}
                                link={newsletter.link}
                            />
                        );
                    })}
                </div>
            </section>

        </>
    );
}

export default NewsletterArchive;