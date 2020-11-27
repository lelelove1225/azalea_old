import React, { Component } from "react";
import HeaderLinks from "../../molecules/HeaderLinks/HeaderLinks";
import { Router } from "react-router-dom";
import * as H from 'history'

export default {title:"molecules", component: HeaderLinks};

export const HeaderTopButtons = () => (
    <Router history={H.createBrowserHistory()}>
        <HeaderLinks />
    </Router>
)