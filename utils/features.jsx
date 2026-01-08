import CommunityIcon from "../src/assets/svg/svgs/community-icon";
import ReactIcon from "../src/assets/svg/svgs/react-icon.jsx";
import CalendarIcon from "../src/assets/svg/svgs/calendar-icon.jsx";
import LightBulbIcon from "../src/assets/svg/svgs/light-bulb-icon.jsx";


export const getFeatures = (t) => [
  {
    icon: <CommunityIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
    title: t?.secondSection?.communityTalks?.title,
    description: t?.secondSection?.communityTalks?.description,
  },
  {
    icon: <ReactIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
    title: t?.secondSection?.realWorldProject?.title,
    description: t?.secondSection?.realWorldProject?.description,
  },
  {
    icon: <CalendarIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
    title: t?.secondSection?.communityEvents?.title,
    description: t?.secondSection?.communityEvents?.description,
  },
  {
    icon: <LightBulbIcon className={"fill-bg1 lg:fill-primary w-7 h-7 lg:w-9 lg:h-9"} />,
    title: t?.secondSection?.performanceTips?.title,
    description: t?.secondSection?.performanceTips?.description,
  },
];