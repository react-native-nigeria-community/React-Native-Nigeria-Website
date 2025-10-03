import CommunitySVG from "../assets/svg/community.svg";
import ReactSVG from "../assets/svg/react-b.svg";
import CalendarSVG from "../assets/svg/calendar.svg";
import LightBulbSVG from "../assets/svg/light-bulb.svg";
import en from "../locales/en.js";

/**
 * @typedef {Object} Feature
 * @property {string} icon - Path to the feature icon.
 * @property {string} title - Title of the feature.
 * @property {string} description - Description of the feature.
 */

/**
 * Get the list of features for a given locale.
 * @param {any} [locale=en] - The locale object (defaults to English).
 * @returns {Feature[]}
 */
export function getFeatures(locale = en) {
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

/** Default English features (convenience export) */
export const features = getFeatures(en);