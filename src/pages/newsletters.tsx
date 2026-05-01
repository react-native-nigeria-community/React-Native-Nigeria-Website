import { useEffect, useState } from "react";
import TypographyComponent from "../components/commons/typography.jsx";
import { useTranslation } from "../context/useTranslation";
import NewsletterCard from "../components/commons/newsletter-card.jsx";

// Define the Newsletter type
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

    // Group newsletters by year dynamically
    const newslettersByYear = newsletters.reduce((acc, newsletter) => {
        const year = new Date(newsletter.date).getUTCFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(newsletter);
        return acc;
    }, {} as Record<number, Newsletter[]>);

    // Get years sorted in descending order (newest first)
    const years = Object.keys(newslettersByYear)
        .map(Number)
        .sort((a, b) => b - a);

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

            {/* Second section: Newsletter list - dynamically grouped by year */}
            <section className={"px-6 py-12"}>
                <div className={"space-y-12 lg:max-w-[1000px] mx-auto"}>
                    {years.map((year) => (
                        <div key={year} className={"space-y-6"}>
                            <TypographyComponent as={"h2"} variant={"h3"} className={"text-bg1"}>
                                {year}
                            </TypographyComponent>

                            <div className={"grid gap-6 md:grid-cols-2"}>
                                {newslettersByYear[year].map((newsletter) => (
                                    <NewsletterCard
                                        key={newsletter.id}
                                        title={newsletter.title}
                                        date={newsletter.date}
                                        description={newsletter.description}
                                        link={newsletter.link}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default NewsletterArchive;