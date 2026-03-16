import en from "../src/locales/en";
import xSVG from "../src/assets/svg/x.svg";
import GitSVG from "../src/assets/svg/git.svg";

interface EventListItem {
  image: string;
  text: string;
}

export const firstEventList: EventListItem[] = [
    {
        image: xSVG,
        text: en.eventPage.secondSection.xText,
    },
    {
        image: GitSVG,
        text: en.eventPage.secondSection.gitText,
    },
];