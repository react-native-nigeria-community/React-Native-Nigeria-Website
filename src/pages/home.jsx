import NavbarComponent from "../components/layouts/navbar.jsx";
import TypographyComponent from "../components/commons/typography.jsx";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import ButtonComponent from "../components/commons/button.jsx";
import CommunitySVG from "../assets/svg/community.svg";
import CalendarSVG from "../assets/svg/calendar.svg";
import ReactSVG from "../assets/svg/react-b.svg";
import LightBulbSVG from "../assets/svg/light-bulb.svg";
import GridFlowCard from "../components/commons/grid-flow-card.jsx";
import Topic1PNG from "../assets/img/topics/topic-1.png";
import Topic2PNG from "../assets/img/topics/topic-2.png";
import Topic3PNG from "../assets/img/topics/topic-3.png";
import FeaturedCard from "../components/commons/featured-card.jsx";
import NoiseCard from "../components/commons/noise-card.jsx";

function HomePage () {
    const [phase, setPhase] = useState(0); // 0 = first anim, 1 = second anim

    const features = [
        {
            icon: CommunitySVG,
            title: "Community talks & pro tips",
            description: "Learn from real experiences, expert tips, and smarter ways to build with React Native."
        },
        {
            icon: ReactSVG,
            title: "Real-world project showcases",
            description: "Explore real apps built by our community, with insights into how they were made."
        },
        {
            icon: CalendarSVG,
            title: "Community events & meetups",
            description: "Connect, learn, and grow through our events, talks, and local meetups. Whether online or offline."
        },
        {
            icon: LightBulbSVG,
            title: "Performance tips that go deep",
            description: "Discover advanced techniques to make your React Native apps faster and smoother."
        }
    ];

    const topics = [
        {
            image: Topic1PNG,
            title: "Medium",
            description: "Getting started with Tailwind:  Tailwind to create a button",
        },
        {
            image: Topic2PNG,
            title: "Medium",
            description: "I know Tech is the Future but how do i get started",
        },
        {
            image: Topic3PNG,
            title: "Medium",
            description: "Using TypeScript effectively for cleaner and scalable apps.",
        },
    ]

    const liveEvents = [
        {
            label: 'LIVE TALK',
            title: 'Starting a Reactnative project 2020',
            date: 'August 25, 2020',
            time: '10:00 AM',
            buttonText: 'Watch Live Talk'
        },
        {
            label: 'MEETUP',
            title: 'React Native Abuja Meetup',
            date: 'September 20, 2025',
            time: '10:30 AM',
            buttonText: 'RSVP'
        },
        {
            label: 'EVENT',
            title: 'Build with React Native',
            date: 'October 3rd, 2025',
            time: '06:00 PM',
            buttonText: 'Register'
        }
    ]

    return (
        <>
            <NavbarComponent />
            <section className={"bg-[url(./assets/img/mb-yellow.png)] lg:bg-[url(./assets/img/yellow-swiggly-bg.png)] bg-no-repeat bg-bottom h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"}>
                <div className={"gird justify-items-center content-center"}>
                    <div className={"px-6 lg:w-[758px]"}>
                        <p className={"uppercase leading-5 tracking-normal text-[16px] lg:text-[14px]"}>Build with react native</p>
                        <p className="font-semibold lg:leading[60px] lg:font-medium text-[40px] tracking-[-0.125rem] md:text-h1">
                            {phase === 0 ? (
                                <TypeAnimation
                                    key="first"
                                    sequence={[
                                        "Learn.",
                                        500,
                                        "Share.",
                                        500,
                                        "Connect.",
                                        500,
                                        // callback at end -> give a tiny delay so unmount is smooth
                                        () => {
                                            setTimeout(() => setPhase(1), 40);
                                        },
                                    ]}
                                    repeat={0}
                                    preRenderFirstString={false}
                                />
                            ) : (
                                <TypeAnimation
                                    key="second"
                                    sequence={["Learn. Share. Connect. Elevate your React Native journey."]}
                                    speed={50}
                                    repeat={1}
                                    cursor={false}
                                    className={""}
                                    preRenderFirstString={false}
                                />
                            )}
                        </p>
                    </div>
                </div>
            </section>
            <section className={"text-center py-6 lg:py-[112px]"}>
                {/* First block */}
                <div className={"mb-8 gap-2.5 lg:w-[589px] lg:mx-auto lg:mb-[90px]"}>
                    <TypographyComponent as={"h6"} variant={"h6"} className={"uppercase text-accent! text-base/5 font-normal"}>Why build with react native</TypographyComponent>
                    <TypographyComponent as={"h3"} variant={"h3"} className={"font-semibold leading-0 tracking-normal"}>
                        Chosen by developers who care about performance,
                    </TypographyComponent>
                </div>

                {/* Second block */}
                <div className={"space-y-[30px] lg:flex lg:items-center lg:justify-center"}>
                    <div className={"mx-6 lg:grid lg:place-content-start lg:place-items-start lg:grid-cols-2 lg:space-x-[50px] lg:space-y-[80px] lg:w-[960px]"}>
                        {features.map((feature, index) => (
                            <GridFlowCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Third block */}
                <div className={"px-6 text-left lg:flex lg:items-center lg:mx-[183px] lg:justify-between"}>
                    <div className={"pb-8 space-y-6 lg:w-[589px]!"}>
                        <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3! font-normal!"}>
                            Ready to build your next React Native app?
                        </TypographyComponent>
                        <TypographyComponent className={"font-normal text-[15px]/7! text-left"}>
                            Launch your next React Native project with us, gain insights, support, and tools from a vibrant developer community.
                        </TypographyComponent>
                    </div>
                    <div>
                        <ButtonComponent variant={"primary"} className={"font-normal! flex mx-auto text-xs/4 text-nowrap lg:h-fit lg:py-3.5 lg:px-[23px] lg:text-[18px] lg:font-medium!"}>Join Community</ButtonComponent>
                    </div>
                </div>
            </section>
            <section className={"px-6 py-12 bg-[#F4F7FA]"}>
                <div className={"w-[345px] lg:w-[513px] space-y-6 text-center pb-8 lg:mx-auto"}>
                    <TypographyComponent as={"h3"} variant={"h3"} responsiveVariant={"h2"} className={"text-mh3! leading-none! text-nowrap lg:text-h2/12! lg:font-medium!"}>Featured Topics/Insights</TypographyComponent>
                    <TypographyComponent as={"p"} variant={"p"} className={"leading-8 tracking-[-0.013em]"}>
                        Explore key lessons, tools, and techniques shared by the community.
                    </TypographyComponent>
                </div>

                <div className={"space-y-4 lg:mx-[155px] lg:flex lg:justify-center lg:space-x-10"}>
                    {topics.map((topic, index) => (
                        <FeaturedCard
                        key={index}
                        image={topic.image}
                        title={topic.title}
                        description={topic.description}
                        />
                    ))}
                </div>

                <div className={"hidden text-center lg:block lg:pt-12 lg:pb-[54px]"}>
                    <ButtonComponent variant={"primary"} className={"text-[18px]/0 py-3.5 px-[23px] tracking-[-0.5px] w-[157px] h-[50px] rounded-lg!"}>Explore</ButtonComponent>
                </div>
            </section>
            {/* Fourth section */}
            <section className={"bg-primary py-12 px-6 lg:px-[165px] lg:pt-[100px] lg:pb-[39px]"}>
                <div className={"px-6 space-y-6 pb-6"}>
                    <TypographyComponent as={"h4"} className={"text-h4! text-center font-[600]! leading-none tracking-[-1.2px]! text-secondary lg:text-h2/12!"}>Upcoming Community Events</TypographyComponent>
                    <TypographyComponent as={"p"} variant={"p"} className={"text-secondary text-[15px]/8! tracking-[-0.2px] text-center lg:text-p/8!"}>Stay updated on our monthly live sessions, hackathons, <br className={"hidden lg:block"}/> and IRL meetups</TypographyComponent>
                </div>

                <div className={"space-y-6 lg:space-y-0 lg:flex lg:mx-auto lg:space-x-[30px]"}>
                    {liveEvents.map((liveEvent, index) => (
                        <NoiseCard
                            key={index}
                            label={liveEvent.label}
                            title={liveEvent.title}
                            date={liveEvent.date}
                            time={liveEvent.time}
                            buttonText={liveEvent.buttonText}
                        />
                    ))}
                </div>

                <div className={"text-center flex justify-center gap-5 pt-[64px] text-[14px]! leading-[17px] font-medium"}>
                    <ButtonComponent variant={"accent"} className={"lg:w-[206px] lg:h-[50px]"}>View Calendar</ButtonComponent>
                    <ButtonComponent variant={"accent"} className={"lg:hidden"}>Register for Next</ButtonComponent>
                </div>
            </section>
        </>
    )
}

export default HomePage;