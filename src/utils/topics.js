import en from "../locales/en.js";
import Topic1PNG from "../assets/img/topics/topic-1.png";
import Topic2PNG from "../assets/img/topics/topic-2.png";
import Topic3PNG from "../assets/img/topics/topic-3.png";

/**
 * @typedef {Object} Topic
 * @property {string} image - Path to the topic image.
 * @property {string} title - Title of the topic.
 * @property {string} description - Description of the topic.
 */

/**
 * Get the list of topics for a given locale.
 * @param {any} [locale=en] - The locale object (defaults to English).
 * @returns {Topic[]}
 */
export function getTopics(locale = en) {
    return [
        {
            image: Topic1PNG,
            title: locale.thirdSection.medium.title,
            description: locale.thirdSection.medium.description1,
        },
        {
            image: Topic2PNG,
            title: locale.thirdSection.medium.title,
            description: locale.thirdSection.medium.description2,
        },
        {
            image: Topic3PNG,
            title: locale.thirdSection.medium.title,
            description: locale.thirdSection.medium.description3,
        },
    ];
}

/** Default English topics (convenience export) */
export const topics = getTopics(en);