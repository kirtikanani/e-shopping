import React from "react";
import Link from "next/link";
export default function Footer(){
    return(
        <div className="float-left w-100">
            <footer>
                <div className="bg_footer pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-4">
                                <div className="footer-widget help">
                                    <h2 className="theme_combi_color">Policy</h2>
                                    <ul>
                                        <li><Link href="/Privacy">Privacy Policy</Link></li>
                                        <li><a href="#">Payments &amp;
                                                Logistics</a></li>
                                        <li><a href="#">Return &amp;
                                                Cancellation</a></li>
                                        <li><a href="#">Service &amp;
                                                Supports</a></li>
                                        <li><a href="#">FAQ's</a></li>
                                        <li><Link href="/Privacy">privacy policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 footer-po-ab-ac">
                                <div className="footer-widget policy">
                                    <h2 className="theme_combi_color">About</h2>
                                    <ul>
                                        <li><a href="#">Vision</a></li>
                                        <li><a href="#">Mission</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><Link href="/Contact_Us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 footer-po-ab-ac">
                                <div className="footer-widget about">
                                    <h2 className="theme_combi_color">Account</h2>
                                    <ul>
                                        <li><Link href="/become_vendor">Become Vendor</Link></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Compare</a></li>
                                        <li><Link href="/Cart">Cart</Link></li>
                                        <li><a href="#">Track Order</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 responbig">
                                <div className="footer-widget contact">
                                    <h2 className="theme_combi_color">Contact Us</h2>
                                    <ul className="contact_wrapper">
                                        <li>
                                            <div className="row foot_images">
                                                <div className="col-md-2 col-sm-1 col-1 foo_map">
                                                    <img src="./images/map.svg" alt="" />
                                                </div>
                                                <div className="col-md-10 col-sm-11  col-10">
                                                    <div className="contact_address">
                                                        <a href="#">
                                                            602,603 Nathubhai Tower, Opposite Maruti Suzuki Arena, Udhna Main
                                                            Road,
                                                            Surat - 394210 Gujarat, India.
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row foot_images">
                                                <div className="col-md-2 col-sm-1 col-1 foo_map">
                                                    <img src="./images/headphones.svg" alt="" />
                                                </div>
                                                <div className="col-md-10 col-sm-2  col-2">
                                                    <div className="email">
                                                        <div className="contact_email">
                                                            <a href="#" target="_blank">8511122186</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row foot_images">
                                                <div className="col-md-2 col-sm-1 col-1">
                                                    <div className="foo_map">
                                                        <img src="./images/message.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-2 col-2">
                                                    <div className="phone ">
                                                        <div className="contact_phone">
                                                            <a href="#" target="_blank">info@ajinfosoft.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-widget subscribe">
                                    <h2 className="theme_combi_color">Subscribe Now</h2>
                                    <p>Subscribe to receive our Newsletter.</p>
                                    <form className="subscribe-form" action="#">
                                        <input type="email" id="subs_email" placeholder="Email Address" />
                                        <button type="button" onClick="saveSubs();" className="custom-btn"><i
                                                className="fas fa-paper-plane"></i></button>
                                    </form>
                                    <p></p>
                                    <p></p>
                                    <center className="foo_icon">
                                        <a href="#"><i className="fab fa-android"></i></a>
                                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </center>
                                    <p></p>
                                </div>
                            </div>
                            <div className="footer_bottom theme_bg_light pt-5">
                                <div className="container">
                                    <div className="row justify-content-between foo_border">
                                        <div className="col-lg-4 col-md-12 foo_all">
                                            <p>All Rights Reserved. Copyright © 2022 ajinfosoft.buyerszone.in</p>
                                        </div>
                                        <div className="col-lg-4 col-md-12 foo_cards">
                                            <ul className="accepted-payment-methods d-flex justify-content-center">

                                                <li className="discover"><img src="./images/foot_1.png" /><span></span></li>
                                                <li className="maestro"><img src="./images/foot_2.png" /><span></span></li>
                                                <li className="mastercard"><img src="./images/foot_3.png" /><span></span></li>
                                                <li className="paypal"><img src="./images/foot_4.png" /><span></span>
                                                </li>
                                                <li className="visa"><img src="./images/foot_5.png" /><span></span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-12 d-flex justify-content-end foo_content">
                                            <p className="text-right">Powered By <a><b>ajinfosoft.buyerszone.in</b></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>


            <div id="social-float">
                <a target="_blank" href="#">
                    <img src="./images/whatsapp.png" />
                </a>
            </div>



                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="login_form">
                                            <h4>Login Here</h4>
                                            <form action="" className="pop_index">
                                                <div className="form-group">
                                                    <input type="text" id="loemail" name="email" className="form_index"
                                                        placeholder="Mobile" />
                                                </div>
                                                <div className="form-group pl-0">
                                                    <input type="password" id="lopassword1" name="password1" className="form_index"
                                                        placeholder="Password" />
                                                </div>
                                                <div className="form_check pl-0">
                                                    <label  className="form-check-label" id="lostpassclick"
                                                        htmlFor="exampleCheck1" data-bs-toggle="modal"
                                                        data-bs-target="#forgot_exampleModal">Forgot Password?</label>
                                                </div>
                                                <div className="pt-3">
                                                    <button type="button" className="btn-default theme_bg btn-singin">Login</button>
                                                    <button type="button" className="btn-default theme_bg btn-singin"
                                                        data-bs-dismiss="modal" aria-label="Close">Skip
                                                        Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="register_form">
                                            <h4>Register Here</h4>
                                            <form action="user-action.php" method="post" encType="multipart/form-data" />
                                                <input type="hidden" defaultValue="registration" name="do" />
                                                <input type="hidden" defaultValue="" id="lcode" />
                                                <input type="hidden" defaultValue="checkout.php" name="url" />
                                                <div className="form-group pl-0">
                                                    <input type="text" id="lopassword" name="Enter Name*" className="form_index"
                                                        placeholder="Enter Name*" />
                                                </div>

                                                <div className="form-group pl-0">
                                                    <input type="number" id="lopassword2" name="password2" className="form_index"
                                                        placeholder="Mobile" />
                                                </div>
                                                <div id="otp_resend" className="form-group">
                                                    <button className="btn-default theme_bg" type="button" id="get_resendtp">Resend
                                                        OTP</button>
                                                </div>
                                                <div className="form-group dis_please"  id="otp_wait">
                                                    Please wait your mobile verifying.</div>
                                                <div className="form-group">
                                                    <div className="checkbox space-10"></div>
                                                    <button className="btn-default theme_bg dis_please" type="button" id="get_regotp"
                                                    >Get OTP</button>
                                                </div>
                                                <div id="otp_scuss">
                                                    <div className="form-group pl-0">
                                                        <input type="text" id="lopassword3" name="Enter Name*" className="form_index"
                                                            placeholder=" Enter SMS OTP" />
                                                    </div>
                                                    <div className="form-group pl-0">
                                                        <input type="text" id="lopassword4" name="Enter Name*" className="form_index"
                                                            placeholder="Enter Email Id (Optional)" />
                                                    </div>
                                                    <div className="form-group pl-0">
                                                        <input type="password" id="lopassword5" name="Enter Name*" className="form_index"
                                                            placeholder="Password" />
                                                    </div>
                                                    <div className="form-group pl-0">
                                                        <input type="password" id="lopassword6" name="Enter Name*" className="form_index"
                                                            placeholder="Confirm Password" />
                                                    </div>
                                                    <div className="form-check pl-0">
                                                        <input type="checkbox" id="i_have_code" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1"> Yes I have Ref
                                                            Code</label>
                                                    </div>
                                                    <div id="ricode" className="form-group dis_please">
                                                        <input type="text" className="form-control" name="rcode" id="rcode"
                                                            placeholder="Enter Code" defaultValue="" />
                                                    </div>
                                                    <button type="button" id="registration"
                                                        className="btn-default theme_bg">Register</button>
                                                </div>
                                            <form/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="modal fade" id="eye_exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog eye_modal">
                        <div className="modal-content eye_content">
                            <div className="modal-header eye_border" >
                                
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="w3-content">
                                            <span className='zoom' id='ex1'>
                                                <img className="mySlides" src="./images/cloth_10.jpg" width='555' height='320' />
                                            </span>
                                            <span className="onsale">10% off</span>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="listview_product_details">
                                            <a href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="review_stars d-flex mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="product_price_row d-flex justify-content-start">
                                                <ins><i className="fa-solid fa-indian-rupee-sign"></i>90.00</ins> <del><i
                                                        className="fas fa-rupee-sign"></i>100</del>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                                            <div className="cart_item_quontaty_row">
                                                <div className="pro-row d-flex justify-content-start"></div>
                                                <div className="pro-row">
                                                    <div className="pro-wrap d-flex align-items-center">
                                                        <input type="number" id="add_to_cart_qty" className="form-control" min="1"
                                                            defaultValue="1" />
                                                        <button type="button" id="add_to_cart_button"
                                                            className="single_add_to_cart_button">Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="modal fade" id="like_exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header eye_border">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-center">
                                            <img src="./images/cloth_3.jpg" />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center">
                                            <a href="#" className="btn btn-success">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="forgot_exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header eye_border">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="register_form">
                                                <h4>Generate new password here</h4>
                                                <form action="user-action.php" method="post" encType="multipart/form-data">
                                                    <div className="form-group">
                                                        <input type="number" className="form-control" id="lmobile" name="mobile"
                                                            placeholder="Mobile*" />
                                                    </div>
                                                    <div className="form-group dis_please" id="lotp_wait">Please wait your
                                                        mobile verifying.</div>
                                                    <div className="form-group">
                                                        <div className="checkbox space-10"></div>
                                                        <button className="btn-default theme_bg" type="button" id="lget_regotp">Get
                                                            OTP</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
    );
}