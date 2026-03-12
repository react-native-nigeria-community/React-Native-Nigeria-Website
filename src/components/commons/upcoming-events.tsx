import React from "react";
import TypographyComponent from "./typography";
import CalendarSVG from "../../assets/svg/calendar.svg";
import ClockSVG from "../../assets/svg/clock.svg";
import MarkerSVG from "../../assets/svg/marker.svg";
import ButtonComponent from "./button";
import { useTranslation } from "../../context/useTranslation";
import { Link } from "react-router-dom";
import CountdownTimer from "./countdown-timer";

interface UpcomingEventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const UpcomingEventHighLights: React.FC<UpcomingEventProps> = ({
  id,
  title,
  date,
  time,
  location,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${date === "TBA" ? " grayscale" : ""} flex flex-col w-full p-8 bg-gradient-tint glow-shadow border-5  border-bg2 rounded-xl`}
    >
      <div>
        {date === "TBA" ? (
          <p className="pill mb-4">Coming Soon</p>
        ) : (
          <CountdownTimer targetDate={date} />
        )}
      </div>

      <div className="h-full">
        <TypographyComponent
          as="h4"
          variant="h4"
          className="font-medium leading-none"
        >
          {title}
        </TypographyComponent>
        {id === "event6" && (
          <p>{description}</p>
        )}
      </div>
      <div className="pt-6 space-y-4 text-[#121212]">
        <div className="flex items-center gap-3">
          <img src={CalendarSVG} alt="" className="w-5 h-5" />
          <p className="font-light leading-7 tracking-normal text-p">{date}</p>
        </div>

        <div className="flex items-center gap-3">
          <img src={ClockSVG} alt="" className="w-5 h-5" />
          <p className="font-light leading-7 tracking-normal text-p">{time}</p>
        </div>

        <div className="flex items-center gap-3">
          <img src={MarkerSVG} alt="" className="w-5 h-5" />
          <p className="font-light leading-7 tracking-normal text-p">
            {location}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-auto">
        {id === "event6" ? (
          <Link to="/campus">
            <ButtonComponent className="mt-2  text-black shadow-[0_0_15px_rgba(88,213,243,0.4)] hover:scale-105 transition-transform">
              {t.upcomingEvents.viewDetails}
            </ButtonComponent>
          </Link>
        ) : (
          <a href={`/event-details#${id}`}>
            <ButtonComponent className="mt-2 text-black shadow-[0_0_15px_rgba(88,213,243,0.4)] hover:scale-105 transition-transform">
              {t.upcomingEvents.viewDetails}
            </ButtonComponent>
          </a>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventHighLights;
