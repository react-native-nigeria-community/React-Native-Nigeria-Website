import React from "react";
import { motion } from "framer-motion";
import AboutJPG from "../assets/img/about.jpg";
import TypographyComponent from "../components/commons/typography.jsx";
import AccordionComponent from "../components/commons/accordion.jsx";
import en from "../locales/en.js";
import { getAccordions } from "../../utils/accordion.jsx";



function AboutUs() {
  return (
    <>
      {/* First section */}
      <section className="py-12 px-6 lg:bg-bg1">
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2">

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-[40px] leading-none tracking-[-2px] font-medium lg:w-[621px] lg:content-end lg:pb-6 lg:text-white"
            >
              {en.aboutPage.heroText1}
            </motion.p>

            <motion.img
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.2 }}
              src={AboutJPG}
              alt="avatar-icon"
              className="h-[328px] lg:h-[636px] mx-auto lg:col-span-1 lg:row-span-2 lg:pl-[104px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 250, damping: 22, delay: 0.4 }}
            >
              <TypographyComponent
                as="p"
                variant="p"
                className="font-normal leading-8 tracking-[0.12px] lg:w-[621px] lg:text-white"
              >
                {en.aboutPage.heroText2}
              </TypographyComponent>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="bg-bg2 silver-wave lg:py-[120px] lg:px-[153px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          className="px-6 pt-12 pb-4 text-center"
        >
          <TypographyComponent
            as="p"
            variant="p"
            className="leading-8 tracking-[-0.21px] font-normal text-secondary lg:text-h3 lg:leading-12 lg:tracking-normal"
          >
            {en.aboutPage.missionStatement}
          </TypographyComponent>
        </motion.div>
      </section>

      {/* Third section */}
      <section className="pt-12 lg:pt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2.5 pb-6 lg:w-[521px] lg:mx-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
          >
            <TypographyComponent
              as="h6"
              variant="h6"
              className="text-accent! font-normal lg:tracking-[1.63px]"
            >
              {en.aboutPage.faq}
            </TypographyComponent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <TypographyComponent
              as="h3"
              variant="h3"
              className="text-mh3! text-bg1! leading-none! tracking-normal! lg:text-h2! lg:tracking-[-1.2px]! lg:font-normal!"
            >
              {en.aboutPage.faqTitle}
            </TypographyComponent>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:pt-[115px]"
        >
          <AccordionComponent items={getAccordions} allowMultiple={false} />
        </motion.div>
      </section>
    </>
  );
}

export default AboutUs;