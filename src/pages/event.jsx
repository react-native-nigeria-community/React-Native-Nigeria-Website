import en from "../locales/en.js";
import {TypeAnimation} from "react-type-animation";
import ReactSmPNG from "../assets/img/react-sm.png";
import Host1PNG from "../assets/img/host1.png";
import Host2PNG from "../assets/img/host2.png";
import TypographyComponent from "../components/commons/typography.jsx";
import ButtonComponent from "../components/commons/button.jsx";
//import {firstEventList} from "../../utils/first-event-list.jsx";
import DefaultList1 from "../components/commons/default-list1.jsx";
//import {secondEventList} from "../../utils/second-event-list.jsx";
import DefaultList2 from "../components/commons/default-list2.jsx";
//import {thirdEventList} from "../../utils/third-event-list.jsx";
import {fourthEventList} from "../../utils/fourth-event-list.jsx";
import PastEventHighLights from "../components/commons/past-events.jsx";


function Events() {
    return (
        <>
            {/* First section */}
            <section className={"lg:bg-bg1 bg-[url(./assets/img/mb-blue.png)] lg:bg-[url(./assets/img/lg-bg-screen.png)] bg-no-repeat bg-bottom bg-contain h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"}>
                <div className={"gird justify-items-center content-center"}>
                    <div className={"px-6 space-y-3 lg:w-[758px] text-secondary lg:text-primary"}>
                        <p className="font-semibold leading-none lg:leading[60px] lg:font-medium text-[40px] tracking-[-0.125rem] md:text-h1">
                            {/* Mobile view */}
                            <span className={"lg:hidden"}>{en.eventPage.firstSection.title1}</span>

                            {/* Desktop view */}
                            <TypeAnimation
                                key="second"
                                sequence={["React Native Community Events"]}
                                speed={50}
                                repeat={1}
                                cursor={false}
                                className={"hidden lg:block"}
                                preRenderFirstString={false}
                            />
                        </p>
                        <p className={"leading-5 text-secondary lg:text-primary tracking-normal text-[16px] lg:text-[14px]"}>{en.eventPage.firstSection.slogan}</p>
                    </div>
                </div>
            </section>

            {/* Second section */}
            <section className={"px-6 py-12 space-y-6"}>
               {/* <div className={"lg:flex lg:justify-center lg:gap-[55px]"}>
                 <div className={"bg-black flex justify-center rounded-lg bg-[url(./assets/img/react-lg.png)]! bg-contain bg-no-repeat bg-center h-[342px] lg:w-[498px] lg:h-[498px]"}>
                        <div className={"text-center grid place-items-center pb-10"}>
                            <div className={"flex items-center py-6"}>
                                <img src={ReactSmPNG} alt={"react-logo"} />
                                <p className={"text-primary font-normal leading-none tracking-normal"}>{en.navLogoText}</p>
                            </div>
                            <TypographyComponent as={"h4"} variant={"h4"} className={"text-primary leading-[1.2]"}>{en.navLogoText} <br /> Abuja Meetup 2025</TypographyComponent>
                            <div className={"my-6 flex gap-2 justify-center"}>
                                {firstEventList.map((list, index) => (
                                    <DefaultList1
                                    key={index}
                                    image={list.image}
                                    text={list.text}
                                    />
                                ))}
                            </div>
                            <div className={"space-y-2.5"}>
                                <p className={"text-primary text-sm font-medium leading-[1.3]"}>{en.eventPage.secondSection.hostText}</p>
                                <div className={"flex justify-center leading-loose gap-[5px]"}>
                                    <img src={Host1PNG} alt={""} />
                                    <img src={Host2PNG} alt={""}/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={"space-y-6 lg:space-y-4 lg:w-[650px] lg:place-self-center"}>
                        <TypographyComponent as={"h4"} variant={"h4"} className={"font-medium! tracking-[-1.2px]! leading-none! text-secondary pt-6 lg:py-0 lg:text-h2! lg:leading-12! lg:tracking-[-1px]!"}>React Native Nigeria Abuja Meetup</TypographyComponent>
                        <div className={"space-y-2.5"}>
                            {secondEventList.map((list, index) => (
                                <DefaultList2
                                    key={index}
                                    image={list.image}
                                    description={list.text}
                                    pClassName={"text-[16px] text-secondary leading-5! font-normal! lg:text-p! lg:leading-7!"}
                                />
                            ))}
                        </div>
                        <TypographyComponent as={"h6"} variant={"h6"} className={"font-normal! leading-5! tracking-normal text-secondary lg:text-p! lg:leading-7!"}>Collaborate, learn, and connect with React Native developers in Nigeria. 🚀 Talks, hands-on sessions & networking await!</TypographyComponent>
                        <ButtonComponent variant={"primary"}>Register</ButtonComponent>
                    </div>
                </div> */}

               {/* <div className={"lg:flex lg:justify-stretch lg:mx-[125px]"}>
                    <div className={"py-6"}>
                        <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3!"}>{en.eventPage.thirdSection.title}</TypographyComponent>

                        <div className={"py-6 lg:flex lg:justify-center space-y-6 lg:gap-[30px]"}>
                            <div className={"bg-primary border-[1px] px-7 py-[34px] h-[309px] border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>{en.navLogoText}</TypographyComponent>

                                <div className={"py-6 text-secondary space-y-2.5"}>
                                    {thirdEventList.map((list, index) => (
                                        <DefaultList2
                                        key={index}
                                        image={list.image}
                                        description={list.text}
                                        pClassName={"text-p leading-7 tracking-normal font-light"}
                                        />
                                    ))}

                                    <ButtonComponent className={"mt-6 pb-2.5"}>View Details</ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className={"lg:flex lg:justify-center lg:mx-[125px]"}>
                    <div className={"py-6"}>
                        <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3!"}>{en.eventPage.fourthSection.title}</TypographyComponent>

                        <div className={"py-6 grid md:grid-cols-3 gap-6 justify-items-stretch items-stretch"}>
                            {fourthEventList.map((list) => (
                                <PastEventHighLights
                                key={list.id}
                                id={list.id}
                                title={list.title}
                                date={list.date}
                                time={list.time}
                                location={list.location}
                                
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Events;