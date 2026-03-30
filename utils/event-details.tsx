import rnnw1 from "../src/assets/img/RNNW1.webp";
import rnnw2 from "../src/assets/img/RNNW2.webp";
import rnnw3 from "../src/assets/img/RNNW3.webp";
import rnnw4 from "../src/assets/img/RNNW4.webp";
import rnnw6 from "../src/assets/img/RNNW6.webp";
import rnnw8 from "../src/assets/img/RNNW8.webp";

import rnn21_1 from "../src/assets/img/RNN21_1.webp";
import rnn21_2 from "../src/assets/img/RNN21_2.webp";
import rnn21_3 from "../src/assets/img/RNN21_3.webp";
import rnn21_4 from "../src/assets/img/RNN21_4.webp";
import rnn21_5 from "../src/assets/img/RNN21_5.webp";
import rnn21_6 from "../src/assets/img/RNN21_6.webp";
import rnn21_7 from "../src/assets/img/RNN21_7.webp";
import rnn21_8 from "../src/assets/img/RNN21_8.webp";
import rnn21_9 from "../src/assets/img/RNN21_9.webp";
import rnn21_10 from "../src/assets/img/RNN21_10.webp";

import oluwatobiPhoto from "../src/assets/img/ay.webp";

import ayo from "../src/assets/img/ayo.webp";
import chibuke from "../src/assets/img/chibuke.webp";
import chinonso from "../src/assets/img/chinonso.webp";
import naomi from "../src/assets/img/naomi.webp";
import fisayo from "../src/assets/img/fisayo.webp";
import ali from "../src/assets/img/ali.webp";
import shodipo from "../src/assets/img/shodipo.webp";
import godswill from "../src/assets/img/godswill.webp";
import valentino from "../src/assets/img/valentino.webp";
import moso from "../src/assets/img/moso.webp";
import abdul from "../src/assets/img/abdul.webp";
import jason from "../src/assets/img/jason.webp";
import andrew from "../src/assets/img/andrew.webp";
import daniel from "../src/assets/img/daniel.webp";


// ---------------- TYPES ----------------

export interface SpeakerType {
  name: string;
  role: string;
  company?: string;
  photo: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export interface HostType {
  name: string;
  photo: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface PanelistType {
  name: string;
  role?: string;
  company?: string;
  photo: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export interface EventType {
  id: string;
  status: "upcoming" | "past";
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  images?: string[];
  videos?: string[];
  embed?: string | null;
  galleryLink?: string | null;
  speakers?: SpeakerType[];
  hosts?: HostType[];
  panelists?: PanelistType[];
}

// ---------------- EVENTS ----------------

export const eventDetails: EventType[] = [
  
  //RESTRUCTURED THE ARRAY IN DESCENDING ORDER

  // EVENT 7 — WITH PANELISTS ---------------------------------
  {
    id: "event7",
    status: "past",
    title: "React Native Nigeria Abuja Meetup 2026",
    date: "28th March 2026",
    time: "10am to 2pm",
    location: "Ventures Park HQ, Maitama, Abuja",
    description:
      "The latest React Native community meetup in Abuja. Expect hands-on coding sessions, expert talks, and vibrant networking.",
  },

  // EVENT 6 — ---------------------------------
  {
    id: "event6",
    status: "upcoming",
    title: "Campus Edition",
    date: "TBA",
    time: "TBD",
    location: "TBD",
    description: "The ultimate developer tour is coming to a campus near you."
  },

  // EVENT 5 — WITH PANELISTS ---------------------------------
  {
    id: "event5",
    status: "past",
    title: "React Native Nigeria Abuja Meetup 2025",
    date: "20th September 2025",
    time: "11:00 AM",
    location: "theBUNKER, Abuja",
    description:
      "The latest React Native community meetup in Abuja. Expect hands-on coding sessions, expert talks, and vibrant networking.",
    images: [],
    videos: [],
    embed:
      "https://drive.google.com/embeddedfolderview?id=1z97DrKOxFA2PoQdLwOXqzcB0mL9yG-hP#grid",
    galleryLink:
      "https://drive.google.com/folderview?id=1z97DrKOxFA2PoQdLwOXqzcB0mL9yG-hP#grid",

    hosts: [
      {
        name: "Fisayo Afowowe",
        photo: fisayo,
        socials: {
          linkedin: "https://www.linkedin.com/in/fisayo-afowowe-7932911b1/",
        },
      },
      {
        name: "Naomi Igimoh",
        photo: naomi,
        socials: {
          linkedin: "https://www.linkedin.com/in/naomi-igimoh/",
        },
      },
      {
        name: "Oluwatobi Shokunbi",
        photo: oluwatobiPhoto,
        socials: {
          twitter: "https://x.com/just1and0",
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
    ],

    speakers: [
      {
        name: "Oluwatobi Shokunbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
        socials: {
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
    ],

    panelists: [
      {
        name: "Chinonso Ichoku",
        role: "Panelist",
        photo: chinonso,
        socials: {
          linkedin: "https://www.linkedin.com/in/chinonso-ichoku/",
        },
      },
      {
        name: "Chibuokem Onyekwelu",
        role: "Panelist",
        photo: chibuke,
        socials: {
          linkedin: "https://www.linkedin.com/in/chibuokem-onyekwelu/",
        },
      },
      {
        name: "Ayo-David Ajayi",
        role: "Panelist",
        photo: ayo,
        socials: {
          linkedin: "https://www.linkedin.com/in/ayodavidajayi/",
        },
      },
    ],
  },

  // EVENT 4 ---------------------------------
  {
    id: "event4",
    status: "past",
    title: "React Native Nigeria Abuja Meetup 2021",
    date: "29th May, 2021",
    time: "09:00 AM",
    location: "National Trauma Center - National hospital Abuja, Central area",
    description:
      "A meetup in Abuja connecting React Native enthusiasts, with talks, workshops, and networking opportunities.",
    images: [
      rnn21_1,
      rnn21_2,
      rnn21_3,
      rnn21_4,
      rnn21_5,
      rnn21_6,
      rnn21_7,
      rnn21_8,
      rnn21_9,
      rnn21_10,
    ],
    videos: [],
    embed: null,
    galleryLink: null,

    hosts: [
      {
        name: "Oluwatobi Shokunbi",
        photo: oluwatobiPhoto,
        socials: {
          twitter: "https://x.com/just1and0",
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
    ],

    speakers: [
      {
        name: "Adepoju Daniel",
        role: "Software Engineer",
        company: "Freelancer",
        photo: daniel,
      },
      {
        name: "Jason Safaiyeh",
        role: "Software Enginner",
        company: "Somo Logic",
        photo: jason,
      },
      {
        name: "Andrew Ogaga",
        role: "Software Engineer",
        company: "Farm innovation LTD.",
        photo: andrew,
        socials: {
          linkedin: "https://www.linkedin.com/in/andy-ogaga/",
        },
      },
    ],

    panelists: [
      {
        name: "Oluwatobi Shokunbi",
        role: "Panelist",
        photo: oluwatobiPhoto,
        socials: {
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
      {
        name: "Godswill Okokon",
        role: "Panelist",
        photo: godswill,
        socials: {
          linkedin: "https://www.linkedin.com/in/godswill-okokon/",
        },
      },
    ],
  },
  
  // EVENT 2 — ONLINE EVENT ---------------------------------
  {
    id: "event2",
    status: "past",
    title: "React Native To Infinity And Beyond",
    date: "27th June 2020",
    time: "10:00 AM",
    location: "Online",
    description:
      "React Native Nigeria 2020 has officially started! Join Us as Shodipo Ayomide, Godswill, Syed Zain Ali, and Valentino Ugbala give us a lightning talk!",
    images: [],
    videos: ["https://www.youtube.com/embed/12f3Cjw2Rbc?start=6"],
    embed: null,
    galleryLink: null,

    hosts: [
      {
        name: "Oluwatobi Shokunbi",
        photo: oluwatobiPhoto,
        socials: {
          twitter: "https://x.com/just1and0",
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
    ],

    speakers: [
      {
        name: "Shodipo Ayomide",
        role: "Guest Speaker",
        company: "Head of Developer Relations at Nuklai",
        photo: shodipo,
        socials: {
          linkedin: "https://www.linkedin.com/in/shodipo-ayomide/",
        },
      },
      {
        name: "Godswill",
        role: "Guest Speaker",
        company: "Senior Software Engineer at Analog Republic",
        photo: godswill,
        socials: {
          linkedin: "https://www.linkedin.com/in/godswill-okokon/",
        },
      },
      {
        name: "Syed Zain Ali",
        role: "Guest Speaker",
        company: "Senior Software Engineer at Prop.com",
        photo: ali,
        socials: {
          linkedin: "https://www.linkedin.com/in/syed-zain-ali-7279b6115/",
        },
      },
      {
        name: "Valentino Ugbala",
        role: "Guest Speaker",
        company: "Senior Software Engineer at WorkHQ",
        photo: valentino,
        socials: {
          linkedin: "https://www.linkedin.com/in/teenoh/",
        },
      },
    ],
  },

  // EVENT 1 ---------------------------------
  {
    id: "event1",
    status: "past",
    title: "React Native Nigeria Workshop",
    date: "21st December, 2019",
    time: "10:00 AM",
    location: "IBI Center",
    description:
      "An in-depth React Native workshop where developers in Nigeria came together to learn, collaborate, and build amazing projects.",
    images: [rnnw1, rnnw2, rnnw3, rnnw4, rnnw6, rnnw8],
    videos: [],
    embed: null,
    galleryLink:
      "https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn",

    hosts: [
      {
        name: "Oluwatobi Shokunbi",
        photo: oluwatobiPhoto,
        socials: {
          twitter: "https://x.com/just1and0",
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
    ],

    speakers: [
      {
        name: "Abdulrazaq Imam, MITS",
        role: "Software Engineering Lead",
        company: "Tsari 360 Consulting",
        photo: abdul,
        socials: {
          linkedin: "https://www.linkedin.com/in/aimamisa/",
        },
      },
      {
        name: "Oluwatobi Shokunbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
        socials: {
          linkedin: "https://www.linkedin.com/in/just1and0/",
        },
      },
      {
        name: "Mishael (Mosolasi) Akinyemi",
        role: "Senior iOS / React Native Developer",
        company: "Callstack",
        photo: moso,
        socials: {
          linkedin: "https://www.linkedin.com/in/akinyemi-mosolasi/",
        },
      },
    ],
  },
];

export const getUpcomingEvents = () => eventDetails.filter((e) => e.status === "upcoming");
export const getPastEvents = () => eventDetails.filter((e) => e.status === "past");

export default eventDetails;
