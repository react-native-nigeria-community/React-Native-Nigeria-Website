import en from "../src/locales/en";
import CommunityIcon from "../src/assets/svg/svgs/community-icon";
import ReactIcon from "../src/assets/svg/svgs/react-icon.jsx";
import CalendarIcon from "../src/assets/svg/svgs/calendar-icon.jsx";
import LightBulbIcon from "../src/assets/svg/svgs/light-bulb-icon.jsx";

export const getFeatures = [
        {
            icon: <CommunityIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
            title: en.secondSection.communityTalks.title,
            description: en.secondSection.communityTalks.description,
        },
        {
            icon: <ReactIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
            title: en.secondSection.realWorldProject.title,
            description: en.secondSection.realWorldProject.description,
        },
        {
            icon: <CalendarIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
            title: en.secondSection.communityEvents.title,
            description: en.secondSection.communityEvents.description,
        },
        {
            icon: <LightBulbIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
            title: en.secondSection.performanceTips.title,
            description: en.secondSection.performanceTips.description,
        },
    ];