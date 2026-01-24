import React, { useState } from "react";
import ButtonComponent from "../commons/button.jsx";
import TypographyComponent from "../commons/typography.jsx";
import InputFieldComponent from "../commons/input-field.jsx";
import { useTranslation } from "../../context/useTranslation.jsx";

const NewsletterComponent = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");

        // Redirect to Substack with email pre-filled
        const substackUrl = `https://reactnativenigeria.substack.com/subscribe?email=${encodeURIComponent(email)}`;
        window.open(substackUrl, "_blank", "noopener,noreferrer");

        setEmail("");
    };

    return (
        <section className="w-full lg:flex lg:justify-center py-12">
            <div className="text-center px-4 lg:px-[24px] lg:py-[77px]">
                
                {/* Heading */}
                <TypographyComponent 
                    as="h3" 
                    variant="h3" 
                    responsiveVariant={{ lg: "h4" }} 
                    className={"text-secondary!"}
                >
                    {t.newsletterTitle}
                </TypographyComponent>

                {/* Subheading */}
                <TypographyComponent 
                    as="h6" 
                    variant="h6" 
                    className={"max-w-[55ch] mx-auto text-secondary! mt-2 mb-6 text-h6 lg:text-p"} 
                    responsiveVariant={{ lg: "p" }}
                >
                    {t.newsletterDescription}
                </TypographyComponent>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6 lg:space-y-0 lg:flex lg:items-center lg:border-1 lg:border-bd-secondary/50 lg:rounded-sm lg:px-[24px] lg:py-[16px]">
                        
                        <InputFieldComponent
                            id="email"
                            type="email"
                            className={"w-full p-3 lg:w-lg h-10 focus:outline-none border border-black rounded-[10px] lg:border-none"}
                            placeholder={t.placeholderEmail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}
                        />

                        <div className="">
                            <ButtonComponent 
                                type="submit" 
                                className="min-w-full w-max py-3" 
                                variant="primary"
                            >
                                {t.subscribe}
                            </ButtonComponent>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewsletterComponent;