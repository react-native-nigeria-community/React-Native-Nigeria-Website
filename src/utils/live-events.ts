import en from "../locales/en";

/** Defines the shape of a live event */
export interface LiveEvent {
    label: string;
    title: string;
    date: string;
    time: string;
    buttonText: string;
}

/**
 * Get the list of live events for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of LiveEvent objects.
 */
export function getLiveEvents(locale = en): LiveEvent[] {
    return [
        {
            label: locale.fourthSection.eventCards.eventCard1.smallText,
            title: locale.fourthSection.eventCards.eventCard1.title,
            date: locale.fourthSection.eventCards.eventCard1.date,
            time: locale.fourthSection.eventCards.eventCard1.time,
            buttonText: locale.fourthSection.eventCards.eventCard1.buttonText,
        },
        {
            label: locale.fourthSection.eventCards.eventCard2.smallText,
            title: locale.fourthSection.eventCards.eventCard2.title,
            date: locale.fourthSection.eventCards.eventCard2.date,
            time: locale.fourthSection.eventCards.eventCard2.time,
            buttonText: locale.fourthSection.eventCards.eventCard2.buttonText,
        },
        {
            label: locale.fourthSection.eventCards.eventCard3.smallText,
            title: locale.fourthSection.eventCards.eventCard3.title,
            date: locale.fourthSection.eventCards.eventCard3.date,
            time: locale.fourthSection.eventCards.eventCard3.time,
            buttonText: locale.fourthSection.eventCards.eventCard3.buttonText,
        },
    ];
}

export const liveEvents: LiveEvent[] = getLiveEvents(en);