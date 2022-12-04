import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./LandingPage/HomeComponent";
import CustomerLogin from './CustomerLoginSignup/CustomerLogin'
import CustomerSignUp from "./CustomerLoginSignup/CustomerSignUp";
import AddYourTiffin from "./SellerLoginSignup/AddYourTiffin";
import TiffinSellerLogin from "./SellerLoginSignup/TiffinSellerLogin";
import TiffinSellerSignup from "./SellerLoginSignup/TiffinSellerSignup";
import SellerAfterLogin from "./SellerAfterLogin/SellerAfterLogin";
import { AddTiffin } from "./SellerAfterLogin/AddTiffin";
import CustomerAfterLogin from "./CustomerAfterLogin/CustomerAfterLogin";
import { SellerProfile } from "./Profile/SellerProfile";
import { CustomerProfile } from "./Profile/CustomerProfile";
import { About } from "./FooterPages/About";
import { PrivacyPolicy } from "./FooterPages/PrivacyPolicy";
import { ContactUs } from "./FooterPages/ContactUs";
import { FAQ } from "./FooterPages/FAQ";
import { OurServices } from "./FooterPages/OurServives";
import Cart from "./Order/Cart";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { CustomerOrder } from "./Order/CustomerOrder";

function App() {

  return (
    <>
    {/* Routing Tables  */}
      <Router>
        <Routes>
          <Route exact path="/customer-login" element={<CustomerLogin />}></Route>
          <Route exact path="/customer-signup" element={<CustomerSignUp />} />
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/addyourtiffin" element={<AddYourTiffin />} />
          <Route exact path="/seller-login" element={<TiffinSellerLogin />} />
          <Route exact path="/seller-signup" element={<TiffinSellerSignup />} />
          <Route exact path="/seller-logged" element={<SellerAfterLogin />} />
          <Route path="/addtiffin" element={<AddTiffin />} />
          <Route path="/customer-logged" element={<CustomerAfterLogin />} />
          <Route path="/Seller-profile" element={<SellerProfile />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-order" element={<CustomerOrder />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
