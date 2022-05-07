const become_vendor = () => {
    return(
        <div className="spacer_x">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label>Mobile *</label>
                            <input type="text" className="form-control" name="mobile" id="vmobile" defaultValue="" required="" />
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-12"  >
                        <div className="form-group"  >
                        <label>&nbsp;</label>
                        <button  className="btn-default theme_bg get_margin" type="button" id="get_vgotp">Get OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
    
    export default become_vendor;