import en from "../src/locales/en";

export interface GetLinks {
    label: string;
    link: string;
}

/**
 * Get the list of features for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Feature objects.
 */
export function getLinks(locale = en): GetLinks[] {
    return [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "About Us",
            link: "/about-us",
        },
        {
            label: "Events",
            link: "/events",
        },
        {
            label: "Contact",
            link: "/contact",
        },
    ];
}

export const links: GetLinks[] = getLinks(en);