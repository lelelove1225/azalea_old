import React, { FunctionComponent } from "react"
import "./Home.css";
import Logo from "../../atoms/Logo/Logo"
import Lelelogo from "../../images/lelelove_white.png"
import LelelogoCopy from "../../images/lelelove_copy_white.png"

const Home : FunctionComponent = () =>{
    const logoStyle = "Home-Message-Image"
    const logoStyleSub = "Home-Message-Image-Sub"
    //FIXME
    const result = (
        <div className={"Home-Background"}>
            <div className={"Home-Layout"}>
                 <Logo style={logoStyle} imgSrc={Lelelogo} />
                 <Logo style={logoStyleSub} imgSrc={LelelogoCopy} />
            </div>
        </div>
    );
    return result;
};

export default Home;