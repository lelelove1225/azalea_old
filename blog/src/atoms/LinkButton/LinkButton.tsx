import React, { FunctionComponent } from "react"
import "./LinkButton.css"

type Props = {
    linkTarget: string,
    style: string,
    message: string
};

const LinkButton : FunctionComponent<Props> = (Props) => {
    return <a href={Props.linkTarget} className={Props.style}>{Props.message}</a>
};

export default LinkButton;