import React, { useState } from "react";
import Button from "../common/button.jsx";
import InputField from "../common/input-field.jsx";
import Typography from "../common/typography.jsx";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert(`Subscribed with: ${email}`);
            setEmail("");
        }
    };

    return (
        <section className="w-full lg:flex lg:justify-center py-12">
            <div className="text-center px-4 lg:px-\\\[24px] lg:py-\\\[77px]">
                {/* Heading */}
                <Typography as="h3" variant="h3" responsiveVariant={{ lg: "h4" }}>
                    Subscribe to our newsletter
                </Typography>

                {/* Subheading */}
                <Typography as="h6" variant="h6" className={"mt-2 mb-6 text-h6 lg:text-p"} responsiveVariant={{ lg: "p" }}>
                    Stay updated with events, resources, and the latest in React Native.
                </Typography>


                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6 lg:space-y-0 lg:flex lg:items-center lg:border-1 lg:border-bd-secondary/50  lg:rounded-sm lg:px-[24px] lg:py-[16px]">
                        <InputField
                            id="email"
                            type="email"
                            className={"w-full p-3 lg:w-lg h-10 focus:outline-none border border-black rounded-[10px] lg:border-none"}
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}
                        />
                        <div className="">
                            <Button type="submit" className="w-full py-3" variant="primary" onClick={handleSubmit}>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;