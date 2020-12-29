import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart} from '../actions/cartActions';
import {useSelector, useDispatch } from 'react-redux';  
import { saveShipping } from '../actions/cartActions';

function ShippingScreen(props){

    const [fname, setFname]=useState('');
    const [lname, setLname]=useState('');
    const [email, setEmail]=useState('');
    const [mobile, setMobile]=useState('');
    const [address, setAddress]=useState('');
    const [pincode, setPinCode]=useState('');
    const [landmark, setLandmark]=useState('');
    const [city, setCity]=useState('');
    const [country, setCountry]=useState('');
    const [paymentMethod, setPaymentMethod]=useState('');
    
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0.15 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;


    const dispatch=useDispatch();
   

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShipping({fname, lname, email, mobile, address, pincode, landmark, city, country, paymentMethod}));
    }

return (
    <>
    <style jsx>{`
      .navbar{
        display:none;
      }
    `}</style>
    <section className="main_section checkout">
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-7">
                <div className="form_block Yorder w-100">
                    <h3 className="text-center">BILLING DETAILS</h3>
                    <form id="register-form" onSubmit={submitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" name="fname" placeholder="Enter First Name" onChange={(e) =>setFname(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">Last Name</label>
                        <input type="text" className="form-control" id="lname" name="lname" placeholder="Enter Last Name"  required onChange={(e) =>setLname(e.target.value)} />
                        </div>
                        <div className="form-group col-md-12">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" placeholder="username@domainname.com" onChange={(e) =>setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1 p-0">
                        <label htmlFor="inputCity">Mobile</label>
                        <input type="text" className="form-control"  id="inputPhoneCode" placeholder={+91} defaultValue={+91} name="code" required  />
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="mnumber">&nbsp;</label>
                        <input type="text" className="form-control" name="mobile" placeholder="mobile number" onChange={(e) =>setMobile(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="email">Address</label>
                        <input type="text" className="form-control" name="address" placeholder="Enter Address" onChange={(e) =>setAddress(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="fname"> Pincode</label>
                        <input type="text" className="form-control" name="pincode" placeholder="Enter Pincode" onChange={(e) =>setPinCode(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname">Landmark</label>
                        <input type="text" className="form-control" name="landmark" placeholder="Enter Landmark" onChange={(e) =>setLandmark(e.target.value)}defaultValue />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="fname"> City</label>
                        <input type="text" className="form-control" name="city" placeholder="Enter City" onChange={(e) =>setCity(e.target.value)} required />
                        </div>
                        <div className="form-group  col-md-6">
                        <label htmlFor="email">Country</label>
                        <select className="form-control" name="country" required onChange={(e) =>setCountry(e.target.value)}>
                            <option>Select</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Pakistan</option>
                        </select>
                        </div>
                    </div>
                    <button type="submit" className="mt-2 btn btn-register btn-loader" id="submit_button">
                        Submit</button>
                    </form>
                </div>
                </div>
                <div className="col-md-5">
                <div className="Yorder">
                    <h3 className="text-center">YOUR ORDER</h3>
                    <table className="table">
                        
                    <tbody>
                    {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>  <tr>
                    <td>{item.name} x {item.qty}(Qty)</td>
                    <td>INR {item.price}</td>
                    </tr> 
                    )}
                        <tr>
                        <td>Item Price</td>
                        <td>INR {itemsPrice}</td>
                        </tr>
                        <tr>
                        <td>Tax Price</td>
                        <td>INR {taxPrice}</td>
                        </tr>
                        <tr>
                        <td>Subtotal</td>
                        <td>INR {totalPrice}</td>
                        </tr>
                        <tr>
                        <td>Shipping</td>
                        <td>INR {shippingPrice}</td>
                        </tr>
                    </tbody>
                    </table><br />
                    <div>
                    <input type="radio" name="dbt" defaultValue="dbt" defaultChecked /> Direct Bank Transfer
                    </div>
                    <p>
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                    <div>
                    <input type="radio" name="dbt" defaultValue="cd" /> Cash on Delivery
                    </div>
                    <div>
                    <input type="radio" name="paymentMethod"  id="paymentMethod" onChange={(e) =>setPaymentMethod(e.target.value)} value="paypal" /> Paypal <span>
                        <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width={50} />
                    </span>
                    </div>
                    <button type="button">Place Order</button>
                </div>{/* Yorder */}
                </div>
            </div>
            </div>
        </section>
    </>
  );
}
export default ShippingScreen;