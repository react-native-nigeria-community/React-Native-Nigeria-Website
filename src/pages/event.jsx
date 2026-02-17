import { TypeAnimation } from "react-type-animation";
import TypographyComponent from "../components/commons/typography.jsx";
import PastEventHighLights from "../components/commons/past-events.jsx";
import eventDetails from "../../utils/event-details";
import { useTranslation } from "../context/useTranslation.jsx";

function Events() {
  const { t } = useTranslation();

  return (
    <>
      {/* First section */}
      <section
        className={
          "lg:bg-bg1 bg-[url(./assets/img/mb-blue.png)] lg:bg-[url(./assets/img/lg-bg-screen.png)] bg-no-repeat bg-bottom bg-contain h-[366px] lg:h-[655px] flex items-center justify-center text-center lg:w-full"
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
                {t.eventPage.firstSection.title1}
              </span>

              {/* Desktop view */}
              <TypeAnimation
                key={t.eventPage.firstSection.title2}
                sequence={[t.eventPage.firstSection.title2]}
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
              {t.eventPage.fourthSection.title}
            </TypographyComponent>

            <div
              className={
                "py-6 grid md:grid-cols-3 gap-6 justify-items-stretch items-stretch"
              }
            >
              {eventDetails.map((list) => (
                <PastEventHighLights
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  date={list.date}
                  time={list.time}
                  location={list.location}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
