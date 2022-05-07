const Contact_Us = () => {
    return(
        <div className="float-left w-100">
                <div className="spacer_x">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="billing_form_wrap">
                        <h3>Contact Us</h3>
                        <div className=" row">
                            <div className="form-group col-sm-12">
                                <label>Name *</label>
                                <input type="text" id="cname" className="form-control"/>
                            </div>
                            <div className="form-group col-12">
                                <label>Phone *</label>
                                <input type="text" id="cphone" className="form-control"/>
                            </div>
                            <div className="form-group col-12">
                                <label>Email</label>
                                <input type="email" id="ceid" className="form-control"/>
                            </div>
                            <div className="form-group col-12">
                                <label>Message</label>
                                <textarea id="cmsg" className="form-control"></textarea>
                            </div>
                            <div className="form-group col-12">
                                <button type="submit" className="single_add_to_cart_button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="ship_to_diff_add_wrap"   >
                        <h3 id="ship-to-different-address">
                            <label className="form-checkbox">
                                <span>Contact Info</span>
                            </label>
                        </h3>
                        <div className="shipping_address_form"   >
                            <div className="row"   >
                                <div className="form-group col-sm-12"   >
                                    <label><i  className="fa fa-map us_icon" aria-hidden="true"></i>
                                        <b>Address: </b>602,603 Nathubhai Tower, Opposite Maruti Suzuki Arena, Udhna
                                        Main Road, Surat - 394210 Gujarat, India.
                                    </label>
                                </div>

                                <div className="form-group col-12 "   >
                                    <label><i className="fa fa-phone us_icon" aria-hidden="true"></i>
                                        <b>Phone: </b>8511122186</label>
                                </div>

                                <div className="form-group col-12"   >
                                    <label><i className="fa fa-envelope us_icon" aria-hidden="true"></i>
                                        <b>Write: </b>info@ajinfosoft.com</label>
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
    };
    
    export default Contact_Us;