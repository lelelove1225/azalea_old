import React, { FunctionComponent } from "react"
import { Link, Router } from "react-router-dom"
import "./LinkButton.css"
import * as H from "history"

type Props = {
    linkTarget: string,
    style: string,
    message: string
};

const LinkButton : FunctionComponent<Props> = (Props) => {
    return (
        <Router history={H.createBrowserHistory()}>
            <Link to={Props.linkTarget} className={Props.style}>{Props.message}</Link>
        </Router>
    )
};

export default LinkButton;