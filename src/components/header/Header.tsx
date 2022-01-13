import React from "react";
import './Header.scss';

interface HeaderProps {
    title: string;
    classname?: string;
}

const Header = (props: HeaderProps) => {


    function renderTitle(): JSX.Element {
        return (
            <div className='title title-ellipsis font-weight-bold'>
                {props.title}
            </div>
        );
    }
    return (
        <div className='header w-100 text-center p-3 border-bottom'>
            {renderTitle()}
        </div>
    );

}

export default Header;