import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux'


const NavBar = () => {


  const userSignin=useSelector(state =>state.userSignin)
   const {userInfo} = userSignin;
  return (
    <>
      <section className="navTop">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="http://pubweb.bfcgroup.in/images/logos/bfc-publications-logo.png" alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-trigger="#main_nav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse" id="main_nav">
            <div className="offcanvas-header mt-3">
              <h5 className="py-2 text-white">
                <span className="btn-close close_btn"><i className="fa fa-arrow-left" /></span>
                <img src="http://pubweb.bfcgroup.in/images/logos/bfc-publications-logo.png" />
              </h5>
            </div>
            <ul className="navbar-nav custom-cat-drop ml-auto mr-4">
            </ul>
            <div className="col-xl-7 col-xs-12 p-0  header_search_bar">
              <form action="#" method="post" id="post">           
                <input type="text" className="form-control" name="search" placeholder="Search by Book Title or Author Name" id="search-bar" autoComplete="off" required />
              </form>
              <div className="search_suggesation">
                <div className="list-group" id="suggestion-bar">
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-auto ss-nav-left">
              <li className="nav-item d-flex align-items-center">
                {/* <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Signup" className="btn mr-3 btn-top btn-login btn-default">Sign Up</NavLink>  */}
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                  <NavLink
                  activeClassName="menuActive"
                  className="nav-link"
                  exact
                  to="/Login" className="btn btn-primary btn-top ss-login text-white">Login</NavLink>
                }

               
                <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Cart" className="btn ml-2 mr-3 btn-top btn-login btn-cart"><i className="fa fa-shopping-cart" /></NavLink>
                <div className="mr-3 btn-login btn-user dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user-circle-o" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Profile" className="dropdown-item"><i className="fa fa-user mr-3" />My Profile</NavLink>
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Myorder" className="dropdown-item"><i className="fa fa-shopping-cart mr-3" />My Order</NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* navbar-collapse.// */}
        </div>
      </nav>
      </section>
    </>
  );
};

export default NavBar;
