import React, { FunctionComponent } from "react"
import LinkButton from "../../atoms/LinkButton/LinkButton"
import "./HeaderLinks.css"

const TopButtons : FunctionComponent = () =>{
    const result = (
        <div>
            <LinkButton linkTarget={""} style={"header-links"} message={"HOME"} />
            <LinkButton linkTarget={""} style={"header-links"} message={"HOME"} />
            <LinkButton linkTarget={""} style={"header-links"} message={"HOME"} />
            <LinkButton linkTarget={""} style={"header-links"} message={"HOME"} />
        </div>
    );
    return result;
};

export default TopButtons;