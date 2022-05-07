const Clothing_List = () => {
    return(
        <div className="float-left w-100">
            <div className="container spacer_z">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5 answer">
                        <div className="filter_box">
                            <div className="filter_padd">
                                <h3 className="fil_title">Filter by price</h3>
                                <div className="min_filter">
                                    <div className="rangeslider">
                                        <input className="min" name="range_1" type="range" min="1" max="100" defaultValue="10" />
                                        <input className="max" name="range_1" type="range" min="1" max="100" defaultValue="90" />
                                        <span className="range_min light left">10.000 €</span>
                                        <span className="range_max light right">90.000 €</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <div className="price_slider_amount">
                                            <button type="button" className="btn_fiter">Filter</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <div className="price_slider_amount">
                                            <input type="text" id="amount" name="price" placeholder="1-7500"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="">
                            <div className="accordion" id="myAccordion">
                                <div className="acco_mar">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne">Filter by color</button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <ul className="">
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">Red</label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">Black </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">Green </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">Green </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">Green </label></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="acco_mar">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button type="button" className="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo">Filter by Brand</button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse show"
                                            data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <ul className="">
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">abc</label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">umlwon </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">killer </label></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="acco_mar">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree">Filter by Size</button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <ul className="">
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">s</label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">l </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">xl </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">xxk </label></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><input type="checkbox" name="brand[]" defaultValue="5"/><label
                                                                htmlFor="checkbox-2-1">m </label></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-7 number_col_lg">
                        <div>
                            <div className="toggle_folter d-flex">
                                <span>Filters :</span>
                                <label className="switch ms-2">
                                    <input type="checkbox" id="coupon_question" defaultChecked/>
                                    <span className="slider round"></span>
                                </label>
                                <h3 className="clothing_title ">Clothing</h3>
                                <ul className="clothing_home ms-auto d-flex">
                                    <li><a href="#">Home</a></li>
                                    <li><i className="fas fa-angle-double-right double_right"></i></li>
                                    <li><a href="#">Clothing</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className="product-gallery-filter">
                            <div className="row shopping_align">
                                <div className=" col-lg-1 col-md-3 col-sm-3 col-2">
                                    <div className="shop_icon d-flex">
                                        <a href="#">
                                            <i className="fas fa-th-large category_icon"></i>
                                        </a>
                                        <a href="#" className="ps-2">
                                            <i className="fas fa-list"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-5 col-sm-5 col-4">
                                    <div className="cloth_showing">
                                        <span>Showing 1–16 of 20 results</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="filter-btn">
                                        <form>
                                            <select className="cloth_select">
                                                <option>Sort By</option>
                                                <option defaultValue="alpha-a-z">Alphabetically, A-Z</option>
                                                <option defaultValue="alpha-z-a">Alphabetically, Z-A</option>
                                                <option defaultValue="price-l-h">Price, Low-High</option>
                                                <option defaultValue="price-h-l">Price, High-Low</option>
                                                <option defaultValue="prod-l-f">Latest first</option>
                                                <option defaultValue="prod-r-f">Best review first</option>
                                            </select>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                       

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_3.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">check demo</h3>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_3.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_16.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_4.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_1.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_2.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_6.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="poroduct_item_block product_list">
                                    <div className=" product_img_block ">
                                        <a href="#">
                                            <img src="./images/cloth_7.jpg" alt="Test Demo Product 3"/>
                                        </a>
                                        <span className="onsale">10% off</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 list_mar">
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
                                        <h3 className="product-title theme_color">Test Demo Product 1</h3>
                                    </a>
                                    <div className="product_price_wrap">
                                        <div className="product_price_row d-flex">
                                            <ins><i className="fa-solid fa-indian-rupee-sign"></i>90</ins>
                                            <del><i className="fa-solid fa-indian-rupee-sign"></i>100</del>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque nisi
                                                expedita beatae excepturi ipsum facilis possimus maxime hic natus quaerat, magni
                                                voluptatum delectus quos tenetur laboriosam perferendis ab neque.</p>
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



                    </div>



                    <div>
                        <ul className="pagination justify-content-center">
                            <li className="page-item active"><a haref="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        );
    };
    
    export default Clothing_List;