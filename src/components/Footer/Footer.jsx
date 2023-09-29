import React from 'react';
import './index.css';
import { AiOutlineInstagram , AiFillFacebook } from "react-icons/ai";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoShirt } from "react-icons/io5";
import logo from '../../assets/icon.png';


const Footer = ({ Footer }) => {
    return(
        <MDBFooter  className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title"><span><img src={logo} className="logofoot" alt="Qotoof Museum" height="25px" width="25px" /></span><span className="font" style={{paddingLeft:'10px'}}>Qotoof Museum</span> </h5> 
              <p className="confoot"> 
            Walk 
          
            
              in Style<IoShirt/>
              </p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Follow Us</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://instagram.com/qotoofs?utm_medium=copy_link" target="_blank" ><AiOutlineInstagram/></a>
                  <a href="https://www.facebook.com/QotoofMuseum" target="_blank" ><AiFillFacebook/></a>
                </li>
               
              </ul>
              <ul>
                <p className="visa"><FaCcVisa/> <FaCcMastercard/></p>
                
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Contact Us</h5>
             <p className="phone">Call Us<BsFillTelephoneFill/>:<span style={{fontWeight:"bold"}}> +2 01095476026 </span> </p>
             <p className="phone">Email Us<FiMail/> :<span style={{fontWeight:"bold"}}> qotoofeg@gmail.com </span> </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href=""> Qotoof Museum </a>
          </MDBContainer>
        </div>
      </MDBFooter>

    );
    }
    export default Footer;