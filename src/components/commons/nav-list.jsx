import React from "react";
import {Link} from "react-router-dom";

const NavList = ({ label, link, isActive }) => {
    return (
        <li>
            <Link
                to={link}
                className={`hover:text-bg2 transition-colors duration-200 ${
                    isActive ? "text-bg2 font-semibold border-b-2 border-bg2 pb-1" : "text-primary"
                }`}
            >
                {label}
            </Link>
        </li>
    );
};

export default NavList;