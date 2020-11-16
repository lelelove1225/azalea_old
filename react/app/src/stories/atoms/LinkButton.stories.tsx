import React, { Component } from "react";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import {withKnobs, text, select} from "@storybook/addon-knobs";
import { Router } from "react-router-dom";
import * as H from 'history'

export default {
    title:"Atom", 
    component: LinkButton,
    decorators: [withKnobs]
};

const options = {
    HEADER : "header-link-button",
    NONE : ""
}

export const Link_Button = () => (
    <Router history={H.createBrowserHistory()}>
        <LinkButton linkTarget={""} style={select("style",options, "")}  message={text('text', 'button')}  />
    </Router>
);