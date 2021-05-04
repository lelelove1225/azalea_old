import React, { FunctionComponent } from "react"
import LinkButton from "../../atoms/LinkButton/LinkButton"
import "./HeaderLinks.css"

const HeaderLinks: FunctionComponent = () => {
    const result = (
        <div>
            <ul>
                <li><LinkButton linkTarget={"/"} style={"header-link-button"} message={"HOME"} /></li>
                <li><LinkButton linkTarget={"/blog"} style={"header-link-button"} message={"BLOG"} /></li>
                <li><LinkButton linkTarget={""} style={"header-link-button"} message={"HOME"} /></li>
                <li><LinkButton linkTarget={""} style={"header-link-button"} message={"HOME"} /></li>
            </ul>
        </div>
    );
    return result;
};

export default HeaderLinks;