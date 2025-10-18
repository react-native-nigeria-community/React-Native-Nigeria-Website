import TypographyComponent from "../components/commons/typography.jsx";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import ButtonComponent from "../components/commons/button.jsx";
import GridFlowCard from "../components/commons/grid-flow-card.jsx";
import FeaturedCard from "../components/commons/featured-card.jsx";
import en from "../locales/en.js";
import {getFeatures} from "../../utils/features.jsx";
import {getLiveEvents} from "../../utils/live-events.jsx";
import {getWriteUps} from "../../utils/write-for-us.jsx";
import WriteForUsCard from "../components/sections/write-for-us.jsx";
import OpenSourceCard from "../components/sections/open-source.jsx";
import {getOpenSourceProjects} from "../../utils/open-source-projects.jsx";
import {getTopics} from "../../utils/topics.jsx";
import LiveTalkCard from "../components/commons/live-talk.jsx";

function HomePage () {
    const [phase, setPhase] = useState(0);
    
    return (
        <>
            {/* First section */}
            <section className={"lg:bg-bg1 bg-[url(./assets/img/mb-blue.png)] md:bg-[url(./assets/img/lg-bg-screen.png)] bg-no-repeat bg-bottom h-[366px] bg-contain lg:h-[655px] flex items-center justify-center text-center lg:w-full"}>
                <div className={"gird justify-items-center content-center"}>
                    <div className={"px-6 lg:w-[758px] text-secondary lg:text-primary"}>
                        <div className={"space-y-2.5"}>
                            <p className={"text-[16px] lg:text-[14px] text-secondary"}>
                                {/*  Mobile view  */}
                                <span className={"lg:hidden leading-5 tracking-normal"}>{en.firstSection.reactBrn}</span>
                                {/*  Desktop view  */}
                                <span className={"hidden uppercase font-normal text-primary tracking-[1.63px] leading-none lg:block"}>{en.firstSection.reactNnc}</span>
                            </p>
                            <p className="font-semibold text-[40px] text-secondary leading-none tracking-[-0.125rem] lg:hidden">{en.firstSection.learnShareConnect.learnShareConnect2}</p>
                        </div>
                        <p className="hidden font-semibold lg:leading[60px] lg:block lg:font-medium text-[40px] tracking-[-0.125rem] md:text-h1">
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

            {/* Second section */}
            <section className={"text-center py-6 lg:py-[112px] lg:bg-bg1"}>
                {/* First block */}
                <div className={"mb-8 gap-2.5 lg:w-[589px] lg:mx-auto lg:mb-[90px]"}>
                    <TypographyComponent as={"h6"} variant={"h6"} className={"uppercase text-accent! text-base/5 font-normal"}>{en.secondSection.whyRnn}</TypographyComponent>
                    <TypographyComponent as={"h3"} variant={"h3"} className={"font-semibold leading-0 tracking-normal text-bg1! lg:text-primary!"}>
                        {en.secondSection.chosenByDevs1} <span className={"lg:hidden"}>{en.secondSection.chosenByDevs2}</span>
                    </TypographyComponent>
                </div>

                {/* Second block */}
                <div className={"space-y-[30px] lg:flex lg:items-center lg:justify-center"}>
                    <div className={"mx-6 md:grid md:place-content-start md:place-items-start md:grid-cols-2 md:space-x-[50px] lg:space-y-[80px] lg:w-[960px]"}>
                        {getFeatures.map((feature, index) => (
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
                        <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3! font-normal! text-bg1! leading-[44px]! tracking-[-1.2px] lg:text-primary!"}>
                            {en.secondSection.readyToBuildRna.title}
                        </TypographyComponent>
                        <TypographyComponent className={"font-normal text-[15px]/7! tracking-normal! text-left text-bg1! lg:text-primary/70!"}>
                            {en.secondSection.readyToBuildRna.description}
                        </TypographyComponent>
                    </div>
                    <div>
                        <ButtonComponent variant={"primary"} className={"font-normal! flex mx-auto text-xs/4 text-nowrap lg:h-fit lg:py-3.5 lg:px-[23px] lg:text-[18px] lg:font-medium!"}>{en.joinCommunity}</ButtonComponent>
                    </div>
                </div>
            </section>

            {/* Third section */}
            <section className={"px-6 py-12 bg-[#F4F7FA]"}>
                <div className={"lg:w-[513px] space-y-6 text-center pb-8 lg:mx-auto"}>
                    <TypographyComponent as={"h3"} variant={"h3"} responsiveVariant={"h2"} className={"text-mh3! leading-none! tracking-[-1.2px]! text-secondary font-semibold! lg:text-h2/12! lg:font-medium!"}>{en.thirdSection.featuredTopics}</TypographyComponent>
                    <TypographyComponent as={"p"} variant={"p"} className={"leading-8! tracking-[-0.013em]! text-secondary!"}>
                        {/* Mobile view */}
                        <span className={"lg:hidden"}>{en.thirdSection.featuredTopicsDescription1}</span>
                        {/* Desktop view */}
                        <span className={"hidden lg:block"}>{en.thirdSection.featuredTopicsDescription2}</span>
                    </TypographyComponent>
                </div>

                <div className={"space-y-4 lg:mx-[155px] lg:flex lg:justify-center lg:space-x-10"}>
                    {getTopics.map((topic, index) => (
                        <FeaturedCard
                        key={index}
                        image={topic.image}
                        title={topic.title}
                        description={topic.description}
                        />
                    ))}
                </div>

                <div className={"text-center pt-4 lg:pt-12 lg:pb-[54px]"}>
                    <ButtonComponent variant={"primary"} className={"text-xs/4 tracking-normal font-normal py-1.5 px-9 lg:text-[18px]/0! lg:py-3.5 lg:px-[23px] lg:tracking-[-0.5px] lg:w-[157px] lg:h-[50px] rounded-lg!"}>Explore</ButtonComponent>
                </div>
            </section>

            {/* Fourth section */}
            <section className={"bg-secondary lg:bg-bg1 py-12 px-6 lg:px-[165px] lg:pt-[100px] lg:pb-[39px]"}>
                <div className={"px-6 space-y-6 pb-6"}>
                    <TypographyComponent as={"h3"} className={"text-mh3! text-center font-semibold! leading-none! tracking-[-1.2px]! text-primary lg:text-h2/12!"}>
                        {en.fourthSection.upComingEvents.title}
                    </TypographyComponent>
                    <TypographyComponent as={"p"} variant={"p"} className={"text-primary text-p/8! tracking-[-0.2px] text-center lg:text-p/8!"}>
                        {en.fourthSection.upComingEvents.description.description2} <br className={"hidden lg:block"}/> {en.fourthSection.upComingEvents.description.description3}
                    </TypographyComponent>
                </div>

                <div className={"space-y-6 lg:space-y-0 lg:flex lg:justify-center lg:mx-auto lg:space-x-[30px]"}>
                    {getLiveEvents.map((liveEvent, index) => (
                        <LiveTalkCard
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
                    <ButtonComponent variant={"primary"} className={"border-primary! border-2! lg:w-[206px] lg:h-[50px]"}>{en.viewCalendar}</ButtonComponent>
                </div>
            </section>

            {/* Fifth section */}
            <section className={"pt-12"}>
                <div className={"mb-8 gap-2.5 lg:w-[589px] lg:mx-auto lg:mb-[30px] text-center"}>
                    <TypographyComponent as={"h6"} variant={"h6"} className={"uppercase text-accent! text-base/5 font-normal"}>{en.fifthSection.reactNnc1}</TypographyComponent>
                    <TypographyComponent as={"h3"} variant={"h3"} className={"font-semibold! leading-none! tracking-[-1.2px]! text-mh3! text-secondary! lg:leading-12"}>
                        {en.fifthSection.exploreReactNative}
                    </TypographyComponent>
                </div>

                <div className={"px-6 pb-[40px] lg:flex lg:justify-center"}>
                    <div className={"md:grid md:grid-cols-2 md:space-x-[15px] lg:grid lg:grid-cols-3 lg:space-x-[30px]"}>
                        {getOpenSourceProjects.map((source, index) => (
                            <OpenSourceCard
                            key={index}
                            star={source.star}
                            fork={source.fork}
                            title={source.title}
                            description={source.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sixth section */}
            <section className={"bg-secondary px-6 pt-12 pb-[3.625rem] lg:bg-bg1"}>
                <div className={"mb-6 space-y-6 lg:w-[589px] lg:mx-auto lg:mb-[1.875rem] text-center"}>
                    <TypographyComponent as={"h3"} variant={"h3"} className={"text-primary text-mh3/none! tracking-[-0.075rem]! font-normal"}>{en.sixthSection.contributeCommunity.title}</TypographyComponent>
                    <TypographyComponent as={"p"} variant={"p"} className={"font-normal! text-primary leading-8 tracking-[-0.013rem] lg:tracking-[-0.013rem]! lg:leading-8"}>
                        {en.sixthSection.contributeCommunity.description}
                    </TypographyComponent>
                </div>

                <div className={"space-y-[1.875rem] lg:space-y-0 lg:flex lg:justify-center lg:gap-[1.875rem]"}>
                    {getWriteUps.map((writeUps, index) => (
                        <WriteForUsCard
                        key={index}
                        title={writeUps.title}
                        description={writeUps.description}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default HomePage;