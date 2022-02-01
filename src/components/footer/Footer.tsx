import React from "react";
import './Footer.scss';


interface FooterProps {
    footerClass?: string,
    id?: string
}

const Footer = (props: FooterProps) => {
    return (
        <footer id={`${props.id}`} className={`${props.footerClass} bg-light w-100 text-center position-absolute bottom-0 border-top`}>
            <div className="container">
                <div className="row">
                    <div className="copyright p-3">
                        © Copyright 2022. All rights reserved. Powered by
                         <a href="https://www.linkedin.com/in/giovannialbano1995/" rel="noreferrer" target={'_blank'} className="fw-bold text-decoration-none"> Giovanni Albano</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;