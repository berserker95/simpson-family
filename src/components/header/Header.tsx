import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DarkModeToggle } from "react-dark-mode-toggle-2";

import './Header.scss';


interface HeaderProps {
    headerClass?: string,
}

const Header = (props: HeaderProps) => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <header className={`${props.headerClass} p-4`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="profile-container col d-flex align-items-center flex-wrap">
                        <div className="profile-img rounded-circle"></div>
                        <div className="profile-content">
                            <h1 className="name font-size-38 font-weight-bold">Giovanni Albano</h1>
                            <h2 className="role font-size-24 font-weight-400">Front-end developer</h2>
                            <ul className="social d-flex list-unstyled">
                                <li><a className="d-inline-block text-center rounded-circle" href="https://www.linkedin.com/in/giovanni-albano-14a2a0194" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="font-size-20 mt-8" /></a></li>
                                <li><a className="d-inline-block text-center rounded-circle" href="https://github.com/berserker95" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'github-alt']} className="font-size-20 mt-8" /></a></li>
                                <li><a className="d-inline-block text-center rounded-circle" href="https://www.instagram.com/ber_serker95" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'instagram']} className="font-size-20 mt-8" /></a></li>
                                <li><a className="d-inline-block text-center rounded-circle" href="https://www.facebook.com/giovanni.albano.353" rel='noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'facebook']} className="font-size-20 mt-8" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-auto">
                        <div className="dark-mode-switch d-flex justify-content-center">
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                isDarkMode={isDarkMode}
                                size={55}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;