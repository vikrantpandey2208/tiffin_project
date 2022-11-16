import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <>
    <footer className="footer" >
  	 <div className="containiner">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link href="#">about us</Link></li>
  	 				<li><Link href="#">our services</Link></li>
  	 				<li><Link href="#">privacy policy</Link></li>  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link href="#">FAQ</Link></li>  	 				
  	 				<li><Link href="#">payment options</Link></li>
  	 			</ul>
  	 		</div>  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<Link href="#"><FacebookIcon/></Link>
  	 				<Link href="#"><InstagramIcon/></Link>
  	 				<Link href="#"><LinkedInIcon/></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </>
  )
}
