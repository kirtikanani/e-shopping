import React from "react";
import Link from "next/link";

export default function Header(){
    
    return(
    <div className="float-left w-100">
        <div className="bg_main">
            <div className="container">
                <div className="row top_menu_sm">
                    <div className="col-lg-12 col-md-12 d-flex justify-content-end ">
                        <div className="top_menubar">
                            <ul className="top_menuUl d-flex">
                                <li><a href="#">Email : info@ajinfosoft.com</a></li>
                                <li><a href="#">Support : 8511122186</a></li>
                                <li><a href="#">Sell On ajinfosoft.buyerszone.in</a></li>
                                <li><a href="#"><i className="fas fa-mobile-alt"></i> Download App</a></li>
                            </ul>
                            <div>
                                <div className="ps-3">
                                    <select className="top_select">
                                        <option defaultValue="">Select Language</option>
                                        <option defaultValue="bn">Bengali</option>
                                        <option defaultValue="gu">Gujarati</option>
                                        <option defaultValue="hi">Hindi</option>
                                        <option defaultValue="kn">Kannada</option>
                                        <option defaultValue="ml">Malayalam</option>
                                        <option defaultValue="mr">Marathi</option>
                                        <option defaultValue="pa">Punjabi</option>
                                        <option defaultValue="ta">Tamil</option>
                                        <option defaultValue="te">Telugu</option>
                                        <option defaultValue="ur">Urdu</option>
                                    </select>
                                    <span className="top_gadget"> Powered by </span>
                                    <span style={{whiteSpace: 'no-wrap'}}><a className="goog_logo_link"
                                            href="https://translate.google.com" target="_blank"><img
                                                src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                                                width="37px" height="14px" style={{paddingRight: 3}}
                                                alt="Google Translate" />Translate</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border_bottom"></div>
                </div>

                <div className="border_bottom hide"></div>
                <div className="row top_logoMenu  justify-content-between align-items-center d-flex">
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 ">
                        <Link href="/">
                            <img src="./images/main_logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 top_search">
                        <div className="mobile_search search-input2">
                            <div className="header-search">
                                <form target="_blank" method="get" action="search.php" id="top-search-form2">
                                    <input type="text" name="src" id="mobile_search2" autoComplete="new-password"
                                        className="search-input form-control" placeholder="Search..." defaultValue="" required="" />
                                    <ul id="mobileResult"></ul>
                                    <button type="submit" className="search-button"><i className="fas fa-search"></i>
                                        <span> Search </span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-6  col-sm-6 col-md-4  col-lg-4  d-flex justify-content-end">
                        <div className="logo_lists logo-lists-two">
                            <ul className="d-flex align-items-center">
                                <li className="my-account myBtn_1" id="myBtn_1" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <a href="#" className="login-pop">
                                        <i className="far fa-user-circle"></i>
                                    </a>
                                </li>
                                <li className="like-btn"><a href="#" id="wishCount" data-bs-toggle="modal"
                                        data-bs-target="#like_exampleModal"><i className="fas fa-heart"></i></a></li>
                                <li className="compareing"><a href="#" id="compaCount"><i className="fas fa-list"></i></a></li>
                                <li className="shopping-bag">
                                <Link href="/Cart"><a href="#" id="CartCount"><i className="fas fa-shopping-bag"></i>
                                        <div className="cart-count">1</div>
                                    </a></Link>
                                    <div className="shopping-popup">
                                        <div>
                                            <div className="view-cart">
                                                <h6>1 ITEMS <a href="cart.php" className="float-right">
                                                        <h6>VIEW CART</h6>
                                                    </a></h6>
                                            </div>
                                            <ul>
                                                <li
                                                    className="d-flex align-items-center justify-content-between m-0 position-relative">
                                                    <div><a href="#">
                                                            <h6 className="mb-2">Test Demo Product 3</h6>
                                                        </a>
                                                        <div>1 × ₹ 90.00</div>
                                                    </div>
                                                    <div><a href="#"><img src="./images/cloth_10.jpg" width="80"
                                                                height="80" /></a></div>
                                                </li>
                                            </ul>
                                            <div className="view-cart border-0">
                                                <h6>SUBTOTAL: <span className="float-right">₹90</span></h6>
                                            </div>
                                            <div className="view-cart border-0">
                                            <Link href="/Cheack_Demo"><a href="checkout.php" className="btn btn-block checkout">CHECKOUT</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><span style={{fontSize:30,cursor:"pointer"}} className="menu_toggle"
                                        onClick="openNav()">&#9776;
                                    </span>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container sm_searchbar hide">
            <div className="mobile_search search-input2">
                <div className="header-search">
                    <form target="_blank" method="get" action="search.php" id="top-search-form">
                        <input type="text" name="src" id="mobile_search" autoComplete="off"
                            className="search-input form-control" placeholder="Search..." defaultValue="" required="" />
                        <ul id="mobileResult"></ul>
                        <button type="submit" className="search-button"><i className="fas fa-search"></i>
                            <span>Search</span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    
    );
}