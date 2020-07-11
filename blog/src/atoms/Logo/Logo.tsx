import React, { FunctionComponent } from "react"
import "./Logo.css"

type Props = {
    style: string,
    imgSrc: string
}

const Logo : FunctionComponent<Props> = (Props) =>{
    return <img className={Props.style} src={Props.imgSrc} />;
};

export default Logo;