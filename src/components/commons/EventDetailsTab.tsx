import React, { useState, useMemo } from "react";
import TypographyComponent from "./typography.jsx";
import ImageModal from "./ImageModal.jsx";
import en from "../../locales/en.js";

interface HostSocials {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

interface Host {
  name: string;
  photo: string;
  socials?: HostSocials;
}

interface Speaker {
  name: string;
  role: string;
  company?: string;
  photo: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

interface Panelist {
  name: string;
  role?: string;
  company?: string;
  photo: string;
  socials?: HostSocials;
}

export interface EventDetailsData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakers?: Speaker[];
  hosts?: Host[];
  panelists?: Panelist[];
  images?: string[];
  videos?: string[];
  embed?: string | null;
  galleryLink?: string | null;
}

interface EventDetailsTabProps {
  event: EventDetailsData;
  getEmbedUrl?: (url: string) => string;
}

type ActiveTab =
  | "about"
  | "speakers"
  | "hosts"
  | "panelists"
  | "photos"
  | "videos"
  | "gallery";

// brand colors from your site
const COLORS = {
  orange: "#FF9E0C",
};

const EventDetailsTab: React.FC<EventDetailsTabProps> = ({
  event,
  getEmbedUrl,
}) => {
  const T = en.eventDetailsTab;

  const TAB_CONFIG = [
    { id: "speakers", name: "Speakers" },
    { id: "hosts", name: "Hosts" },
    { id: "panelists", name: "Panelists" }, // ⭐ NEW TAB
    { id: "photos", name: "Photos" },
    { id: "videos", name: "Videos" },
    { id: "gallery", name: "Gallery" },
  ] as const;

  const [activeTab, setActiveTab] = useState<ActiveTab>("about");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);

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
    return TAB_CONFIG.filter((t) => {
      if (t.id === "speakers") return event.speakers?.length;
      if (t.id === "hosts") return event.hosts?.length;
      if (t.id === "panelists") return event.panelists?.length; // ⭐ NEW
      if (t.id === "photos") return event.images?.length;
      if (t.id === "videos") return event.videos?.length;
      if (t.id === "gallery") return event.galleryLink || event.embed;
      return false;
    });
  }, [event]);

  return (
    <div className="pt-8">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("about")}
            style={
              activeTab === "about"
                ? {
                  borderBottom: `2px solid ${COLORS.orange}`,
                  color: COLORS.orange,
                }
                : {}
            }
            className="py-4 text-lg font-medium whitespace-nowrap border-b-2 border-transparent text-gray-600 hover:text-gray-800"
          >
            {T.tabs.about.name}
          </button>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ActiveTab)}
              style={
                activeTab === tab.id
                  ? {
                    borderBottom: `2px solid ${COLORS.orange}`,
                    color: COLORS.orange,
                  }
                  : {}
              }
              className="py-4 text-lg font-medium whitespace-nowrap border-b-2 border-transparent text-gray-600 hover:text-gray-800"
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-10 space-y-12">
        {/* ABOUT */}
        {activeTab === "about" && (
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <TypographyComponent
                as="h3"
                variant="h3"
                className="text-[22px] font-semibold text-secondary mb-4"
              >
                {T.summaryTitle}
              </TypographyComponent>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-secondary">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            </div>

            <div>
              <TypographyComponent
                as="h2"
                variant="h3"
                className="text-primary text-[28px] font-semibold mb-3"
              >
                {T.aboutEvent}
              </TypographyComponent>
              <p className="text-secondary text-[17px] leading-[1.7]">
                {event.description}
              </p>
            </div>
          </div>
        )}

        {/* SPEAKERS */}
        {activeTab === "speakers" && event.speakers && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {event.speakers.map((sp, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <img
                  src={sp.photo}
                  alt={sp.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />

                <h4 className="font-semibold text-lg">{sp.name}</h4>

                <p className="text-secondary">{sp.role}</p>
                {sp.company && (
                  <p className="text-gray-500 text-sm">{sp.company}</p>
                )}

                {/* ⭐ LinkedIn / Socials */}
                <div className="flex justify-center gap-3 mt-3 text-sm">
                  {sp.socials?.linkedin && (
                    <a
                      href={sp.socials.linkedin}
                      target="_blank"
                      className="text-blue-600"
                    >
                      LinkedIn
                    </a>
                  )}

                  {sp.socials?.twitter && (
                    <a
                      href={sp.socials.twitter}
                      target="_blank"
                      className="text-blue-400"
                    >
                      Twitter
                    </a>
                  )}

                  {sp.socials?.github && (
                    <a
                      href={sp.socials.github}
                      target="_blank"
                      className="text-gray-800"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}


        {/* HOSTS */}
        {activeTab === "hosts" && event.hosts && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {event.hosts.map((host, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <img
                  src={host.photo}
                  alt={host.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />

                <h4 className="font-semibold  text-lg">{host.name}</h4>

                <div className="flex justify-center gap-3 mt-3 text-sm">
                  {host.socials?.twitter && (
                    <a href={host.socials.twitter} target="_blank" className="text-blue-400">
                      Twitter
                    </a>
                  )}
                  {host.socials?.linkedin && (
                    <a href={host.socials.linkedin} target="_blank" className="text-blue-600">
                      LinkedIn
                    </a>
                  )}
                  {host.socials?.github && (
                    <a href={host.socials.github} target="_blank" className="text-gray-800">
                      GitHub
                    </a>
                  )}
                  {host.socials?.website && (
                    <a href={host.socials.website} target="_blank" className="text-[#FF9E0C]">
                      Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ⭐ PANELISTS */}
        {activeTab === "panelists" && event.panelists && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {event.panelists.map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />

                <h4 className="font-semibold text-lg">{p.name}</h4>

                {p.role && <p className="text-secondary">{p.role}</p>}
                {p.company && <p className="text-gray-500 text-sm">{p.company}</p>}

                <div className="flex justify-center gap-3 mt-3 text-sm">
                  {p.socials?.twitter && (
                    <a href={p.socials.twitter} target="_blank" className="text-blue-400">
                      Twitter
                    </a>
                  )}
                  {p.socials?.linkedin && (
                    <a href={p.socials.linkedin} target="_blank" className="text-blue-600">
                      LinkedIn
                    </a>
                  )}
                  {p.socials?.github && (
                    <a href={p.socials.github} target="_blank" className="text-gray-800">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PHOTOS */}
        {activeTab === "photos" && event.images && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {event.images.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={() => openModal(src)}
                className="rounded-2xl shadow cursor-pointer hover:scale-[1.02] transition"
                alt=""
              />
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && event.videos && (
          <div className="space-y-8">
            {event.videos.map((v, i) => (
              <iframe
                key={i}
                src={getEmbedUrl ? getEmbedUrl(v) : v}
                className="w-full aspect-video rounded-2xl shadow border border-gray-200"
                allowFullScreen
              />
            ))}
          </div>
        )}

        {/* GALLERY */}
        {activeTab === "gallery" && (event.embed || event.galleryLink) && (
          <div className="space-y-8">
            {event.galleryLink && (
              <a
                href={event.galleryLink}
                target="_blank"
                className="text-[#FF9E0C] text-lg font-semibold underline"
              >
                Open Full Gallery
              </a>
            )}

            {event.embed && (
              <iframe
                src={event.embed}
                className="w-full h-[600px] rounded-2xl shadow border border-gray-200"
                allowFullScreen
              />
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <ImageModal src={modalImageSrc} onClose={closeModal} />
      )}
    </div>
  );
};

export default EventDetailsTab;
