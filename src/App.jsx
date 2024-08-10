import React from "react";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import { Routes,Route } from "react-router-dom";
function App()
{
    return(
    <>
    <section className="Main">
    <div className="container grid grid-col-two">

        <Menu></Menu>
        
        <Dashboard></Dashboard>
        </div>
    </section>
    </>
    )
}
export default App;