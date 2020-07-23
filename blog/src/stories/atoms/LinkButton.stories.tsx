import React, { Component } from "react";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import {withKnobs, text, select} from "@storybook/addon-knobs";

export default {
    title:"Atom", 
    component: LinkButton,
    decorators: [withKnobs]
};

const options = {
    HEADER : "header-links",
    NONE : ""
}

export const Link = () => <LinkButton linkTarget={""} style={select("style",options, "")}  message={text('text', 'button')}  />