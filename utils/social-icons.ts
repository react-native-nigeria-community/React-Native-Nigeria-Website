// @ts-ignore
import TwitterSVG from "../src/assets/svg/twitter.svg";
// @ts-ignore
import FaceBookSVG from "../src/assets/svg/facebook.svg";
// @ts-ignore
import LinkedInSVG from "../src/assets/svg/linkedIn.svg";
// @ts-ignore
import SlackSVG from "../src/assets/svg/slack.svg";

/** Defines the shape of a feature item */
export interface SocialIcon {
    image: string;
    altText: string;
}

/**
 * Get the list of features for a given locale.
 * @param locale - Locale object (defaults to English).
 * @returns An array of Feature objects.
 */
export function getSocialIcons(): SocialIcon[] {
    return [
        {
            image: LinkedInSVG,
            altText: "LinkedIn-icon",
        },
        {
            image: FaceBookSVG,
            altText: "Facebook-icon",
        },
        {
            image: TwitterSVG,
            altText: "Twitter-icon",
        },
        {
            image: SlackSVG,
            altText: "Slack-icon",
        },
    ];
}

export const socials: SocialIcon[] = getSocialIcons();