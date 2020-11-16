import React from "react";
import Header from "../../organisims/Header/Header";
import { Router } from "react-router-dom";
import * as H from 'history'

export default {title:"Organisms-Hearder"};

export const GlobalHeader = () => (
    <Router history={H.createBrowserHistory()}>
        <Header />
    </Router>
)