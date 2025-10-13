import React from "react";

const NavList = ({label, link}) => {
    return (
        <li className="px-auto py-2.5 text-nowrap hover:text-primary hover:font-semibold">
            <a href={link}>{label}</a>
        </li>
    );
}

export default NavList;