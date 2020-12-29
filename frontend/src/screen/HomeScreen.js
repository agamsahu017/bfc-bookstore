import React, { useState, useEffect} from 'react';
//import data from './data';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { userSigninReducer } from '../reducers/userReducers';

const myFunction= ()=>{

    var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none"; 
            }
        }
}

function HomeScreen(props){

//const [products, setProduct]= useState([]);



const productList=useSelector(state => state.productList)
const { products, loading, error } =productList;
const dispatch = useDispatch();

  useEffect(() =>{
dispatch(listProducts());

//const fetchData= async() =>{
  //const {data} = await axios.get("/api/products");
  //setProduct(data);
//}
//fetchData()
  return()=>{
        //
  };
  }, [])

	return loading? <div> Loading...</div>:<div className="row">
          <div className="col-md-12">
            <div className="book_section">
              <div className="row">
                <div className="col-md-3">
                  <div className="side_categories">
                    <h5 className="text-center">Genere</h5>
                    <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for Category.." title="Type in a name" autoComplete="off" />
                    <ul id="myUL" className="list-unstyled">
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Fiction</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Nonfiction</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> History</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> English</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Hindi</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Poetry</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Anthology</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Travel</a></li>
                      <li><a><input type="checkbox" name="fl-colour" defaultValue="red" /> Travel</a></li>
                    </ul>
                    <hr />
                    <h4 className="slider-price">Price</h4>
                    <div className="row">
                      <div className="col-sm-12">
                        <div id="slider-range" />
                      </div>
                    </div>
                    <div className="row slider-labels">
                      <div className="col-xs-6 caption">
                        <strong>Min:</strong> <span id="slider-range-value1" />
                      </div>
                      <div className="col-xs-6 pull-right caption" style={{marginLeft: '126px'}}>
                        <strong>Max:</strong> <span id="slider-range-value2" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 ss-slider">
                        <input type="hidden" name="min-value" defaultValue />
                        <input type="hidden" name="max-value" defaultValue />
                      </div>
                    </div>
                    <hr />
                    <h5 className="text-center">Category</h5>
                    <ul id="myUL" className="list-unstyled">
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Popular Books</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Recent Added Book</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> New Releases</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Indian Languages</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Trending this week</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Best Sellers</a></li>
                    </ul>

                  </div>
                </div>
                <div className="col-md-9 list-wrapper" id="myList">
                  <div className="row">
                  {
                    products.map(product =>
                    <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 list-content">
                      <div className="book-card shadow">
                        <div className="book_image">
                        <Link to={'product/'+product._id}>
                          <img src={product.image} className="img-fluid" />
                             </Link>
                        </div>
                        
                          <div className="book_detail">
                          <Link to={'product/'+product._id}>
                            <h6>{product.name}</h6>
                            </Link>
                            <p><strong>By : </strong> {product.author}</p>
                            <h5>{product.rating} <span>
                                <i className="fa fa-star icon" />
                                <i className="fa fa-star icon" />
                                <i className="fa fa-star icon" />
                                <i className="fa fa-star icon" />
                                <i className="fa fa-star-half icon" />
                              </span>
                            </h5>
                            <strong>₹ {product.price}</strong>
                          </div>
                       
                      </div>
                    </div>)
                  }
                    
                    
                    
                  
            
                   
                    
                  </div>
                  
                  <br />
                  <div id="pagination-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
}

export default HomeScreen;