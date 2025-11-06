import React from "react";
import InputFieldComponent from "../components/commons/input-field.jsx";
import ButtonComponent from "../components/commons/button.jsx";
import CheckMarkSVG from "../assets/svg/check-mark.svg";
import MaleAvatarPNG from "../assets/img/male-avatar.png";
import TypographyComponent from "../components/commons/typography.jsx";
import en from "../locales/en.js";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      toast.loading("Submitting message...");

      const response = await fetch("https://api.myqrmenu.co/api/submit-form", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      toast.dismiss();

      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (_error) {
      toast.dismiss();
      toast.error("An error occurred. Please check your connection.");
    }
  };

  return (
    <>
      <section className={"p-6 lg:bg-bg1"}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: "1.1rem",
              padding: "18px 24px",
              border: "2px solid #FF9E0C",
              background: "#fff",
              color: "#333",
            },
            iconTheme: {
              primary: "#FF9E0C",
              secondary: "#fff",
            },
            duration: 5000,
          }}
        />
        <div className={"text-left lg:flex lg:justify-center lg:mx-auto"}>
          <div className={"flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2"}>
            <p className={"text-[40px] pb-6 leading-none tracking-[-2px] font-medium lg:hidden"}>
              Contact us
            </p>
            <img
              src={MaleAvatarPNG}
              alt={"avatar-icon"}
              className={
                "h-[328px] lg:h-[636px] mx-auto lg:col-span-2 lg:row-span-3 lg:w-fit"
              }
            />
            <p
              className={
                "hidden text-[40px] leading-none tracking-[-2px] font-medium lg:w-[621px] lg:content-end lg:pb-6 lg:block lg:text-white"
              }
            >
              Contact us
            </p>
            <TypographyComponent
              as={"h6"}
              variant={"h6"}
              className={
                "py-6 text-bg1! font-normal leading-[20px] lg:text-white! lg:col-span-2"
              }
            >
              Have questions or ideas? We’d love to hear from you.
            </TypographyComponent>

            <form
              onSubmit={onSubmit}
              className={"lg:row-span-1 lg:col-span-2"}
            >
              <div className="mt-5 px-3 flex items-center gap-3 border-1 rounded-sm border-bd-secondary/50 py-1 lg:bg-primary">
                <div className="border-r-1 py-4 pr-2">
                  <img src={CheckMarkSVG} alt="check-mark" className="h-6" />
                </div>
                <InputFieldComponent
                  id="name"
                  name="fullName"
                  label="Full Name"
                  type="text"
                  placeholder="Write here..."
                  className="flex focus:outline-none h-10"
                  required
                />
              </div>

              <div className="mt-5 px-3 flex items-center gap-3 border-1 rounded-sm border-bd-secondary/50 py-1 lg:bg-primary">
                <div className="border-r-1 py-4 pr-2">
                  <img src={CheckMarkSVG} alt="check-mark" className="h-6" />
                </div>
                <InputFieldComponent
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Write here..."
                  className="flex focus:outline-none h-10"
                  required
                />
              </div>

              <div className="border-1 mt-5 p-5 border-bd-secondary/50 rounded-sm lg:bg-primary">
                <InputFieldComponent
                  as="textarea"
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="Write here..."
                  rows="7"
                  className="w-full block focus:outline-none resize-none"
                  required
                />
              </div>

              <div
                className={
                  "py-6 text-bg1/75 flex items-center gap-4 tracking-normal lg:hidden"
                }
              >
                <div className={"border-[1px] border-bg1"}>
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox h-8 w-8"
                    checked
                    readOnly
                  />
                </div>
                <p className={"text-[16px] leading-5"}>{en.checkBoxText}</p>
              </div>

              <ButtonComponent
                variant={"primary"}
                type="submit"
                className={"lg:mt-6"}
              >
                {en.sendMessage}
              </ButtonComponent>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
