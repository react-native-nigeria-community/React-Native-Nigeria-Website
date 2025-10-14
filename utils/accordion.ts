/** Defines the shape of a feature item */
export interface Accordion {
    title: string;
    content: string;
}

/**
 * Get the list of features for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Feature objects.
 */
export function getAccordions(): Accordion[] {
    return [
        {
            title: "Who can join the community?",
            content: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
        },
        {
            title: "Is membership free?",
            content: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
        },
        {
            title: " Do I need prior experience with React Native?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
        {
            title: "How do I get updates on events and activities?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
        {
            title: "Can I showcase my React Native projects?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
    ];
}

export const accordions: Accordion[] = getAccordions();