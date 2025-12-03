// src/components/commons/past-events.jsx
import TypographyComponent from "./typography.jsx";
import CalendarSVG from "../../assets/svg/calendar.svg";
import ClockSVG from "../../assets/svg/clock.svg";
import MarkerSVG from "../../assets/svg/marker.svg";
import ButtonComponent from "./button.jsx";
import React from "react";

const PastEventHighLights = ({ id, title, date, time, location }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between h-[340px] w-full shadow-sm">
      <div>
        <TypographyComponent as={"h4"} variant={"h4"} className={"leading-none font-medium"}>
          {title}
        </TypographyComponent>

        <div className="pt-6 text-secondary space-y-4">
          <div className="flex items-center gap-3">
            <img src={CalendarSVG} alt="" className="h-5 w-5" />
            <p className="text-p leading-7 tracking-normal font-light">{date}</p>
          </div>

          <div className="flex items-center gap-3">
            <img src={ClockSVG} alt="" className="h-5 w-5" />
            <p className="text-p leading-7 tracking-normal font-light">{time}</p>
          </div>

          <div className="flex items-center gap-3">
            <img src={MarkerSVG} alt="" className="h-5 w-5" />
            <p className="text-p leading-7 tracking-normal font-light">{location}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <a href={`/eventdetails#${id}`}>
          <ButtonComponent className="mt-2">View Details</ButtonComponent>
        </a>
      </div>
    </div>
  );
};

export default PastEventHighLights;
