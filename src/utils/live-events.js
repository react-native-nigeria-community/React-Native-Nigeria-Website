import en from "../locales/en.js";

/**
 * @typedef {Object} LiveEvent
 * @property {string} label - The event label text.
 * @property {string} title - The event title.
 * @property {string} date - The event date.
 * @property {string} time - The event time.
 * @property {string} buttonText - The button text for the event.
 */

/**
 * Get the list of live events for a given locale.
 * @param {any} [locale=en] - The locale object (defaults to English).
 * @returns {LiveEvent[]}
 */
export function getLiveEvents(locale = en) {
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

/** Default English live events (convenience export) */
export const liveEvents = getLiveEvents(en);