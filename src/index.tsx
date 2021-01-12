import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Components/Dashboard";
import {MainContainer} from "./Styles/Common";

const App = () => <MainContainer><Dashboard/></MainContainer>;

ReactDOM.render(<App/>, document.getElementById("root"));