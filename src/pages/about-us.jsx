import NavbarComponent from "../components/layouts/navbar.jsx";
import TypographyComponent from "../components/commons/typography.jsx";
import FemaleAvatarPNG from "../assets/img/female-avatar.png";
import AccordionComponent from "../components/commons/accordion.jsx";
import NewsletterComponent from "../components/sections/newsletter.jsx";
import FooterComponent from "../components/layouts/footer.jsx";
import en from "../locales/en.js";


function AboutUs() {

    const accordionItems = [
        {
            title: "Who can join the community?",
            content: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
        },
        {
            title: "Is membership free?",
            content: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
        },
        {
            title: " Do I need prior experience with React Native?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
        {
            title: "How do I get updates on events and activities?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
        {
            title: "Can I showcase my React Native projects?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
    ];


    return (
        <>
            <NavbarComponent />

            {/* First section */}
            <section className={"py-12 px-6 lg:bg-bg1"}>
                <div className={"text-center lg:text-left lg:flex lg:justify-center lg:mx-auto"}>
                    <div className={"lg:grid lg:grid-cols-2 lg:grid-rows-2"}>
                        <p className={"text-[40px] leading-none tracking-[-2px] font-medium lg:w-[621px] lg:content-end lg:pb-6 lg:text-white"}>{en.aboutPage.heroText1}</p>
                        <img src={FemaleAvatarPNG} alt={"avatar-icon"} className={"h-[328px] lg:h-[636px] mx-auto lg:col-span-1 lg:row-span-2 lg:pl-[104px]"} />
                        <TypographyComponent as={"p"} variant={"p"} className={"font-normal leading-8 tracking-[0.12px] lg:w-[621px] lg:text-white"}>
                            {en.aboutPage.heroText2}
                        </TypographyComponent>
                    </div>
                </div>
            </section>

            {/* Second section */}
            <section className={"bg-bg2 silver-wave lg:py-[120px] lg:px-[153px]"}>
                <div className={"px-6 pt-12 pb-4 text-center"}>
                    <TypographyComponent as={"p"} variant={"p"} className={"leading-8 tracking-[-0.21px] font-normal text-secondary lg:text-h3 lg:leading-12 lg:tracking-normal"}>
                        {en.aboutPage.missionStatement}
                    </TypographyComponent>
                </div>
            </section>

            {/* Third section */}
            <section className={"pt-12 lg:pt-[100px]"}>
                <div className={"text-center space-y-2.5 pb-6 lg:w-[521px] lg:mx-auto"}>
                    <TypographyComponent as={"h6"} variant={"h6"} className={"text-accent font-normal lg:tracking-[1.63px]"}>{en.aboutPage.faq}</TypographyComponent>
                    <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3! leading-none! tracking-normal! lg:text-h2! lg:tracking-[-1.2px]! lg:font-normal!"}>{en.aboutPage.faqTitle}</TypographyComponent>
                </div>
                <div className={"lg:pt-[115px]"}>
                    <AccordionComponent items={accordionItems} allowMultiple={false} />
                </div>
            </section>

            <NewsletterComponent />
            <FooterComponent />
        </>
    );
}

export default AboutUs;