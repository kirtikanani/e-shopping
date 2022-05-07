import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};
const Cheack_Demo = () => {
    return(
        <div className="float-left w-100">
                <div className="container">
                    <div className="row">
                        <div className="product_home pt-5">
                            <ul className="clothing_home  d-flex">
                                <li><a href="#">Home</a></li>
                                <li><i className="fas fa-angle-double-right double_right"></i></li>
                                <li><a href="#">Clothing</a></li>
                                <li><i className="fas fa-angle-double-right double_right"></i></li>
                                <li><a href="#">Test Demo</a></li>
                            </ul>
                            <div className="product_line"></div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row pt-4">
                        <div className="col-md-6">
                            <div className="w3-content">
                                <span className='zoom' id='ex1'>
                                    <img className="mySlides" src="./images/cloth_10.jpg" width='555' height='320' /> 
                                </span>
                                <span className="onsale">10% off</span>
                                <span className="onZoom"><i className="fab fa-searchengin"></i></span>
                                <span className='zoom' id='ex1'>
                                    <img className="mySlides" src="./images/cloth_1.jpg" width='555' height='320'/>
                                </span>
                                <span className='zoom' id='ex1'>
                                    <img className="mySlides" src="./images/furni_1.jpg" width='555' height='320'/>
                                </span>
                                <span className='zoom' id='ex1'>
                                    <img className="mySlides" src="./images/furni_4.jpg" width='555' height='320'/>
                                </span>
                                <span className='zoom' id='ex1'>
                                    <img className="mySlides" src="./images/cloth_2.jpg" width='555' height='320'/>
                                </span>


                                <div className="w3-row-padding w3-section">
                                    <div className="w3-col s2">
                                        <img className="demo_1 w3-opacity w3-hover-opacity-off check_border" src="./images/cloth_10.jpg"
                                            onClick="currentDiv(1)"/>
                                    </div>
                                    <div className="w3-col s2">
                                        <img className="demo_1 w3-opacity w3-hover-opacity-off check_border" src="./images/cloth_1.jpg"
                                            onClick="currentDiv(2)"/>
                                    </div>
                                    <div className="w3-col s2">
                                        <img className="demo_1 w3-opacity w3-hover-opacity-off check_border" src="./images/furni_1.jpg"
                                            onClick="currentDiv(3)"/>
                                    </div>
                                    <div className="w3-col s2">
                                        <img className="demo_1 w3-opacity w3-hover-opacity-off check_border" src="./images/furni_4.jpg"
                                            onClick="currentDiv(3)"/>
                                    </div>
                                    <div className="w3-col s2">
                                        <img className="demo_1 w3-opacity w3-hover-opacity-off check_border" src="./images/cloth_2.jpg"
                                            onClick="currentDiv(3)"/>
                                    </div>
                                </div>
                                <button className="w3-button w3-black w3-display-left" onClick="plusDivs(-1)">&#10094;</button>
                                <button className="w3-button w3-black w3-display-right" onClick="plusDivs(1)">&#10095;</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product_details">
                                <h3 className="pro_title">check demo</h3>
                                <div className="review_stars d-flex mb-3">
                                    <i className="fas fa-star star_fill"></i>
                                    <i className="fas fa-star star_fill"></i>
                                    <i className="fas fa-star star_fill"></i>
                                    <i className="fas fa-star star_fill"></i>
                                    <i className="fas fa-star star_fill"></i>
                                </div>
                                <div className="product_price_chng product_price_row d-flex justify-content-start">
                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>5</ins> <del><i className="fa-solid fa-indian-rupee-sign"></i>5</del>
                                    <span className="check_zero" >0% off</span>
                                </div>
                                <div className="pro_p">
                                    <p><span>Select Qty</span> <span>Discount</span> <span>Price per piece</span></p>
                                    <p><span><input type="radio" defaultValue="1" id="product_discount" name="product_discount"/> 1 -
                                            5</span> <span>Rs 10</span> <span>Rs -5</span></p>
                                    <p><span><input type="radio" defaultValue="6" id="product_discount" name="product_discount"/> 6 -
                                            10</span> <span>Rs 20</span> <span>Rs -15</span></p>
                                    <p><span><input type="radio" defaultValue="11" id="product_discount" name="product_discount"/> 11 -
                                            15</span> <span>Rs 30</span> <span>Rs -25</span></p>
                                    <p>check demo</p>
                                </div>
                                <div className="cart_item_quontaty_row">
                                    <div className="product_price_row d-flex justify-content-start">
                                        <span className="instock"> In Stock </span>
                                    </div>
                                </div>
                                <div className="pro-row">
                                    <p>color</p>
                                </div>
                                <div className="product_thumbnails my-3 d-flex align-items-start">
                                    <div className="thumb-box">
                                        <a className="attri_image" data-mid="52" data-id="52_150" href="#">
                                            <img src="./images/cloth_10.jpg" alt="check demo"/>GREEN</a>
                                    </div>
                                    <div className="thumb-box">
                                        <a className="attri_image" data-mid="52" data-id="52_149" href="#">
                                            <img src="./images/cloth_10.jpg" alt="check demo"/>BLACK</a>
                                    </div>
                                    <div className="thumb-box">
                                        <a className="attri_image" data-mid="52" data-id="52_148" href="#">
                                            <img src="./images/cloth_10.jpg" alt="check demo"/>RED</a>
                                    </div>
                                </div>
                                <div className="select_col" bis_skin_checked="1">
                                    <p>size</p>
                                    <select id="attributes_51" className="form-control attributes" name="pricewithfilter[0][51]">
                                        <option defaultValue="0">Select</option>
                                        <option defaultValue="51_147"> S</option>
                                        <option defaultValue="51_146"> L</option>
                                        <option defaultValue="51_145"> M</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className=" col-lg-4 col-md-5">
                                        <div className="quantity">
                                            <a href="#" className="quantity__minus"><span>-</span></a>
                                            <input name="quantity" type="text" className="quantity__input" defaultValue="1"/>
                                            <a href="#" className="quantity__plus"><span>+</span></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-7">
                                        <button type="button" className="add_cart_btn">Add to cart</button>
                                        <button type="button" className="add_cart_btn buy_btn ms-2">Buy Now</button>
                                        <a href="#">
                                            <button type="button" className="add_cart_btn ms-2 " id="myBtn">Inquiry</button>
                                        </a>
                                        

                                        <div className="deal_model">
                                            <div id="myModal" className="modal">
                                                
                                                <div className="modal-content">
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <h3 className="modal-title">Product Inquiry</h3>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <span className="close">&times;</span>
                                                        </div>
                                                        <div className="border-bottom pt-3"></div>
                                                        <div className="modal-body">
                                                            <div className="form-group col-md-6">
                                                                <label className="control-label" htmlFor="inputcompany3">Name</label>
                                                                <input type="text" className="form-control"
                                                                    id="in_name" name="in_name" defaultValue=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="control-label" htmlFor="inputcompany3">Mobile No</label>
                                                                <input type="text" className="form-control"
                                                                    id="in_mobile" name="in_mobile" defaultValue=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="control-label" htmlFor="inputcompany3">Email ID</label>
                                                                <input type="text" className="form-control"
                                                                    id="in_email" name="in_email" defaultValue=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="control-label" htmlFor="inputcompany3">Message</label>
                                                                <textarea className="form-control" id="in_desc" name="in_desc"
                                                                    ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom "></div>
                                                    <div className="d-flex justify-content-center pt-3">
                                                        <button type="button" className="btn btn-primary">Submit</button>
                                                        <button type="button" className="btn btn-primary ms-3">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="comp-wish d-flex align-items-center justify-content-start mt-4">
                                    <a onClick="" href="#"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a onClick="" href="#"><i className="fas fa-chart-area"></i> Compare</a>
                                </div>
                                <div className="social_product pt-2">
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market whatsapp">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market telegeam">
                                        <i className="fab fa-telegram-plane"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market pintrest">
                                        <i className="fab fa-pinterest-p"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market envelope">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market url">
                                        <i className="fas fa-link"></i>
                                    </a>
                                    <a href="#" className="at-icon-wrapper at-share-btn at_social_market one_plus">
                                        <i className="fas fa-plus"></i>1
                                    </a>
                                </div>

                                <div className="pt-4 pb-1">
                                    <i className="fas fa-map-marker-alt pr-1"></i> <span>Deliver to</span>
                                </div>
                                <div className="pt-1 pro_deliver">
                                    <input className="border-0 font-weight-bold" type="text" id="pincode"
                                        placeholder="Enter delivery pincode"/>
                                    <a onClick="" href="#"> Check</a>
                                    <div id="pincode_message" className="comp-wish d-flex align-items-center justify-content-start">
                                    </div>
                                    <br/>
                                </div>
                                <div className="comp-wish d-flex align-items-center justify-content-start" bis_skin_checked="1">
                                    <input type="file" id="file" name="file"/>
                                </div>
                                <div className="comp-wish d-flex align-items-center justify-content-start" bis_skin_checked="1">
                                    <textarea id="file_text" name="file_text" placeholder="enter your message here"></textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="pro_details">
                            <h3>
                                <a href="#" className="dec_title">Description</a>
                            </h3>
                            <div className="pro_para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container spacer_y">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                            <div className="deal_title">
                                <h3>You may also like…</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-center">
                            <div className="deal_timer">
                                <span></span>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-end">
                            <div className="deal_view">
                                <span><a href="#">View All</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="heading_line"></div>
                </div>

                <div className="container">
                <OwlCarousel className='owl-theme owl-theme' {...options}>
                        <div className="item">
                            
                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_1.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                        </div>
                        <div className="item">
                            
                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_2.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className="item">
                            
                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_3.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className="item">
                            
                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_2.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className="item">
                            
                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_1.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className="item">

                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_3.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                        </div>
                        <div className="item">
                            
                                    <div className="poroduct_item_block">
                                        <div className="product_img_block">
                                            <a href="#">
                                                <img src="./images/deal_1.jpg" alt="Test Demo Product 3"/>
                                            </a>
                                            <span className="onsale">10% off</span>
                                        </div>
                                        <div className="product_details_block">
                                            <div className="review_stars">
                                                <center>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                    <i className="fas fa-star star_fill"></i>
                                                </center>
                                            </div>
                                            <a title="Test Demo Product 3" href="#">
                                                <h3 className="product-title theme_color">Test Demo Product 3</h3>
                                            </a>
                                            <div className="product_price_wrap">
                                                <div className="product_price_row d-flex">
                                                    <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                                    <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                                </div>
                                                <div className="product_socials_btn">
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            className="fas fa-heart"></i></a>
                                                    <a href=" #"><i className="far fa-clone"></i></a>
                                                    <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                                            className="fas fa-eye"></i></a>
                                                    <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                        </div>
                    </OwlCarousel>
                </div>

                <div className="container pb-5">
                    <div className="row">
                        <div className="view_all d-flex justify-content-center">
                            <a href=" #">View all</a>
                        </div>
                    </div>
                </div>
        </div>
        );
    };
    
export default Cheack_Demo;  