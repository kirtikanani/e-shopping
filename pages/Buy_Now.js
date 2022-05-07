const Buy_Now = () => {

    return (
        <div className="float-left w-100">
            <div className="container">
                <div className="row pt-3">
                    <div className="col-md-6 col-sm-6 col-6">
                        <h3 className="buy_font" >Checkout</h3>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                        <ul className="clothing_home ms-auto d-flex">
                            <li><a href="#">Home</a></li>
                            <li><i className="fas fa-angle-double-right double_right"></i></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-bottom"></div>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="chechout_head d-flex justify-content-between heading_line pt-3">
                            <h3 className="content_title theme_color">Shipping Info</h3>
                        </div>
                        <div className="shiping_form">
                            <div className="shipping_h3">
                                <h3>Shipping Address</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="First Name *" id="bill_fname"
                                            name="bill_fname" defaultValue="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="Last Name *" id="bill_fname"
                                            name="bill_fname" defaultValue="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="Company Name *" id="bill_fname"
                                            name="bill_fname" defaultValue="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="GST" id="bill_fname"
                                            name="bill_fname" defaultValue="" />
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" name="bill_mobile" id="bill_mobile"
                                            placeholder="Mobile No *" />
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" id="bill_email" name="bill_email"
                                            placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <textarea className="form_control" placeholder="Address *" name="bill_addres"
                                            id="bill_addres" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" name="bill_pincode" id="bill_pincode"
                                            placeholder="Pincode *" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="City *" id="bill_city"
                                            name="bill_city" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" id="bill_state" name="bill_state"
                                            placeholder="State *" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Order Note / Remark" name="notes" id="notes"
                                    rows="5"></textarea>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="chechout_head d-flex justify-content-between heading_line pt-3">
                            <h3 className="content_title theme_color">Your Order </h3>
                        </div>
                        <div className="row your_order">
                            <div className="col-lg-2 col-md-3 col-sm-1 col-2">
                                <div className="order_pro_img">
                                    <a href="#">
                                        <img src="./images/cloth_10.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className=" col-lg-5 col-md-7 col-sm-5 col-5">
                                <div className="quantity" >
                                    <a href="#" className="quantity__minus"><span>-</span></a>
                                    <input name="quantity" type="text" className="quantity__input" defaultValue="1" />
                                        <a href="#" className="quantity__plus"><span>+</span></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-5 col-5 md_rupees">
                                <div className="product_price_row buy_rs d-flex justify-content-start">
                                    <ins><i className="fas fa-rupee-sign"></i>1,170.00</ins><a href="#"
                                        className="remove"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="#">
                                <h3 className="product-title order_title theme_color">Test Demo Product 10</h3>
                            </a>

                        </div>
                        <div className="row your_order">
                            <div className="col-lg-2 col-md-3 col-sm-1 col-2">
                                <div className="order_pro_img">
                                    <a href="#">
                                        <img src="./images/cloth_16.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-5 col-5">
                                <div className="quantity" >
                                    <a href="#" className="quantity__minus"><span>-</span></a>
                                    <input name="quantity" type="text" className="quantity__input" defaultValue="1" />
                                        <a href="#" className="quantity__plus"><span>+</span></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-5 col-5 md_rupees">
                                <div className="product_price_row d-flex justify-content-start">
                                    <ins><i className="fas fa-rupee-sign"></i>90.00</ins><a href="#"
                                        className="remove"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="#">
                                <h3 className="product-title order_title theme_color">Test Demo Product 10</h3>
                            </a>

                        </div>

                        <div className="prod_wrap mb-3">
                            <div className="row">
                                <div className="col-sm-10">
                                    <input type="text" placeholder="Apply Coupon" defaultValue="" id="cup_code" name="cup_code"
                                        className="input-text form-control" />
                                </div>
                                <div className="col-sm-2">
                                    <button type="button" data-total="1260.00"
                                        className="btn-default theme_bg btn-apply">Apply</button>
                                </div>
                            </div>
                        </div>

                        <div className="order_total_box cart-totals textprice">
                            <ul>
                                <li id="subtotal_li">
                                    <span className="text">Subtotal</span>
                                    <span className="number subtotal">
                                        <i className="fas fa-rupee-sign"></i> 1,260
                                    </span>
                                </li>
                                <input type="hidden" defaultValue="0" id="code_count" />
                                <li></li>
                                <input type="hidden" defaultValue="0" name="ship_chrg" id="ship_chrg" />
                                    <input type="hidden" defaultValue="50" name="cod_charge" id="cod_charge" />
                                        <li id="codchrg"></li>
                                        <li>
                                            <span className="text totals">Totals Cart</span>
                                            <span className="number totals" id="final_total">
                                                <i className="fas fa-rupee-sign"></i>1250</span>
                                        </li>
                                        <li>
                                            <div className="tab">
                                                <input type="radio" defaultChecked="" id="cod" defaultValue="cod" name="pay_method" />
                                                    <label htmlFor="cod" className="tab-label">Cash on delivery ( Charge
                                                        <i className="fas fa-rupee-sign"></i>50)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tab">
                                                <input type="radio" id="rpo" defaultChecked="" defaultValue="razor" name="pay_method" />
                                                    <label htmlFor="rpo" className="tab-label">Pay Online Razorpay (Discount :
                                                        <i className="fas fa-rupee-sign"></i>10)
                                                    </label>
                                            </div>
                                        </li>
                            </ul>
                        </div>

                        <div className="tab mb-3">
                            <button type="button" className="btn-default theme_bg link-button" defaultValue="Submit">Place Your
                                Order</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
                );
};

                export default Buy_Now;