import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';  
import { register } from '../actions/userActions';

function RegisterScreen(props){

    const [name, setName]=useState('');
    const [lname, setLname]=useState('');
    const [email, setEmail]=useState('');
    const [mobile, setMobile]=useState('');
    const [password, setPassword]=useState('');
    const [repassword, setRePassword]=useState('');

    const userRegister= useSelector(state =>state.userRegister);
    const {loading, userInfo, error }=userRegister;
    

    const dispatch=useDispatch();
    const redirect=props.location.search?props.location.search.split("=")[1]:'/';

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(register(name, lname, email, mobile, password));
    }

useEffect(() => {
  if(userInfo){
    props.history.push(redirect)
  }
        return()=>{
                //
    };
}, [userInfo]);

return (
    <>
    <style jsx>{`
      .navbar{
        display:none;
      }
    `}</style>
    <section className="section_l_header login_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="home"><img src="http://pubweb.bfcgroup.in/images/logos/bfc-publications-logo.png" className="img-fluid" /></a> 
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 left_side">
              <div className="left_side_content">
                <img  alt="signup" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 right_side">
              <div className="register_block shadow-lg">
                <div className="form_block w-100">
                  <h3>Take a First Step</h3>
                  <form id="register-form"  onSubmit={submitHandler}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter first name" onChange={(e) =>setName(e.target.value)}   />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text"   onChange={(e) =>setLname(e.target.value)} className="form-control" name="lname" placeholder="Enter Last Name" />
                      </div>
                      <div className="form-group  col-md-12">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e) =>setEmail(e.target.value)} className="form-control" name="email" placeholder="username@domainname.com" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group  col-2 p-0">
                        <label htmlFor="inputCity">Mobile</label>
                        <input type="text" className="custom-phone-field form-control brtr brbr bltr blbr ml--1 " id="inputPhoneCode" placeholder={+91} defaultValue={+91} name="code" />
                      </div>
                      <div className="form-group  col-10 p-0">
                        <label htmlFor="mnumber">&nbsp;</label>
                        <input type="text" onChange={(e) =>setMobile(e.target.value)} className="custom-phone-field form-control bltr blbr ml--2 mt-0" name="mobile" placeholder="mobile number" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group  col-md-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) =>setPassword(e.target.value)}  className="form-control" name="password" placeholder="********" />
                      </div>
                      <div className="form-group  col-md-6">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" className="form-control" onChange={(e) =>setRePassword(e.target.value)} id="cpassword" name="password_confirmation" placeholder="********" />
                      </div>
                      <div className="form-group  col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck" name="accept" defaultValue="yes" />
                          <label className="form-check-label" htmlFor="gridCheck">
                            I accept the terms and condition.
                          </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-register w-100 btn-loader" id="submit_button">
                      Register</button>
                    <p>Already Register ? <Link to={redirect === "/" ? "signin":"signin?redirect="+redirect}  className="text-warning">Register an Account </Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default RegisterScreen;