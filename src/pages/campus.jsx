import { TypeAnimation } from "react-type-animation";
import TypographyComponent from "../components/commons/typography.jsx";
import eventDetails from "../../utils/event-details";
import { useTranslation } from "../context/useTranslation.jsx";
import { ImageStrip } from "../components/commons/image-carousel.jsx";

function Campus() {
  const { t } = useTranslation();
  const images = eventDetails.flatMap((item) => item.images);

  return (
    <>
      {/* First section */}
      <section
        className={
          "lg:bg-bg1 bg-[url(./assets/img/mb-blue.webp)] lg:bg-[url(./assets/img/lg-bg-screen.webp)] bg-no-repeat bg-bottom bg-contain h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"
        }
      >
        <div className={"gird justify-items-center content-center"}>
          <div
            className={
              "px-6 space-y-3 lg:w-[758px] text-secondary lg:text-primary"
            }
          >
            <p className="font-semibold leading-none lg:leading[60px] lg:font-medium text-[40px] tracking-[-0.125rem] md:text-h1">
              {/* Mobile view */}
              <span className={"lg:hidden"}>
                {t.eventPage.fifthSection.pageTitle}
              </span>

              {/* Desktop view */}
              <TypeAnimation
                key={t.eventPage.fifthSection.pageTitle}
                sequence={[t.eventPage.fifthSection.pageTitle]}
                speed={50}
                repeat={1}
                cursor={false}
                className={"hidden lg:block"}
                preRenderFirstString={false}
              />
            </p>
            <p
              className={
                "leading-5 text-secondary lg:text-primary tracking-normal text-[16px] lg:text-[14px]"
              }
            >
              {t.eventPage.firstSection.slogan}
            </p>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className={"px-6 py-12 space-y-6"}>
        <div className={"lg:flex lg:justify-center lg:mx-[125px]"}>
          <div className={"py-6"}>
            <TypographyComponent
              as={"h3"}
              variant={"h3"}
              className={"text-mh3!"}
            >
              {t.eventPage.fifthSection.title}
            </TypographyComponent>
            <TypographyComponent as={"h5"} className={"text-mh5!"}>
              {t.eventPage.fifthSection.commitment} <br />{" "}
              {t.eventPage.fifthSection.beyond}
              <br /> <br />
              {t.eventPage.fifthSection.through}{" "}
              <strong>{t.eventPage.fifthSection.title}</strong>{" "}
              {t.eventPage.fifthSection.initiative}
              <br />
              <br />
              <ul className="space-y-4 text-lg list-disc list-inside marker:text-[#5FDBFC]">
                <li>{t.eventPage.fifthSection.institutionBenefits.benefit1}</li>
                <li>{t.eventPage.fifthSection.institutionBenefits.benefit2}</li>
                <li>{t.eventPage.fifthSection.institutionBenefits.benefit3}</li>
              </ul>
            </TypographyComponent>

            <div className="p-6 my-8 border-l-4 border-[#5FDBFC] rounded-r-lg bg-blue-50">
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="mb-2 font-semibold text-[#5FDBFC]">
                    {t.eventPage.fifthSection.goals.title}
                  </p>
                  <ul className="space-y-4 text-lg list-disc list-inside marker:text-black">
                    <li>{t.eventPage.fifthSection.goals.goal1}</li>
                    <li>{t.eventPage.fifthSection.goals.goal2}</li>
                    <li>{t.eventPage.fifthSection.goals.goal3}</li>
                    <li>{t.eventPage.fifthSection.goals.goal4}</li>
                  </ul>
                </div>
              </div>
            </div>

            <TypographyComponent as={"h5"} className={"text-mh5!"}>
              {t.eventPage.fifthSection.collaboration}{" "}
              <a
                href={`mailto:${t.eventPage.fifthSection.email}`}
                className="font-medium text-[#5FDBFC] hover:underline"
              >
                {t.eventPage.fifthSection.email}
              </a>
            </TypographyComponent>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section data-reveal data-reveal-delay="120" className="px-6 py-12">
        <div className="lg:flex lg:justify-center lg:mx-[125px]">
          <div className="flex flex-col w-full p-6 overflow-hidden bg-white border rounded-2xl border-slate-200 shadow-card">
            <div>
              <h3 className="text-lg font-bold md:text-xl text-slate-900">
                {t.eventPage.fifthSection.carousel.title}
              </h3>
              <p className="text-sm text-slate-600">
                {t.eventPage.fifthSection.carousel.description}
              </p>
            </div>

            <div className="h-64 mt-6 overflow-hidden">
              <div className="relative h-full">
                <div className="absolute top-0 left-0 z-10 w-8 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="absolute top-0 right-0 z-10 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />
                <div className="flex items-center h-full gap-4 animate-marquee">
                  <ImageStrip images={images} />
                  <ImageStrip images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Campus;
