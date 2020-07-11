import React from "react";
import Logo from "../../atoms/Logo/Logo";
import image from "../../images/logo_white.png";

export default {title: "Atom-Logo", component: Logo};

export const GlobalLogo = () => <Logo style={""} imgSrc={image}/>;
