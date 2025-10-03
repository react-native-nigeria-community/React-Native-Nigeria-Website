import CommunitySVG from "../assets/svg/community.svg";
import ReactSVG from "../assets/svg/react-b.svg";
import CalendarSVG from "../assets/svg/calendar.svg";
import LightBulbSVG from "../assets/svg/light-bulb.svg";
import  en from "../locales/en.js";

export const features = [
    {
        icon: CommunitySVG,
        title: en.secondSection.communityTalks.title,
        description: en.secondSection.communityTalks.description
    },
    {
        icon: ReactSVG,
        title: en.secondSection.realWorldProject.title,
        description: en.secondSection.realWorldProject.description
    },
    {
        icon: CalendarSVG,
        title: en.secondSection.communityEvents.title,
        description: en.secondSection.communityEvents.description
    },
    {
        icon: LightBulbSVG,
        title: en.secondSection.performanceTips.title,
        description: en.secondSection.performanceTips.description
    }
];