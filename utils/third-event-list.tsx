import en from "../src/locales/en";
import CalendarSVG from "../src/assets/svg/calendar.svg";
import ClockSVG from "../src/assets/svg/clock.svg";
import MarkerSVG from "../src/assets/svg/marker.svg";

interface EventListItem {
  image: string;
  text: string;
}

export const thirdEventList: EventListItem[] = [
    {
        image: CalendarSVG,
        text: en.eventPage.thirdSection.event1.date,
    },
    {
        image: ClockSVG,
        text: en.eventPage.thirdSection.event1.time,
    },
    {
        image: MarkerSVG,
        text: en.eventPage.thirdSection.event1.location,
    },
];