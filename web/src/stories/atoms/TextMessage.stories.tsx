import React from "react";
import {withKnobs, text, select} from "@storybook/addon-knobs";
import TextMessage from "../../atoms/TextMessage/TextMessage"

export default {
    title:"Atom", 
    component: TextMessage,
    decorators: [withKnobs]
};

const options = {
    HEADER : "header-link-button",
    NONE : ""
};

export const Text_Message = () => {
    return(
        <TextMessage style={select("style",options, "")} message={text("本文","test")} />
    )
}