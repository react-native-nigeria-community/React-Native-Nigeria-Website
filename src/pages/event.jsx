import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TypographyComponent from "../components/commons/typography.jsx";
import PastEventHighLights from "../components/commons/past-events.jsx";
import en from "../locales/en.js";
import { eventDetails } from "../../utils/event-details";

function Events() {
  return (
    <>
      {/* First section — only text animates */}
      <section className="lg:bg-bg1 bg-[url(./assets/img/mb-blue.png)] lg:bg-[url(./assets/img/lg-bg-screen.png)] bg-no-repeat bg-bottom bg-contain h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full">
        <div className="gird justify-items-center content-center">
          <div className="px-6 space-y-3 lg:w-[758px] text-secondary lg:text-primary">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="font-semibold leading-none lg:leading[60px] lg:font-medium text-[40px] tracking-[-0.125rem] md:text-h1"
            >
              <span className="lg:hidden">{en.eventPage.firstSection.title1}</span>

              <TypeAnimation
                key="second"
                sequence={["React Native Community Events"]}
                speed={50}
                repeat={1}
                cursor={false}
                className="hidden lg:block"
                preRenderFirstString={false}
              />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="leading-5 text-secondary lg:text-primary tracking-normal text-[16px] lg:text-[14px]"
            >
              {en.eventPage.firstSection.slogan}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Second section — only cards animate */}
      <section className="px-6 py-12 space-y-6">
        <div className="lg:flex lg:justify-center lg:mx-[125px]">
          <div className="py-6">
            <TypographyComponent as="h3" variant="h3" className="text-mh3!">
              {en.eventPage.fourthSection.title}
            </TypographyComponent>

            <div className="py-6 grid md:grid-cols-3 gap-6 justify-items-stretch items-stretch">
              {eventDetails.map((list, i) => (
                <motion.div
                  key={list.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ y: -12 }}
                >
                  <PastEventHighLights
                    id={list.id}
                    title={list.title}
                    date={list.date}
                    time={list.time}
                    location={list.location}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;