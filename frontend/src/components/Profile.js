import React from 'react';

const Profile = ()=>{
    return(
        <>
        <section className="main_section">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="row user_profile">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="wrapper">
                        <div className="upper">
                        <img src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg" />
                        </div>
                        <div className="lower">
                        <img src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" />
                        <div className="information">
                            <span className="nickname">Shivani Saini</span>
                            <span className="career">Writer</span>
                            <span className="city"><i className="fa fa-map-marker" /> Lucknow, Uttar Pradesh, 226022</span>
                        </div>
                        <ul className="text-left px-5">
                            <li><a href="order"><i className="fa fa-angle-double-right" /> My Order</a></li>
                            {/* <li><a href=""><i class="fa fa-angle-double-right"></i> Shippig Detail</a></li> */}
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                    <div className="user_form">
                        <h4>Update Details</h4>
                        <form>
                        <div className="form-row">
                            <div className="col-6 mt-3">
                            <label>Name</label>
                            <input type="text" name className="form-control" />
                            </div>
                            <div className="col-6 mt-3">
                            <label>Email</label>
                            <input type="text" name className="form-control" />
                            </div>
                            <div className="col-12 mt-3">
                            <label>Address</label>
                            <input type="text" name className="form-control" />
                            </div>
                            <div className="col-6 mt-3">
                            <label>Old Password</label>
                            <input type="text" name className="form-control" />
                            </div>
                            <div className="col-6 mt-3">
                            <label>New Password</label>
                            <input type="text" name className="form-control" />
                            </div>
                        </div>
                        <div className="form-row row mt-2">
                            <div className="col-12 text-right">
                            <button className="btn btn-danger">Update</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};
export default Profile;