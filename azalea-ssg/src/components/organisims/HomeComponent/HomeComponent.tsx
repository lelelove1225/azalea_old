import React, { FunctionComponent } from "react"
import "./HomeComponent.css";
import Logo from "../../atoms/Logo/Logo"

const HomeComponent: FunctionComponent = () => {
    const logoStyle = "Home-Message-Image"
    const logoStyleSub = "Home-Message-Image-Sub"
    const lelelogo = "../../../images/lelelove_white.png"
    const lelelogo2 = "../../../images/lelelove_copy_white.png"
    //FIXME
    const result = (
        <div className={"Home-Background"}>
            <div className={"Home-Layout"}>
                <Logo style={logoStyle} imgSrc={lelelogo} />
                <Logo style={logoStyleSub} imgSrc={lelelogo2} />
            </div>
        </div>
    );
    return result;
};

export default HomeComponent;