import React, { useEffect, useState } from "react";


import './Navbar.scss';


interface NavbarProps {
    navbarClass?: string,
    id?: string
}

const Navbar = (props: NavbarProps) => {

    return (
        <nav id={`${props.id}`} className={`${props.navbarClass} navbar navbar-light border-bottom bg-light`}>
            <div className="container justify-content-center">
                <div className="logo"></div>
            </div>
        </nav>
    );

}

export default Navbar;