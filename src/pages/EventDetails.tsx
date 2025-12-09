import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import eventDetails from "../../utils/event-details";
import TypographyComponent from "../components/commons/typography";
import ButtonComponent from "../components/commons/button";
import EventDetailsTab from "../components/commons/EventDetailsTab";
import en from "../locales/en";

const EventDetails = () => {
  const { hash } = useLocation();
  const eventId = hash?.replace("#", "");

  const event = useMemo(
    () => eventDetails.find((evt) => evt.id === eventId),
    [eventId]
  );

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [hash]);

  if (!event) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center text-bg1 text-2xl"
      >
        Event Not Found
      </motion.div>
    );
  }

  return (
    <>
      <section className="py-16 px-6 bg-bg1 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <TypographyComponent
            as="h1"
            variant="h1"
            className="text-white tracking-tight"
          >
            {event.title}
          </TypographyComponent>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg opacity-90"
        >
          {event.date} • {event.location}
        </motion.p>
      </section>

      <section className="py-10 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <a href="/events">
            <ButtonComponent className="px-8 py-3 rounded-full text-white bg-[#FF9E0C] hover:opacity-90">
              {en.eventDetailsPage.backButton}
            </ButtonComponent>
          </a>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-[#F4F7FA]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100"
          >
            <EventDetailsTab event={event} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default EventDetails;