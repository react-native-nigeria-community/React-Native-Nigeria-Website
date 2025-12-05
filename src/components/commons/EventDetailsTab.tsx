import React, { useState, useMemo } from "react";
import TypographyComponent from "./typography.jsx";
import ImageModal from "./ImageModal.jsx";
import en from "../../locales/en.js";
import { BASE_TAB_CONFIG } from "../../config/eventTabs";
import type { TabId } from "../../config/eventTabs";

type ActiveTab = "about" | TabId;

interface Speaker {
  name: string;
  role: string;
  company?: string;
  photo: string;
}

interface EventDetailsData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakers?: Speaker[];
  images?: string[];
  videos?: string[];
  embed?: string | null;
  galleryLink?: string | null;
}

interface EventDetailsTabProps {
  event: EventDetailsData;
  getEmbedUrl?: (url: string) => string;
}

interface TabItem {
  id: TabId;
  name: string;
  count?: number;
}

const EventDetailsTab: React.FC<EventDetailsTabProps> = ({ event, getEmbedUrl }) => {
  const T = en.eventDetailsTab;

  // Extract string name from en
  const TAB_CONFIG: TabItem[] = BASE_TAB_CONFIG.map((t) => ({
    ...t,
    name: T.tabs[t.id].name, // <- fixed
  }));

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("about");

  const openModal = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImageSrc(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const tabs = useMemo(() => {
    return TAB_CONFIG.map((t) => {
      let count = 0;
      if (t.id === "speakers") count = event.speakers?.length ?? 0;
      if (t.id === "photos") count = event.images?.length ?? 0;
      if (t.id === "videos") count = event.videos?.length ?? 0;
      if (t.id === "gallery") count = event.embed || event.galleryLink ? 1 : 0;
      return { ...t, count };
    }).filter((tab) => tab.count && tab.count > 0);
  }, [event]);

  return (
    <div className="pt-10">
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-6 sm:space-x-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab("about")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 text-base sm:text-lg font-semibold transition-colors ${
              activeTab === "about"
                ? "border-indigo-400 text-indigo-400"
                : "border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200"
            }`}
          >
            {T.tabs.about.name} {/* <- use .name if about is structured same way */}
          </button>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 text-base sm:text-lg font-semibold transition-colors ${
                activeTab === tab.id
                  ? "border-indigo-400 text-indigo-400"
                  : "border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200"
              }`}
            >
              {tab.name}{" "}
              {tab.count && tab.count > 1 && (
                <span className="hidden sm:inline">({tab.count})</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-8 sm:py-12 space-y-10">
        {activeTab === "about" && (
          <div className="space-y-10">
            <div className="bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-inner border border-gray-600">
              <TypographyComponent
                as="h3"
                variant="h4"
                className="text-xl sm:text-2xl font-bold text-white mb-5 border-b border-gray-600 pb-3"
              >
                {T.summaryTitle}
              </TypographyComponent>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-base sm:text-lg text-gray-300">
                <p>
                  <strong className="text-indigo-400 block text-lg sm:text-xl">
                    {T.date}
                  </strong>{" "}
                  {event.date}
                </p>
                <p>
                  <strong className="text-indigo-400 block text-lg sm:text-xl">
                    {T.time}
                  </strong>{" "}
                  {event.time}
                </p>
                <p>
                  <strong className="text-indigo-400 block text-lg sm:text-xl">
                    {T.location}
                  </strong>{" "}
                  {event.location}
                </p>
              </div>
            </div>

            <div>
              <TypographyComponent
                as="h2"
                variant="h3"
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
              >
                {T.aboutEvent}
              </TypographyComponent>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </div>
        )}

        {activeTab === "speakers" && event.speakers?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {event.speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-700 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-600 hover:shadow-xl transition-shadow"
              >
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover object-[50%_30%] shadow-md ring-4 ring-indigo-300/30 mb-3 sm:mb-4"
                />
                <h4 className="text-lg sm:text-xl font-bold text-white">{speaker.name}</h4>
                <p className="text-indigo-400 font-semibold text-sm sm:text-md mt-1">
                  {speaker.role}
                </p>
                {speaker.company && (
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">{speaker.company}</p>
                )}
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === "photos" && event.images?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {event.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Photo ${i + 1}`}
                onClick={() => openModal(src)}
                className="w-full h-32 sm:h-48 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
              />
            ))}
          </div>
        ) : null}

        {activeTab === "videos" && event.videos?.length ? (
          <div className="space-y-8">
            {event.videos.map((url, index) => {
              const embedUrl = getEmbedUrl ? getEmbedUrl(url) : url;
              return (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-2xl bg-black border-2 border-gray-700"
                >
                  <iframe
                    src={embedUrl}
                    title={`Video ${index + 1}`}
                    className="w-full aspect-video"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        ) : null}

        {activeTab === "gallery" && (event.embed || event.galleryLink) && (
          <div className="space-y-10">
            {event.galleryLink && (
              <div className="p-4 sm:p-6 bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <p className="text-base sm:text-lg text-gray-300 font-medium">{T.viewCollection}</p>
                <a
                  href={event.galleryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 text-lg sm:text-xl font-bold hover:underline mt-2 inline-block"
                >
                  {T.accessGallery}
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

export default EventDetailsTab;
