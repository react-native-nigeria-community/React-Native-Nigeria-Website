import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavList = ({ label, link, isActive }) => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const lang = params.get("lang");

  const linkWithLang = lang ? `${link}?lang=${lang}` : link;
  return (
    <li>
      <Link
        to={linkWithLang}
        className={`hover:text-bg2 transition-colors duration-200 ${
          isActive
            ? "text-bg2 font-semibold border-b-2 border-bg2 pb-1"
            : "text-primary"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavList;
