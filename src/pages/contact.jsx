import InputFieldComponent from "../components/commons/input-field.jsx";
import NavbarComponent from "../components/layouts/navbar.jsx";
import ButtonComponent from "../components/commons/button.jsx";
import {useState} from "react";
import CheckMarkSVG from "../assets/svg/check-mark.svg";
import MaleAvatarPNG from "../assets/img/male-avatar.png";
import TypographyComponent from "../components/commons/typography.jsx";
import NewsletterComponent from "../components/sections/newsletter.jsx";
import FooterComponent from "../components/layouts/footer.jsx";
import en from "../locales/en.js";


function Contact() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert(email);
        }
    };

    return (
        <>
            <NavbarComponent />
            <section className={"p-6 lg:bg-bg1"}>
                <div className={"text-left lg:flex lg:justify-center lg:mx-auto"}>
                    <div className={"lg:grid lg:grid-cols-4 lg:grid-rows-2"}>
                        <img src={MaleAvatarPNG} alt={"avatar-icon"} className={"h-[328px] lg:h-[636px] mx-auto lg:col-span-2 lg:row-span-3 lg:w-fit"} />
                        <p className={"text-[40px] leading-none tracking-[-2px] font-medium lg:w-[621px] lg:content-end lg:pb-6 lg:text-white"}>Contact us</p>
                        <TypographyComponent as={"h6"} variant={"h6"} className={"py-6 text-bg1 font-normal leading-[20px] lg:text-white lg:col-span-2"}>
                            Have questions or ideas? We’d love to hear from you.
                        </TypographyComponent>

                        <form onSubmit={handleSubmit} className={"lg:row-span-1 lg:col-span-2"}>
                            <div className="mt-5 px-3 flex items-center gap-3 border-1 rounded-sm border-bd-secondary/50 py-1 lg:bg-primary">
                                <div className="border-r-1 py-4 pr-2">
                                    <img src={CheckMarkSVG}  alt="check-mark" className="h-6" />
                                </div>
                                <InputFieldComponent id={"Full Name"} label={"Full Name"} type="text" placeholder="Write here..." className="flex focus:outline-none h-10" />
                            </div>

                            <div className="mt-5 px-3 flex items-center gap-3 border-1 rounded-sm border-bd-secondary/50 py-1 lg:bg-primary">
                                <div className="border-r-1 py-4 pr-2">
                                    <img src={CheckMarkSVG}  alt="check-mark" className="h-6" />
                                </div>
                                <InputFieldComponent id={"email"} label={"Email Address"} type="text" placeholder="Write here..." className="flex focus:outline-none h-10" />
                            </div>

                            <div className="border-1 mt-5 p-5 border-bd-secondary/50 rounded-sm lg:bg-primary">
                                <InputFieldComponent as="textarea" label="Message" placeholder="Write here..." rows="7" className="w-full block focus:outline-none resize-none" />
                            </div>

                            <div
                                className={"py-6 text-bg1/75 flex items-center gap-4 tracking-normal lg:hidden"}>
                                {/*<input type={"checkbox"} className={"h-8 w-8 accent-purple-500/25"} checked={true} readOnly={true} />*/}
                                <div className={"border-[1px] border-bg1"}>
                                    <input type="checkbox" id="myCheckbox" className="custom-checkbox h-8 w-8" checked readOnly />
                                </div>
                                <p className={"text-[16px] leading-5"}>{en.checkBoxText}</p>
                            </div>

                            <ButtonComponent variant={"primary"} className={"lg:mt-6"}>{en.sendMessage}</ButtonComponent>
                        </form>
                    </div>
                </div>
            </section>

            <NewsletterComponent />
            <FooterComponent />
        </>
    );
}

export default Contact;