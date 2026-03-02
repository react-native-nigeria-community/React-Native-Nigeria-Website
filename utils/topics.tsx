import Topic1PNG from "../src/assets/img/topics/topic-1.png";
import Topic2PNG from "../src/assets/img/topics/topic-2.png";
import Topic3PNG from "../src/assets/img/topics/topic-3.png";
interface Topic {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const getTopics = (t: any): Topic[] => [
    {
        image: Topic1PNG,
        title: t?.thirdSection?.medium?.title,
        description: t?.thirdSection?.medium?.description1,
        link: t?.thirdSection?.medium?.link1,
    },
    {
        image: Topic2PNG,
        title: t?.thirdSection?.medium?.title,
        description: t?.thirdSection?.medium?.description2,
        link: t?.thirdSection?.medium?.link2,
    },
    {
        image: Topic3PNG,
        title: t?.thirdSection?.medium?.title,
        description: t?.thirdSection?.medium?.description3,
        link: t?.thirdSection?.medium?.link3,
    },
];