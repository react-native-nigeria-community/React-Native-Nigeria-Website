interface LiveEvent {
  label: string;
  title: string;
  date: string;
  time: string;
  buttonText: string;
  buttonLink: string;
}

export const getLiveEvents = (t: any): LiveEvent[] => [
    {
        label: t?.fourthSection?.eventCards?.eventCard1?.smallText,
        title: t?.fourthSection?.eventCards?.eventCard1?.title,
        date: t?.fourthSection?.eventCards?.eventCard1?.date,
        time: t?.fourthSection?.eventCards?.eventCard1?.time,
        buttonText: t?.fourthSection?.eventCards?.eventCard1?.buttonText,
        buttonLink: t?.fourthSection?.eventCards?.eventCard1?.buttonLink,
    },
    {
        label: t?.fourthSection?.eventCards?.eventCard2?.smallText,
        title: t?.fourthSection?.eventCards?.eventCard2?.title,
        date: t?.fourthSection?.eventCards?.eventCard2?.date,
        time: t?.fourthSection?.eventCards?.eventCard2?.time,
        buttonText: t?.fourthSection?.eventCards?.eventCard2?.buttonText,
        buttonLink: t?.fourthSection?.eventCards?.eventCard2?.buttonLink,
    },
    {
        label: t?.fourthSection?.eventCards?.eventCard3?.smallText,
        title: t?.fourthSection?.eventCards?.eventCard3?.title,
        date: t?.fourthSection?.eventCards?.eventCard3?.date,
        time: t?.fourthSection?.eventCards?.eventCard3?.time,
        buttonText: t?.fourthSection?.eventCards?.eventCard3?.buttonText,
        buttonLink: t?.fourthSection?.eventCards?.eventCard3?.buttonLink,
    },
];