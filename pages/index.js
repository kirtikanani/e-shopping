import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
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
const index = () => {

    return (
        <div className="float-left w-100">
            <div className="">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/slider_1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/slider_2.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">

                        <i className="fas fa-angle-left aerrow_sli"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">

                        <i className="fas fa-angle-right aerrow_sli"></i>
                        <span className="visually-hidden ">Next</span>
                    </button>
                </div>
            </div>



            <div className="spacer_y">
                <div className="container ">
                    <div className="row hei_shop">
                        <div className="shop_slider_head wow slideInUp">
                            <h3 className="content_title theme_color text-center">Shop By Category</h3>
                            <div className="row shop_slider d-flex justify-content-center shop_by_md">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2  col-md-2 col-sm-2 col-2">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_2.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Vegetables</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_3.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Furniture</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_4.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Accessories</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_5.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Kitchen</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_6.jpeg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">dress</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <OwlCarousel className='owl-theme shop_slider_sm' {...options}>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="shop_category">
                                        <a href="#">
                                            <img src="./images/shop_1.jpg" alt="" />
                                        </a>
                                        <div className="shop_title">
                                            <a href="#">Clothing</a>
                                            <div className="pt-3">
                                                <button className="shop_btn">Shop Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container spacer_y">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                        <div className="deal_title">
                            <h3>Deal Of day</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-center">
                        <div className="deal_timer">
                            <span>00:00:00</span>
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
                <OwlCarousel className='owl-theme' {...options}>
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_1.jpg" alt="Test Demo Product 3" />
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
                                        <a href="#" className="myBtn_1" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"><i className="fas fa-heart"></i></a>
                                        <a href=" #"><i className="far fa-clone"></i></a>
                                        <a href=" #" data-bs-toggle="modal" data-bs-target="#eye_exampleModal"><i
                                            className="fas fa-eye"></i></a>
                                        <a className="list_addto_cart" href=" #"><i className="fas fa-shopping-cart"></i></a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_2.jpg" alt="Test Demo Product 3" />
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
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_3.jpg" alt="Test Demo Product 3" />
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
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_2.jpg" alt="Test Demo Product 3" />
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
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_1.jpg" alt="Test Demo Product 3" />
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
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_3.jpg" alt="Test Demo Product 3" />
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
                    <div className='item'>
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/deal_1.jpg" alt="Test Demo Product 3" />
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



            <div className="container spacer_y">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                        <div className="deal_title">
                            <h3>Accessories</h3>
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
                <OwlCarousel className='owl-theme' {...options}>
                    <div className="item">

                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/acce_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/acce_2.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/acce_3.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/acce_4.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/acce_5.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/acce_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/acce_2.jpg" alt="Test Demo Product 3" />
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




            <div className="container spacer_y">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                        <div className="deal_title">
                            <h3>Clothing</h3>
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
                <OwlCarousel className='owl-theme' {...options}>
                    <div className="item">

                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/cloth_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/cloth_2.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/cloth_3.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/cloth_4.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/cloth_5.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/cloth_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/cloth_2.jpg" alt="Test Demo Product 3" />
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



            <div className="container spacer_y">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                        <div className="deal_title">
                            <h3>Furniture</h3>
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
                <OwlCarousel className='owl-theme' {...options}>
                    <div className="item">
                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/furni_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/furni_2.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/furni_3.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/furni_4.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/furni_5.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/furni_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/furni_2.jpg" alt="Test Demo Product 3" />
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



            <div className="container spacer_y">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                        <div className="deal_title">
                            <h3>Kitchen</h3>
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
                <OwlCarousel className='owl-theme' {...options}>
                    <div className="item">

                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/kit_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/kit_2.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/kit_3.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/kit_4.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/kit_5.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/kit_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/kit_2.jpg" alt="Test Demo Product 3" />
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




            <div className="container spacer_y">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 col-4 d-flex justify-content-start">
                        <div className="deal_title">
                            <h3>Vegetables</h3>
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

            <div className="container min_content">
                <OwlCarousel className='owl-theme' {...options}>
                    <div className="item">

                        <div className="poroduct_item_block">
                            <div className="product_img_block">
                                <a href="#">
                                    <img src="./images/veg_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/veg_2.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/veg_3.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/veg_4.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/veg_3.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/veg_1.jpg" alt="Test Demo Product 3" />
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
                                    <img src="./images/veg_1.jpg" alt="Test Demo Product 3" />
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
        </div>
    );
};

export default index;