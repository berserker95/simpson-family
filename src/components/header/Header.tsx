import React from "react";
import './Header.scss';



const Header = () => {

    const title: string = 'Elenco volantini';

    function renderTitle(): JSX.Element {
        return (
            <div className='title font-weight-bold'>
                {title}
            </div>
        );
    }
    return (
        <div className='header w-100 text-center p-3'>
            {renderTitle()}
        </div>
    );

}

export default Header;