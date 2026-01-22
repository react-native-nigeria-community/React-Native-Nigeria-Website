import en from "../src/locales/en";
import CalendarSVG from "../src/assets/svg/calendar.svg";
import ClockSVG from "../src/assets/svg/clock.svg";
import MarkerSVG from "../src/assets/svg/marker.svg";

export const secondEventList = [
    {
        image: CalendarSVG,
        text: en.eventPage.secondSection.date,
    },
    {
        image: ClockSVG,
        text: en.eventPage.secondSection.time,
    },
    {
        image: MarkerSVG,
        text: en.eventPage.secondSection.location,
    },
];