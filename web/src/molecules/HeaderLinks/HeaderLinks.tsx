import React, { FunctionComponent } from "react"
import LinkButton from "../../atoms/LinkButton/LinkButton"
import "./HeaderLinks.css"

const HeaderLinks : FunctionComponent = () =>{
    const result = (
        <div>
            <ul>
            <LinkButton linkTarget={"/"} style={"header-link-button"} message={"HOME"} />
            <LinkButton linkTarget={"/blog"} style={"header-link-button"} message={"BLOG"} />
            <LinkButton linkTarget={""} style={"header-link-button"} message={"HOME"} />
            <LinkButton linkTarget={""} style={"header-link-button"} message={"HOME"} />
            </ul>
        </div>
    );
    return result;
};

export default HeaderLinks;