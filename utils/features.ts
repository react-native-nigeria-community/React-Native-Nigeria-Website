// @ts-ignore
import CommunitySVG from "../src/assets/svg/community.svg";
// @ts-ignore
import ReactSVG from "../src/assets/svg/react-b.svg";
// @ts-ignore
import CalendarSVG from "../src/assets/svg/calendar.svg";
// @ts-ignore
import LightBulbSVG from "../src/assets/svg/light-bulb.svg";
import en from "../src/locales/en";

/** Defines the shape of a feature item */
export interface Feature {
    icon: string;
    title: string;
    description: string;
}

/**
 * Get the list of features for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Feature objects.
 */
export function getFeatures(locale = en): Feature[] {
    return [
        {
            icon: CommunitySVG,
            title: locale.secondSection.communityTalks.title,
            description: locale.secondSection.communityTalks.description,
        },
        {
            icon: ReactSVG,
            title: locale.secondSection.realWorldProject.title,
            description: locale.secondSection.realWorldProject.description,
        },
        {
            icon: CalendarSVG,
            title: locale.secondSection.communityEvents.title,
            description: locale.secondSection.communityEvents.description,
        },
        {
            icon: LightBulbSVG,
            title: locale.secondSection.performanceTips.title,
            description: locale.secondSection.performanceTips.description,
        },
    ];
}

export const features: Feature[] = getFeatures(en);