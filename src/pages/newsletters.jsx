import TypographyComponent from "../components/commons/typography.jsx";
import NewsletterCard from "../components/commons/newsletter-card.jsx";


const newsletters = [
    {
        id: 1,
        title: "From the React Native Nigeria Community",
        description: "Community updates, events, and announcements for the month.",
        date: "October 03 2025",
        link: "https://reactnativenigeria.substack.com/p/from-the-react-native-nigeria-community-300"
    },
    {
        id: 2,
        title: "October Recap from React Native Nigeria Community",
        description: "Insights and highlights for the month of October from the React Native Nigeria community.",
        date: "November 03 2025",
        link: "https://reactnativenigeria.substack.com/p/october-recap-from-react-native-nigeria"
    },
    {
        id: 3,
        title: "November in React Native Nigeria",
        description: "Updates, tips and tricks from the React Native Nigeria community.",
        date: "December 01 2025",
        link: "https://reactnativenigeria.substack.com/p/november-in-react-native-nigeria"
    },
     {
        id: 4,
        title: "2025 Year-In-Review: It's a Wrap!!",
        description: "Read on the year reflection, more updates and tech events to look forward to.",
        date: "December 22 2025",
        link: "https://reactnativenigeria.substack.com/p/november-in-react-native-nigeria"
    }
];

function NewsletterArchive() {
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
                        Newsletter Archive
                    </TypographyComponent>
                

                    <TypographyComponent
                        as={"p"}
                        variant={"p"}
                        className={"mt-4 text-secondary lg:text-white"}
                    >
                        Read past React Native Nigeria newsletters and community updates.
                    </TypographyComponent>
                </div>
            </section>

            {/* Second section: Newsletter list (empty for now) */}
            <section className={"px-6 py-12"}>
                <div className={"grid gap-6 md:grid-cols-2 lg:max-w-[1000px] mx-auto"}>
                    {newsletters.map((newsletter) => (
                        <NewsletterCard
                        key={newsletter.id}
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
}

export default NewsletterArchive;