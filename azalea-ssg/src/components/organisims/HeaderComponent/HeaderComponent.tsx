import React, { FunctionComponent } from "react"
import Logo from "../../atoms/Logo/Logo";
import HeaderLinks from "../../molecules/HeaderLinks/HeaderLinks"
import "./HeaderComponent.css";

const HeaderComponent: FunctionComponent = () => {
    const logoWhite: string = "../../images/logo_white.png"
    return (
        <header className={"Header-logo"}>
            <Logo style={"top"} imgSrc={logoWhite} />
            <HeaderLinks />
        </header>
    );
}

export default HeaderComponent;