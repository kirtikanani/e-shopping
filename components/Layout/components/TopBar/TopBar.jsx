import React from "react";
import Link from "next/link";
const ROUTE_Home = "/Clothing";

export default function TopBar(){
    return(
        <div className="nav_shadow">
            <div className="container">
                <div className="row">
                    <div>
                        <div className="col-lg-12 col-md-12 main_menu">
                            <div id="mySidenav" className="sidenav">
                                <a href="#" className="closebtn hide" onClick="closeNav()">&times;</a>
                                <Link href={{pathname: ROUTE_Home }}>Clothing</Link>
                                <Link href="/">Vegetables</Link>
                                <a href="#">Furniture</a>
                                <a href="#">Accessories</a>
                                <a href="#">Kitchen</a>
                                <a href="#">Dress</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}