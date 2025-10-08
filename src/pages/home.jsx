import NavbarComponent from "../components/layouts/navbar.jsx";
import TypographyComponent from "../components/commons/typography.jsx";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import ButtonComponent from "../components/commons/button.jsx";
import GridFlowCard from "../components/commons/grid-flow-card.jsx";
import NoiseCard from "../components/commons/noise-card.jsx";
import en from "../locales/en.js";
import { features } from "../utils/features.ts";
import { liveEvents } from "../utils/live-events.ts";
import NewsletterComponent from "../components/sections/newsletter.jsx";

function HomePage () {
    const [phase, setPhase] = useState(0); // 0 = first anim, 1 = second anim

    return (
        <>
            <NavbarComponent />
            <section className={"bg-[url(./assets/img/mb-yellow.png)] lg:bg-[url(./assets/img/yellow-swiggly-bg.png)] bg-no-repeat bg-bottom h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"}>
                <div className={"gird justify-items-center content-center"}>
                    <div className={"px-6 lg:w-[758px]"}>
                        <p className={"uppercase leading-5 tracking-normal text-[16px] lg:text-[14px]"}>{en.firstSection.reactNnc}</p>
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
                                    sequence={[en.firstSection.learnShareConnect.learnShareConnect2.toString()]}
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
                    <TypographyComponent as={"h6"} variant={"h6"} className={"uppercase text-accent! text-base/5 font-normal"}>{en.secondSection.whyRnn}</TypographyComponent>
                    <TypographyComponent as={"h3"} variant={"h3"} className={"font-semibold leading-0 tracking-normal"}>
                        {en.secondSection.chosenByDevs}
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
                            {en.secondSection.readyToBuildRna.title}
                        </TypographyComponent>
                        <TypographyComponent className={"font-normal text-[15px]/7! text-left"}>
                            {en.secondSection.readyToBuildRna.description}
                        </TypographyComponent>
                    </div>
                    <div>
                        <ButtonComponent variant={"primary"} className={"font-normal! flex mx-auto text-xs/4 text-nowrap lg:h-fit lg:py-3.5 lg:px-[23px] lg:text-[18px] lg:font-medium!"}>{en.joinCommunity}</ButtonComponent>
                    </div>
                </div>
            </section>

            {/* Fourth section */}
            <section className={"bg-primary py-12 px-6 lg:px-[165px] lg:pt-[100px] lg:pb-[39px]"}>
                <div className={"px-6 space-y-6 pb-6"}>
                    <TypographyComponent as={"h4"} className={"text-h4! text-center font-[600]! leading-none tracking-[-1.2px]! text-secondary lg:text-h2/12!"}>{en.fourthSection.upComingEvents.title}</TypographyComponent>
                    <TypographyComponent as={"p"} variant={"p"} className={"text-secondary text-[15px]/8! tracking-[-0.2px] text-center lg:text-p/8!"}>{en.fourthSection.upComingEvents.description.description2} <br className={"hidden lg:block"}/> {en.fourthSection.upComingEvents.description.description3}</TypographyComponent>
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
                    <ButtonComponent variant={"accent"} className={"lg:w-[206px] lg:h-[50px]"}>{en.viewCalendar}</ButtonComponent>
                    <ButtonComponent variant={"accent"} className={"lg:hidden"}>{en.registerNext}</ButtonComponent>
                </div>
            </section>

            <NewsletterComponent />
        </>
    )
}

export default HomePage;