import NavbarComponent from "../components/layouts/navbar.jsx";
import TypographyComponent from "../components/commons/typography.jsx";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import ButtonComponent from "../components/commons/button.jsx";
import CommunitySVG from "../assets/svg/community.svg";
import CalendarSVG from "../assets/svg/calendar.svg";
import ReactSVG from "../assets/svg/react-b.svg";
import LightBulbSVG from "../assets/svg/light-bulb.svg";

function HomePage () {
    const [phase, setPhase] = useState(0); // 0 = first anim, 1 = second anim

    return (
        <>
            <NavbarComponent />
            <section className={"mb-yellow-bg lg:yellow-bg h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"}>
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
                        <div className={"px-6 grid grid-cols-4 grid-rows-3 space-x-5 lg:px-0 lg:w-[455px] lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:grid-rows-3 text-left"}>
                            <div className={"w-fit row-span-1 lg:row-span-4"}>
                                <div className={" rounded-[15px] p-4 lg:p-[22px] bg-secondary/10"}>
                                    <img src={CommunitySVG} alt={"Community Logo"} className={""} />
                                </div>
                            </div>
                            <div  className={"col-span-3 lg:col-span-3 lg:text-nowrap lg:row-span-1 lg:h-fit"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"font-semibold! tracking-normal leading-[100%]!"}>Community talks & pro tips</TypographyComponent>
                            </div>
                            <div  className={"mt-3 col-span-4 row-span-2 lg:col-span-3 lg:row-span-3 h-full"}>
                                <p className={"text-base/7 font-[400] tracking-normal text-primary/70"}>Learn from real experiences, expert tips, and smarter ways to build with React Native.</p>
                            </div>
                        </div>

                        <div className={"px-6 grid grid-cols-4 grid-rows-3 space-x-5 lg:px-0 lg:w-[455px] lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:grid-rows-3 text-left"}>
                            <div className={"w-fit row-span-1 lg:row-span-4"}>
                                <div className={" rounded-[15px] p-4 lg:p-[22px] bg-secondary/10"}>
                                    <img src={ReactSVG} alt={"Community Logo"} className={""} />
                                </div>
                            </div>
                            <div  className={"col-span-3 lg:col-span-3 lg:text-nowrap lg:row-span-1 lg:h-fit"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"font-semibold! tracking-normal leading-[100%]!"}>Real-world project showcases</TypographyComponent>
                            </div>
                            <div  className={"mt-3 col-span-4 row-span-2 lg:col-span-3 lg:row-span-3 h-full"}>
                                <p className={"text-base/7 font-[400] tracking-normal text-primary/70"}>Explore real apps built by our community, with insights into how they were made.</p>
                            </div>
                        </div>

                        <div className={"px-6 grid grid-cols-4 grid-rows-3 space-x-5 lg:px-0 lg:w-[455px] lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:grid-rows-3 text-left"}>
                            <div className={"w-fit row-span-1 lg:row-span-4"}>
                                <div className={" rounded-[15px] p-4 lg:p-[22px] bg-secondary/10"}>
                                    <img src={CommunitySVG} alt={"Community Logo"} className={""} />
                                </div>
                            </div>
                            <div  className={"col-span-3 lg:col-span-3 lg:text-nowrap lg:row-span-1 lg:h-fit"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"font-semibold! tracking-normal leading-[100%]!"}>Community events & meetups</TypographyComponent>
                            </div>
                            <div  className={"mt-3 col-span-4 row-span-2 lg:col-span-3 lg:row-span-3 h-full"}>
                                <p className={"text-base/7 font-[400] tracking-normal text-primary/70"}>Connect, learn, and grow through our events, talks, and local meetups. Whether online or offline. </p>
                            </div>
                        </div>

                        <div className={"px-6 grid grid-cols-4 grid-rows-3 space-x-5 lg:px-0 lg:w-[455px] lg:grid lg:grid-flow-row-dense lg:grid-cols-4 lg:grid-rows-3 text-left"}>
                            <div className={"w-fit row-span-1 lg:row-span-4"}>
                                <div className={" rounded-[15px] p-4 lg:p-[22px] bg-secondary/10"}>
                                    <img src={LightBulbSVG} alt={"Community Logo"} className={""} />
                                </div>
                            </div>
                            <div  className={"col-span-3 lg:col-span-3 lg:text-nowrap lg:row-span-1 lg:h-fit"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"font-semibold! tracking-normal leading-[100%]!"}>Performance tips that go deep</TypographyComponent>
                            </div>
                            <div  className={"mt-3 col-span-4 row-span-2 lg:col-span-3 lg:row-span-3 h-full"}>
                                <p className={"text-base/7 font-[400] tracking-normal text-primary/70"}>Discover advanced techniques to make your React Native apps faster and smoother.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third block */}
                <div className={"px-6 text-left lg:flex lg:items-center lg:mx-[183px] lg:justify-between"}>
                    <div className={"pb-8 space-y-6 lg:w-[589px]"}>
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
        </>
    )
}

export default HomePage;