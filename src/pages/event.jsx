import NavbarComponent from "../components/layouts/navbar.jsx";
import NewsletterComponent from "../components/sections/newsletter.jsx";
import FooterComponent from "../components/layouts/footer.jsx";
import en from "../locales/en.js";
import {TypeAnimation} from "react-type-animation";
import TwitterSVG from "../assets/svg/twitter.svg";
import ReactSmPNG from "../assets/img/react-sm.png";
import FisayoPNG from "../assets/img/fisayo.png";
import NaomiPNG from "../assets/img/naomi.png";
import TypographyComponent from "../components/commons/typography.jsx";
import CalendaSVG from "../assets/svg/calendar.svg";
import ClockSVG from "../assets/svg/clock.svg";
import MarkerSVG from "../assets/svg/marker.svg";
import ButtonComponent from "../components/commons/button.jsx";
import RPNG from "../assets/img/rrr.png";


function Events() {
    return (
        <>
            <NavbarComponent />

            {/* First section */}
            <section className={"lg:bg-bg1 bg-[url(./assets/img/mb-blue.png)] lg:bg-[url(./assets/img/lg-bg-screen.png)] bg-no-repeat bg-bottom h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"}>
                <div className={"gird justify-items-center content-center"}>
                    <div className={"px-6 lg:w-[758px] text-secondary lg:text-primary"}>
                        <p className="font-semibold lg:leading[60px] lg:font-medium text-[40px] tracking-[-0.125rem] md:text-h1">
                            <TypeAnimation
                                key="second"
                                sequence={["React Native Community Events"]}
                                speed={50}
                                repeat={1}
                                cursor={false}
                                className={""}
                                preRenderFirstString={false}
                            />
                        </p>
                        <p className={"uppercase leading-5 tracking-normal text-[16px] lg:text-[14px]"}>Learn, connect, and grow with our community.</p>
                    </div>
                </div>
            </section>

            <section className={"px-6 py-12 space-y-6"}>
                <div className={"lg:flex lg:justify-center lg:gap-[55px]"}>
                    {/*<div className={"bg-black flex justify-center rounded-lg bg-[url(./assets/img/react-llg)] bg-cover h-[342px] lg:w-[498px] lg:h-[498px]"}>*/}
                    {/*    <div className={"text-center"}>*/}
                    {/*        <div className={"flex items-center py-6"}>*/}
                    {/*            <img src={ReactSmPNG} alt={"react-logo"} />*/}
                    {/*            <p className={"text-primary font-bold leading-none tracking-normal"}>React Native Nigeria</p>*/}
                    {/*        </div>*/}
                    {/*        <TypographyComponent as={"p"} variant={"p"} className={"text-primary leading-[1.2]"}>React Native Nigeria <br /> Abuja Meetup 2025</TypographyComponent>*/}
                    {/*        <div>*/}
                    {/*            <div className={"text-primary rounded-full text-[7.9px] w-fit px-1 flex items-center border-primary border-[0.39px]"}>*/}
                    {/*                <img src={TwitterSVG} />*/}
                    {/*                <p>@ReactNativeNG</p>*/}
                    {/*            </div>*/}
                    {/*            <div></div>*/}
                    {/*        </div>*/}
                    {/*        <div className={"space-y-2.5"}>*/}
                    {/*            <p className={"text-primary text-xs font-bold leading-[1.3]"}>Meet the Host</p>*/}
                    {/*            <div className={"flex justify-center leading-loose gap-[5px]"}>*/}
                    {/*                <img src={FisayoPNG} alt={""} />*/}
                    {/*                <img src={NaomiPNG} alt={""}/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <img src={RPNG} alt={""} className={"h-[342px] lg:w-[498px] lg:h-[498px]"} />
                    <div className={"space-y-6 lg:space-y-4 lg:w-[650px] lg:place-self-center"}>
                        <TypographyComponent as={"h4"} variant={"h4"} className={"font-medium! tracking-[-1.2px]! leading-none! text-secondary py-6 lg:py-0 lg:text-h2! lg:leading-12! lg:tracking-[-1px]!"}>React Native Nigeria Abuja Meetup</TypographyComponent>
                        <div className={"space-y-2.5"}>
                            <div className={"flex items-center gap-[5px]"}>
                                <img src={CalendaSVG} alt={"calendar-icon"} className={"h-6 w-6"} />
                                <TypographyComponent as={"h6"} variant={"h6"} className={"text-secondary leading-5! font-normal! lg:text-p! lg:leading-7!"}>Saturday 20th September 2025</TypographyComponent>
                            </div>
                            <div className={"flex items-center gap-[5px]"}>
                                <img src={ClockSVG} alt={"clock-icon"} className={"h-6 w-6"} />
                                <TypographyComponent as={"h6"} variant={"h6"} className={"text-secondary leading-5! font-normal! lg:text-p! lg:leading-7!"}>11.00AM</TypographyComponent>
                            </div>
                            <div className={"flex items-center gap-[5px]"}>
                                <img src={MarkerSVG} alt={"marker-icon"} className={"h-6 w-6"} />
                                <TypographyComponent as={"h6"} variant={"h6"} className={"text-secondary leading-5! font-normal! lg:text-p! lg:leading-7!"}>The bunker, 3 Atbara Street, off Cairo Street. Ademola Adetokunbo</TypographyComponent>
                            </div>
                        </div>
                        <TypographyComponent as={"h6"} variant={"h6"} className={"font-normal! leading-5! tracking-normal text-secondary lg:text-p! lg:leading-7!"}>Collaborate, learn, and connect with React Native developers in Nigeria. 🚀 Talks, hands-on sessions & networking await!</TypographyComponent>
                        <ButtonComponent variant={"primary"}>Register</ButtonComponent>
                    </div>
                </div>

                <div className={"lg:flex lg:justify-center lg:mx-[125px]"}>
                    <div className={"py-6"}>
                        <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3!"}>Upcoming Events</TypographyComponent>

                        <div className={"py-6 lg:flex lg:justify-center space-y-6 lg:gap-[30px]"}>
                            <div className={"bg-primary border-[1px] px-7 py-[34px] h-[309px] border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>Build with React Native</TypographyComponent>

                                <div className={"py-6 text-secondary space-y-2.5"}>
                                    <div className={"flex gap-2"}>
                                        <img src={CalendaSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Friday 3rd October 2020</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={ClockSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>6:00PM</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={MarkerSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Manchester</p>
                                    </div>

                                    <ButtonComponent className={"mt-6 pb-2.5"}>View Details</ButtonComponent>
                                </div>
                            </div>

                            <div className={"bg-primary border-[1px] px-7 py-[34px] h-[309px] border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>Build with React Native</TypographyComponent>

                                <div className={"py-6 text-secondary space-y-2.5"}>
                                    <div className={"flex gap-2"}>
                                        <img src={CalendaSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Friday 3rd October 2020</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={ClockSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>6:00PM</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={MarkerSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Manchester</p>
                                    </div>

                                    <ButtonComponent className={"mt-6 pb-2.5"}>View Details</ButtonComponent>
                                </div>
                            </div>

                            <div className={"bg-primary border-[1px] px-7 py-[34px] h-[309px] border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>Build with React Native</TypographyComponent>

                                <div className={"py-6 text-secondary space-y-2.5"}>
                                    <div className={"flex gap-2"}>
                                        <img src={CalendaSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Friday 3rd October 2020</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={ClockSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>6:00PM</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={MarkerSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Manchester</p>
                                    </div>

                                    <ButtonComponent className={"mt-6 pb-2.5"}>View Details</ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"lg:flex lg:justify-center lg:mx-[125px]"}>
                    <div className={"py-6"}>
                        <TypographyComponent as={"h3"} variant={"h3"} className={"text-mh3!"}>Past Highlights</TypographyComponent>

                        <div className={"py-6 lg:flex lg:justify-center space-y-6 lg:gap-[30px]"}>
                            <div className={"bg-primary border-[1px] px-7 pt-[30px] pb-2.5 border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>Starting a React Native Project in 2020</TypographyComponent>

                                <div className={"pt-6 text-secondary space-y-4"}>
                                    <div className={"flex gap-2"}>
                                        <img src={CalendaSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>3rd October 2020</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={ClockSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>10.00AM</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={MarkerSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Online</p>
                                    </div>

                                    <ButtonComponent className={"mt-[7px]"}>View Details</ButtonComponent>
                                </div>
                            </div>

                            <div className={"bg-primary border-[1px] px-7 pt-[30px] pb-2.5 border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>After Create React App, What's Next?</TypographyComponent>

                                <div className={"pt-6 text-secondary space-y-4"}>
                                    <div className={"flex gap-2"}>
                                        <img src={CalendaSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>5th November 2020</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={ClockSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>2:00PM</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={MarkerSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Online</p>
                                    </div>

                                    <ButtonComponent className={"mt-[7px]"}>View Details</ButtonComponent>
                                </div>
                            </div>

                            <div className={"bg-primary border-[1px] px-7 pt-[30px] pb-2.5 border-black/25 rounded-[10px] lg:w-[349px]"}>
                                <TypographyComponent as={"h4"} variant={"h4"} className={"tracking-[-0.8px] leading-none font-normal!"}>React Native Community Akure</TypographyComponent>

                                <div className={"pt-6 text-secondary space-y-4"}>
                                    <div className={"flex gap-2"}>
                                        <img src={CalendaSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>18th December 2021</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={ClockSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>9:00AM</p>
                                    </div>
                                    <div className={"flex gap-2"}>
                                        <img src={MarkerSVG} alt={""} className={"h-6 w-6"} />
                                        <p className={"text-p leading-7 tracking-normal font-light"}>Akure</p>
                                    </div>

                                    <ButtonComponent className={"mt-[7px]"}>View Details</ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsletterComponent />
            <FooterComponent />
        </>
    );
}

export default Events;