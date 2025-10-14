import en from "../src/locales/en";


/** Defines the shape of a topic item */
export interface WriteForUs {
    title: string;
    description: string;
}

/**
 * Get the list of topics for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Topic objects.
 */
export function getWriteUps(locale = en): WriteForUs [] {
    return [
        {
            title: locale.sixthSection.communityCard.communityCard1.title,
            description: locale.sixthSection.communityCard.communityCard1.description,
        },
        {
            title: locale.sixthSection.communityCard.communityCard2.title,
            description: locale.sixthSection.communityCard.communityCard2.description,
        },
        {
            title: locale.sixthSection.communityCard.communityCard3.title,
            description: locale.sixthSection.communityCard.communityCard3.description,
        },
    ];
}

export const writeUp: WriteForUs[] = getWriteUps(en);