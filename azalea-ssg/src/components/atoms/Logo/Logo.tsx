import React, { FunctionComponent } from "react"
import "./Logo.css"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
    style: string,
    imgSrc: string
};

const Logo: FunctionComponent<Props> = (Props) => {
    return <StaticImage
        src={Props.imgSrc}
        formats={["auto", "webp", "avif"]}
        alt=""
        className={Props.style}
    />
};

export default Logo;