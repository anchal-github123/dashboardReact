import React from "react";
import { NavLink } from "react-router-dom";
function Menu()
{
    return(
    <>
<section className="Section-menu">
            <div className="container">
                <div className="menu-Heading">
                <h1 className="heading">Store</h1>

                </div>
                <div className="menu-items">
                <ul>
               <li className="item">
               <i class="fa-solid fa-chart-line"></i>
               Dashboard</li>
               <li className="item">
               <i class="fa-solid fa-business-time"></i>
               Products</li>
               <li className="item">
               <i class="fa-solid fa-list"></i>
               Categories</li>
               <li className="item">
               <i class="fa-solid fa-person-dress"></i>Customer</li>
               </ul>

                </div>
            </div>
         
        </section>
    </>)
}
export default Menu;