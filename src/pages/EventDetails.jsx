// src/pages/EventDetails.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import eventDetails from "../../utils/event-details.jsx";
import TypographyComponent from "../components/commons/typography.jsx";
import ButtonComponent from "../components/commons/button.jsx";
import EventDetailsTab from "../components/commons/EventDetailsTab.jsx"; 
import en from "../locales/en.js";


function EventDetails() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-gray-900 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center pb-10 sm:pb-16 pt-4 sm:pt-6">
          <TypographyComponent
            as="h1"
            variant="h1"
            className="text-4xl sm:text-5xl font-extrabold text-white mb-3"
          >
            {en.eventDetailsPage.pageTitle}
          </TypographyComponent>
          <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-4xl mx-auto">
           {en.eventDetailsPage.pageSubtitle}
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-24 sm:space-y-32">
          {eventDetails.map((event) => (
            <article
              key={event.id}
              id={event.id}
              className="bg-gray-800 rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden ring-1 ring-gray-700"
            >
              <header className="w-full bg-slate-900 p-6 sm:p-10 lg:p-12">
                <hgroup>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {event.title}
                  </h1>
                  <p className="text-indigo-300 text-lg sm:text-xl font-medium mt-2">
                    {event.date}{en.eventDetailsPage.dateLocationSeparator}{event.location}
                  </p>
                </hgroup>
              </header>

              <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="pb-6 sm:pb-8 border-b border-gray-700 mb-6 sm:mb-8 flex justify-start">
                  <a href="/events" className="w-full sm:w-auto">
                    <ButtonComponent
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto justify-center px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold 
                        bg-gray-900 text-indigo-400 border border-indigo-400 rounded-full 
                        hover:bg-slate-700 transition-colors shadow-md"
                    >
                      {en.eventDetailsPage.backButton}
                    </ButtonComponent>
                  </a>
                </div>
                <EventDetailsTab event={event} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;