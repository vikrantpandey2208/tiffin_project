import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="containiner">
          <div className="row">
            <div className="footer-col">
              <h4>Just Dabba</h4>
              <ul>
                <li>
                  <Link to="/aboutus">about us</Link>
                </li>
                <li>
                  <Link to="/ourservices">our services</Link>
                </li>
                <li>
                  <Link to="privacy">privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="faq">FAQ</Link>
                </li>
                <li>
                  <Link to="contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link href="#">
                  <FacebookIcon />
                </Link>
                <Link href="#">
                  <InstagramIcon />
                </Link>
                <Link href="#">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="credit designer">
          <h6 className="normal-text">
            Designed and Developed by Karan and Vikrant
          </h6>
        </div>
      </footer>
    </>
  );
};
