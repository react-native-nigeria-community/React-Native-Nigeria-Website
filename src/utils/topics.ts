import en from "../locales/en";
// @ts-ignore
import Topic1PNG from "../assets/img/topics/topic-1.png";
// @ts-ignore
import Topic2PNG from "../assets/img/topics/topic-2.png";
// @ts-ignore
import Topic3PNG from "../assets/img/topics/topic-3.png";

/** Defines the shape of a topic item */
export interface Topic {
    image: string;
    title: string;
    description: string;
}

/**
 * Get the list of topics for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Topic objects.
 */
export function getTopics(locale = en): Topic[] {
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

export const topics: Topic[] = getTopics(en);