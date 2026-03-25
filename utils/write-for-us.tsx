interface WriteUp {
  title: string;
  description: string;
  link: string;
}

export const getWriteUps = (t: any): WriteUp[] => [
    {
        title: t?.sixthSection?.communityCard?.communityCard1?.title,
        description: t?.sixthSection?.communityCard?.communityCard1?.description,
        link: t?.sixthSection?.communityCard?.communityCard1?.link,
    },
    {
        title: t?.sixthSection?.communityCard?.communityCard2?.title,
        description: t?.sixthSection?.communityCard?.communityCard2?.description,
        link: t?.sixthSection?.communityCard?.communityCard2?.link,
    },
    {
        title: t?.sixthSection?.communityCard?.communityCard3?.title,
        description: t?.sixthSection?.communityCard?.communityCard3?.description,
        link: t?.sixthSection?.communityCard?.communityCard3?.link,
    },
];