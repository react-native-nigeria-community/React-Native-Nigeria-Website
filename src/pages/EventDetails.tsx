import React, { useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom"; 
import eventDetails from "../../utils/event-details";
import TypographyComponent from "../components/commons/typography";
import ButtonComponent from "../components/commons/button";
import EventDetailsTab from "../components/commons/EventDetailsTab";

import { useTranslation } from "../context/LanguageContext";

const EventDetails = () => {
  const { t } = useTranslation(); 
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

  
  if (!t) return null;

  if (!event) {
    return (
      <div className="py-20 text-center text-bg1 text-2xl">
       
        Event Not Found
      </div>
    );
  }

  return (
    <>
      {/* HERO — Matches home top section */}
      <section className="py-16 px-6 bg-bg1 text-white text-center">
        <TypographyComponent
          as="h1"
          variant="h1"
          className="text-white tracking-tight"
        >
          {event.title}
        </TypographyComponent>

        <p className="mt-4 text-lg opacity-90">
          {event.date} • {event.location}
        </p>
      </section>

      {/* BACK BUTTON — clean, white background */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          
          <Link to="/events">
            <ButtonComponent className="px-8 py-3 rounded-full text-white bg-[#FF9E0C] hover:opacity-90">
              {t.eventDetailsPage?.backButton}
            </ButtonComponent>
          </Link>
        </div>
      </section>

      {/* CONTENT SECTION — Matches card sections on Home */}
      <section className="py-20 px-6 bg-[#F4F7FA]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100">
            <EventDetailsTab event={event} />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;