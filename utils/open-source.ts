import en from "../src/locales/en";

/** Defines the shape of a feature item */
export interface OpenSource {
    star: string;
    fork: string;
    title: string;
    description: string;
}

/**
 * Get the list of features for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Feature objects.
 */

export function getOpenSource(locale = en): OpenSource[] {
    return [
        {
            star: locale.fifthSection.sourceProject.project1.star,
            fork: locale.fifthSection.sourceProject.project1.fork,
            title: locale.fifthSection.sourceProject.project1.title,
            description: locale.fifthSection.sourceProject.project1.description,
        },
        {
            star: locale.fifthSection.sourceProject.project2.star,
            fork: locale.fifthSection.sourceProject.project2.fork,
            title: locale.fifthSection.sourceProject.project2.title,
            description: locale.fifthSection.sourceProject.project2.description,
        },
        {
            star: locale.fifthSection.sourceProject.project3.star,
            fork: locale.fifthSection.sourceProject.project3.fork,
            title: locale.fifthSection.sourceProject.project3.title,
            description: locale.fifthSection.sourceProject.project3.description,
        },
        {
            star: locale.fifthSection.sourceProject.project4.star,
            fork: locale.fifthSection.sourceProject.project4.fork,
            title: locale.fifthSection.sourceProject.project4.title,
            description: locale.fifthSection.sourceProject.project4.description,
        },
        {
            star: locale.fifthSection.sourceProject.project5.star,
            fork: locale.fifthSection.sourceProject.project5.fork,
            title: locale.fifthSection.sourceProject.project5.title,
            description: locale.fifthSection.sourceProject.project5.description,
        },
        {
            star: locale.fifthSection.sourceProject.project6.star,
            fork: locale.fifthSection.sourceProject.project6.fork,
            title: locale.fifthSection.sourceProject.project6.title,
            description: locale.fifthSection.sourceProject.project6.description,
        },
    ];
}

export const sources: OpenSource[] = getOpenSource(en);