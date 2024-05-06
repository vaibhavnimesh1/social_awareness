import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import SignUp from "./pages/Authenticatin/SignUp/SignUp.jsx";
import Login from "./pages/Authenticatin/SignIn/SignIn.jsx";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import BusinessPromotion from "./pages/BussinessPromotion/BusinessPromotion.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import CreateCauseForm from "./components/CreateCauseForm.jsx";

import CauseDetailsPage from "./pages/CauseDetailsPage/CauseDetailsPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import CauseListing from "./pages/home/Cause Listing/CauseListing.jsx";
import AdminDashboard from "./pages/Admin Dashboard/AdminDashboard.jsx";

const App =  () => {
  return (
    <Router>
      <div>
        <Header />

        <div className=" bg-body-tertiary ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createcauseform" element={<CreateCauseForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/promotion" element={<BusinessPromotion />} />

            <Route path="/causeDetails" element={<CauseDetailsPage />} />
            <Route path="/cause" element={<CauseListing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
