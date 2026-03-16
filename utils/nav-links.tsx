interface NavLink {
  label: string;
  link: string;
}

export const getNavLinks = (t: any): NavLink[] => [
    {
        label: t?.navHome,
        link: "/",
    },
    {
        label: t?.navAbout,
        link: "/about-us",
    },
    {
        label: t?.navEvent,
        link: "/events",
    },
     {
        label: t?.navCampus,
        link: "/campus",
    },
    {
        label: t?.navNewsletter,
        link: "/newsletters"
    },
    {
        label: t?.navContact,
        link: "/contact",
    },
];

