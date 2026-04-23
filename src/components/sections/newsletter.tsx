import React, { useState } from "react";
import ButtonComponent from "../commons/button";
import TypographyComponent from "../commons/typography";
import { useTranslation } from "../../context/useTranslation";
import InputFieldComponent from "../commons/input-field";

const NewsletterComponent: React.FC = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <section className="w-full py-12 lg:flex lg:justify-center">
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
                            label="Email"
                            type="email"
                            as="input"
                            cols={1}
                            rows={1}
                            className={"w-full p-3 lg:w-lg h-10 focus:outline-none border border-black rounded-[10px] lg:border-none"}
                            placeholder={t.placeholderEmail}
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            error={error}
                        />

                        <div className="">
                            <ButtonComponent 
                                type="submit" 
                                className="min-w-full py-3 w-max" 
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
