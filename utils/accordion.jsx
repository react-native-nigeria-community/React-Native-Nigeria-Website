import en from "../src/locales/en.js";

const t = (keyPath) => {
  return keyPath
    .split(".")
    .reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : keyPath), en);
};

export const getAccordions = [
  {
    title: t("faqAccordion.whoCanJoin.title"),
    content: {
      type: "text",
      value: t("faqAccordion.whoCanJoin.content"),
    },
  },
  {
    title: t("faqAccordion.isMembershipFree.title"),
    content: {
      type: "text",
      value: t("faqAccordion.isMembershipFree.content"),
    },
  },
  {
    title: t("faqAccordion.needPriorExperience.title"),
    content: {
      type: "text",
      value: t("faqAccordion.needPriorExperience.content"),
    },
  },
  {
    title: t("faqAccordion.getUpdates.title"),
    content: {
      type: "jsx",
      value: () => (
        <p>
          {t("faqAccordion.getUpdates.content")}
          <a
            href={t("faqAccordion.getUpdates.newsletter.url")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("faqAccordion.getUpdates.newsletter.text")}
          </a>
          ,{" "}
          <a
            href={t("faqAccordion.getUpdates.slack.url")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("faqAccordion.getUpdates.slack.text")}
          </a>
          ,{" "}
          <a
            href={t("faqAccordion.getUpdates.whatsapp.url")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("faqAccordion.getUpdates.whatsapp.text")}
          </a>
          , {t("faqAccordion.getUpdates.andFollowing")}
        </p>
      ),
    },
  },
  {
    title: t("faqAccordion.showcaseProjects.title"),
    content: {
      type: "links",
      value: [
        {
          label: t("faqAccordion.showcaseProjects.guideline.label"),
          url: t("faqAccordion.showcaseProjects.guideline.url"),
        },
      ],
    },
  },
];