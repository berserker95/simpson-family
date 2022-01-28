import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Header.scss';


interface HeaderProps {
    headerClass?: string,
    id?: string
}

const Header = (props: HeaderProps) => {

    return (
        <header id={`${props.id}`} className={`${props.headerClass}`}>
        </header>
    );

}

export default Header;