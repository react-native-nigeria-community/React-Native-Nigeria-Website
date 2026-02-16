import React from "react";
import TypographyComponent from "./typography";
import CalendarSVG from "../../assets/svg/calendar.svg";
import ClockSVG from "../../assets/svg/clock.svg";
import MarkerSVG from "../../assets/svg/marker.svg";
import ButtonComponent from "./button";
import { useTranslation } from "../../context/useTranslation";
import { Link } from "react-router-dom";

interface PastEventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

const PastEventHighLights: React.FC<PastEventProps> = ({
  id,
  title,
  date,
  time,
  location,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
      
      <TypographyComponent
        as="h4"
        variant="h4"
        className="font-medium leading-none"
      >
        {title}
      </TypographyComponent>

      <div className="pt-6 space-y-4 text-secondary">
        <div className="flex items-center gap-3">
          <img src={CalendarSVG} alt="" className="w-5 h-5" />
          <p className="font-light leading-7 tracking-normal text-p">
            {date}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img src={ClockSVG} alt="" className="w-5 h-5" />
          <p className="font-light leading-7 tracking-normal text-p">
            {time}
          </p>
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
          <ButtonComponent className="mt-2">
            {t.pastEvents.viewDetails}
          </ButtonComponent>
          </Link>
        ): 
        (
        <a href={`/event-details#${id}`}>
          <ButtonComponent className="mt-2">
            {t.pastEvents.viewDetails}
          </ButtonComponent>
        </a>
        )}
      </div>
    </div>
  );
};

export default PastEventHighLights;