import React from "react";
import Logo from "../../atoms/Logo/Logo";
import headerLogoImage from "../../images/logo_white.png";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
    title: "Atom",
    component: Logo,
    decorators: [withKnobs]
};

const options = {
    HEADER_LOGO : {style:"header-link-button",imgSrc:headerLogoImage},
    HOME_LOGO : {style:"", imgSrc:""}
};

export const GlobalLogo = () => {
    const styleParam = select("Position", Object.keys(options), options.HEADER_LOGO.style);
    const imgPath = select("image", Object.keys(options), options.HEADER_LOGO.imgSrc);
    return <Logo style={styleParam} imgSrc={imgPath}/>
};
