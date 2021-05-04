import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import "./LinkButton.css"

type Props = {
    linkTarget: string,
    style: string,
    message: string
};

const LinkButton: FunctionComponent<Props> = (Props) => {
    return (
        <Link to={Props.linkTarget} ><button className={Props.style}>{Props.message}</button></Link>
    )
};

export default LinkButton;