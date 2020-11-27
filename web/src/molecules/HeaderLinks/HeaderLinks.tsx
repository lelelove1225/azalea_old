import React, { FunctionComponent } from "react"
import LinkButton from "../../atoms/LinkButton/LinkButton"
import "./HeaderLinks.css"

const HeaderLinks : FunctionComponent = () =>{
    const result = (
        <div className={"header_Links"}>
            <LinkButton linkTarget={"/"} style={"header-link-button"} message={"HOME"} />
            <LinkButton linkTarget={"/blog"} style={"header-link-button"} message={"HOME"} />
            <LinkButton linkTarget={""} style={"header-link-button"} message={"HOME"} />
            <LinkButton linkTarget={""} style={"header-link-button"} message={"HOME"} />
        </div>
    );
    return result;
};

export default HeaderLinks;