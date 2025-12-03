// src/pages/EventDetails.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import eventDetails from "../../utils/event-details.jsx"; 
import TypographyComponent from "../components/commons/typography.jsx";
import ButtonComponent from "../components/commons/button.jsx";

const getEmbedUrl = (url) => {
  const isYT = url.includes("youtube") || url.includes("youtu.be");
  if (!isYT) return url;
  if (url.includes("embed")) return url;
  if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
  const urlParts = url.split("/");
  return `https://www.youtube.com/embed/${urlParts.pop().split("?")[0]}`;
};

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-500 transition-colors"
        >
          &times;
        </button>
        <img
          src={src}
          alt="Full screen view"
          className="max-h-[95vh] max-w-[95vw] object-contain shadow-2xl rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};


const TabContainer = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImageSrc(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const tabs = [
    { id: 'speakers', name: 'Speakers', count: event.speakers?.length },
    { id: 'photos', name: 'Photos', count: event.images?.length },
    { id: 'videos', name: 'Videos', count: event.videos?.length },
    { id: 'gallery', name: 'Gallery', count: event.embed || event.galleryLink ? 1 : 0 },
  ].filter(tab => tab.count > 0);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'about');

  return (
    <div className="pt-10">
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-6 sm:space-x-10 overflow-x-auto">
          <button
            key="about"
            onClick={() => setActiveTab('about')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 text-base sm:text-lg font-semibold transition-colors
              ${activeTab === 'about'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200'
              }
            `}
          >
            Details & Description
          </button>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 text-base sm:text-lg font-semibold transition-colors
                ${activeTab === tab.id
                  ? 'border-indigo-400 text-indigo-400'
                  : 'border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200'
                }
              `}
            >
              {tab.name} {tab.count > 1 && <span className="hidden sm:inline">({tab.count})</span>}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="py-8 sm:py-12 space-y-10">
        {activeTab === 'about' && (
          <div className="space-y-10">
            <div 
              className="bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-inner border border-gray-600">
              <TypographyComponent
                as="h3"
                variant="h4"
                className="text-xl sm:text-2xl font-bold text-white mb-5 border-b border-gray-600 pb-3"
              >
                Event Summary
              </TypographyComponent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-base sm:text-lg text-gray-300">
                <p><strong className="text-indigo-400 block text-lg sm:text-xl">Date</strong> {event.date}</p>
                <p><strong className="text-indigo-400 block text-lg sm:text-xl">Time</strong> {event.time}</p>
                <p><strong className="text-indigo-400 block text-lg sm:text-xl">Location</strong> {event.location}</p>
              </div>
            </div>

            <div>
              <TypographyComponent
                as="h2"
                variant="h3"
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
              >
                About the Event
              </TypographyComponent>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'speakers' && event.speakers.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {event.speakers.map((speaker, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center bg-gray-700 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-600 transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover object-[50%_30%] shadow-md ring-4 ring-indigo-300/30 mb-3 sm:mb-4"
                />
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {speaker.name}
                </h4>
                <p className="text-indigo-400 font-semibold text-sm sm:text-md mt-1">{speaker.role}</p>
                {speaker.company && (
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {speaker.company}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'photos' && event.images?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {event.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Photo ${i + 1}`}
                onClick={() => openModal(src)}
                className="
                  w-full h-32 sm:h-48 
                  object-cover 
                  rounded-xl 
                  shadow-md 
                  transition-transform duration-300 hover:scale-[1.02] cursor-pointer
                "
              />
            ))}
            
          </div>
        )}

        {activeTab === 'videos' && event.videos?.length > 0 && (
          <div className="space-y-8">
            {event.videos.map((url, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-2xl bg-black border-2 border-gray-700"
              >
                <iframe
                  src={getEmbedUrl(url)}
                  title={`Video ${index + 1}`}
                  className="w-full aspect-video"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'gallery' && (event.embed || event.galleryLink) && (
          <div className="space-y-10">
            {event.galleryLink && (
              <div className="p-4 sm:p-6 bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <p className="text-base sm:text-lg text-gray-300 font-medium">
                  View the entire collection of high-resolution media here:
                </p>
                <a
                  href={event.galleryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 text-lg sm:text-xl font-bold hover:underline mt-2 inline-block transition-colors"
                >
                  Access Full Event Gallery →
                </a>
              </div>
            )}
            
            {event.embed && (
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700 mt-8">
                <iframe
                  src={event.embed}
                  title="Embedded Gallery"
                  className="w-full h-[400px] sm:h-[600px] lg:h-[800px]"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {isModalOpen && <ImageModal src={modalImageSrc} onClose={closeModal} />}
    </div>
  );
};

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
        
        <div className="text-center pb-10 sm:pb-16 pt-4 sm:pt-6">
            <TypographyComponent
                as="h1"
                variant="h1"
                className="text-4xl sm:text-5xl font-extrabold text-white mb-3"
            >
                Event Details
            </TypographyComponent>
            <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-4xl mx-auto">
                A comprehensive look back at the speakers, media, and insights from our past conferences and seminars.
            </p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {eventDetails.map((event) => {
            
            return (
              <article
                key={event.id}
                id={event.id}
                className="
                  bg-gray-800
                  rounded-xl sm:rounded-3xl 
                  shadow-2xl 
                  overflow-hidden 
                  ring-1 ring-gray-700
                "
              >
                <header className="w-full bg-slate-900 p-6 sm:p-10 lg:p-12">
                  <hgroup>
                    <h1
                      className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
                    >
                      {event.title}
                    </h1>
                    <p className="text-indigo-300 text-lg sm:text-xl font-medium mt-2">
                      {event.date} | {event.location}
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
                        ← Back to All Events
                      </ButtonComponent>
                    </a>
                  </div>

                  <TabContainer event={event} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;