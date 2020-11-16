import React, { FunctionComponent } from "react"
import Logo from "../../atoms/Logo/Logo";
import HeaderLinks from "../../molecules/HeaderLinks/HeaderLinks"
import logoWhite from "../../images/logo_white.png";
import "./Header.css";

const Header : FunctionComponent = () =>{
    return (
        <header className={"Header-logo"}>
            <Logo style={"top"} imgSrc={logoWhite} />
            <HeaderLinks />
        </header>
    );
}

export default Header;