import { useEffect, useState } from "react";
import TypographyComponent from "../components/commons/typography.jsx";
import { useTranslation } from "../context/useTranslation";
import NewsletterCard from "../components/commons/newsletter-card.jsx";

interface Newsletter {
    id: string;
    title: string;
    description: string;
    date: string;
    link: string;
}

const NewsletterArchive: React.FC = () => {
    const { t } = useTranslation();
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);

    useEffect(() => {
        const fetchNewsletters = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/newsletters`);
                const result = await response.json();
                setNewsletters(Array.isArray(result.data) ? result.data : []);
            } catch (error) {
                console.error("Failed to fetch newsletters:", error);
                setNewsletters([]);
            }
        };

        fetchNewsletters();
    }, []);

    const newsletters2026 = newsletters.filter((newsletter) => {
        return new Date(newsletter.date).getUTCFullYear() === 2026;
    });

    const newsletters2025 = newsletters.filter((newsletter) => {
        return new Date(newsletter.date).getUTCFullYear() === 2025;
    });

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

            {/* Second section: Newsletter list */}
            <section className={"px-6 py-12"}>
                <div className={"space-y-12 lg:max-w-[1000px] mx-auto"}>
                    <div className={"space-y-6"}>
                        <TypographyComponent as={"h2"} variant={"h3"} className={"text-bg1"}>
                            2026
                        </TypographyComponent>

                        <div className={"grid gap-6 md:grid-cols-2"}>
                            {newsletters2026.map((newsletter) => {
                                return (
                                    <NewsletterCard
                                        key={newsletter.id}
                                        title={newsletter.title}
                                        date={newsletter.date}
                                        description={newsletter.description}
                                        link={newsletter.link}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className={"space-y-6"}>
                        <TypographyComponent as={"h2"} variant={"h3"} className={"text-bg1"}>
                            2025
                        </TypographyComponent>

                        <div className={"grid gap-6 md:grid-cols-2"}>
                            {newsletters2025.map((newsletter) => {
                                return (
                                    <NewsletterCard
                                        key={newsletter.id}
                                        title={newsletter.title}
                                        date={newsletter.date}
                                        description={newsletter.description}
                                        link={newsletter.link}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default NewsletterArchive;