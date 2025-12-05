// utils/event-details.ts

// ---- IMPORTS ---- //
import rnnw1 from "../src/assets/img/RNNW1.jpg";
import rnnw2 from "../src/assets/img/RNNW2.jpg";
import rnnw3 from "../src/assets/img/RNNW3.jpg";
import rnnw4 from "../src/assets/img/RNNW4.jpg";
import rnnw5 from "../src/assets/img/RNNW5.jpg";
import rnnw6 from "../src/assets/img/RNNW6.jpg";
import rnnw7 from "../src/assets/img/RNNW7.jpg";
import rnnw8 from "../src/assets/img/RNNW8.jpg";

import rnn21_1 from "../src/assets/img/RNN21_1.jpeg";
import rnn21_2 from "../src/assets/img/RNN21_2.jpeg";
import rnn21_3 from "../src/assets/img/RNN21_3.jpeg";
import rnn21_4 from "../src/assets/img/RNN21_4.jpeg";
import rnn21_5 from "../src/assets/img/RNN21_5.jpeg";
import rnn21_6 from "../src/assets/img/RNN21_6.jpeg";
import rnn21_7 from "../src/assets/img/RNN21_7.jpeg";
import rnn21_8 from "../src/assets/img/RNN21_8.jpeg";
import rnn21_9 from "../src/assets/img/RNN21_9.jpeg";
import rnn21_10 from "../src/assets/img/RNN21_10.jpeg";

import oluwatobiPhoto from "../src/assets/img/ay.jpg";


// ---- TYPES ---- //

export interface SpeakerType {
  name: string;
  role: string;
  company?: string;
  photo: string;
}

export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  images: string[];
  videos: string[];
  embed: string | null;
  galleryLink: string | null;
  speakers: SpeakerType[];
}


// ---- EVENT DATA ---- //

export const eventDetails: EventType[] = [
  {
    id: "event1",
    title: "React Native Nigeria Workshop",
    date: "21st December, 2019",
    time: "10:00 AM",
    location: "IBI Center",
    description:
      "An in-depth React Native workshop where developers in Nigeria came together to learn, collaborate, and build amazing projects.",
    images: [rnnw1, rnnw2, rnnw3, rnnw4, rnnw5, rnnw6, rnnw7, rnnw8],
    videos: [],
    embed: null,
    galleryLink:
      "https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn",
    speakers: [
      {
        name: "Oluwatobi Shokunmbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
      },
    ],
  },
  {
    id: "event2",
    title: "React Native To Infinity And Beyond",
    date: "27th June 2020",
    time: "10:00 AM",
    location: "Online",
    description:
      "React Native Nigeria 2020 has officially started! Join Us as Shodipo Ayomide, Godswill, Syed Zain Ali, and Valentino Ugbala give us a lightning talk!",
    images: [],
    videos: [
      "https://www.youtube.com/embed/12f3Cjw2Rbc?start=6",
      "https://youtu.be/ayCta8DrpD0?si=duvo4-PcbRezDMiw",
      "https://youtu.be/xftFpHvWJYM?si=p0gihzKCCXMudZ47",
    ],
    embed: null,
    galleryLink: null,
    speakers: [
      {
        name: "Oluwatobi Shokunmbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
      },
    ],
  },
  {
    id: "event3",
    title: "React Native Community Akure",
    date: "18th December 2021",
    time: "9:00 AM",
    location: "Akure",
    description:
      "A local meetup for React Native developers in Akure. Focused on hands-on sessions and real-life project walkthroughs.",
    images: [],
    videos: [],
    embed: null,
    galleryLink: null,
    speakers: [
      {
        name: "Oluwatobi Shokunmbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
      },
    ],
  },
  {
    id: "event4",
    title: "React Native Nigeria Abuja Meetup 2021",
    date: "29th May, 2021",
    time: "09:00 AM",
    location:
      "National Trauma Center - National hospital Abuja, Central area",
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
    speakers: [
      {
        name: "Oluwatobi Shokunmbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
      },
    ],
  },
  {
    id: "event5",
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
    speakers: [
      {
        name: "Oluwatobi Shokunmbi",
        role: "React Native Nigeria Founder",
        company: "React Native Nigeria",
        photo: oluwatobiPhoto,
      },
    ],
  },
];

export default eventDetails;