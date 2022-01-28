import React from "react";
import './Footer.scss';


interface FooterProps {
    footerClass?: string
}

const Footer = (props: FooterProps) => {
    return (
        <div className={`${props.footerClass}`}>
        </div>
    );
}
export default Footer;