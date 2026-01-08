export const getNavLinks = (t) => [
    {
        label: t?.navHome || "Home", 
        link: "/",
    },
    {
        label: t?.navAbout || "About Us",
        link: "/about-us",
    },
    {
        label: t?.navEvent || "Events",
        link: "/events",
    },
    {
        label: t?.navContact || "Contact",
        link: "/contact",
    },
];