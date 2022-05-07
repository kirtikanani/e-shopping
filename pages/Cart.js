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
const Cart = () => {
    return (
        <div className="float-left w-100">
            <div className="spacer_x cart-woocommerce">
                <div className="container">
                    <div className="row md_cart_12">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="cart_details">
                                <div className="d-flex justify-content-between heading_line">
                                    <h3 className="content-title theme_color">Cart</h3>
                                    <ul className="breadcrumb-1 ml-auto d-flex">
                                        <li><a href="index.php">Home</a></li>
                                        <li><i className="fas fa-angle-double-right cart_right"></i></li>
                                        <li><a href="#">Cart</a></li><a href="#">
                                        </a>
                                    </ul>
                                </div>
                                <a href="#">
                                    <table
                                        className="table mt-5 shop_table shop_table_responsive cart woocommerce-cart-form__contents table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="product-remove">&nbsp;</th>
                                                <th className="product-thumbnail">&nbsp;</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="woocommerce-cart-form__cart-item cart_item">
                                            <tr id="cartli7238">
                                                <td className="product-remove"><a href="#" className="remove"
                                                    aria-label="Remove this item" data-product_id="8515">×</a>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src="./images/cloth_10.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <a href="#">Test Demo Product 3</a>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    <span className="Price-amount amount">
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>90.00
                                                    </span>
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity">
                                                        <a href="#" className="quantity__minus"><span>-</span></a>
                                                        <input name="quantity" type="text" className="quantity__input" defaultValue="1" />
                                                        <a href="#" className="quantity__plus"><span>+</span></a>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="Price-amount amount"><i className="fa-solid fa-indian-rupee-sign"></i>90</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4"><a href="#">
                        </a>
                            <div className="cart-collaterals mt-4"><a href="#">
                                <div className="cart_head d-flex justify-content-end text-right border-0 heading_line">
                                    <h3 className="content-title theme_color">Cart Totals</h3>
                                </div>
                                <div className="cart_totals_box">
                                    <div className="row no-gutters">
                                        <div className="col-sm-4">
                                            <div className="cart_total_titles">
                                                <div className="cart_header_title d-none d-sm-block">
                                                    <span>Subtotal :</span>
                                                </div>
                                                <div className="cart_footer_title d-none d-sm-block">
                                                    <span>Total :</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="cart_total_data">
                                                <div className="cart_header_data"><span
                                                    className="d-block d-sm-none">Subtotal:</span><span
                                                        className="price_amount"><i className="fa-solid fa-indian-rupee-sign"></i>90</span>
                                                </div>

                                                <div className="cart_footer_data">
                                                    <span className="d-block d-sm-none">Total:</span><span className="price_amount">
                                                        <i className="fa-solid fa-indian-rupee-sign"></i> 90
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                                <div className="checkout_proceed_btn_wrap d-flex justify-content-end my-5"><a href="#">
                                </a><a href="checkout.php" className="theme_bg btn-default">Proceed to checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row ">
                    <div className="d-flex justify-content-between heading_line">
                        <h3 className="content-title theme_color">You may also like...</h3>

                    </div>
                    <div className="md_cart">
                        <OwlCarousel className='owl-theme spacer_cart' {...options}>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="item">

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
                                                <a href=" #" data-bs-toggle="modal"
                                                    data-bs-target="#eye_exampleModal"><i className="fas fa-eye"></i></a>
                                                <a className="list_addto_cart" href=" #"><i
                                                    className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;