import React, { useEffect, useState } from "react";
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
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const [token, setToken] = useState(null);

  const isAuthenticated = () => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      const role = adminData?.doc?.role;
      if (role === "admin" && role !== "") {
        return true;
      } else {
        return false;
      }

      // console.log(role);
    }

    if (!adminData) {
      return false;
    } else {
      return true;
    }
  };
  // console.log(isAuthenticated());
  useEffect(() => {
    console.log(isAuthenticated());
    isAuthenticated();
  }, []);

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    const t = adminData?.token;
    // console.log(t);
    if (!t) {
      // console.log("Token missing, please log in again.");
      return;
    }
    // console.log(t);

    setToken(t);
  }, []);
  return (
    <Router>
      <div>
        {isAuthenticated() ? null : <Header />}
        {/* {isAuthenticated() ? null : <Footer />} */}

        <div className=" bg-body-tertiary ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createcauseform" element={<CreateCauseForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs token={token} />} />
            <Route
              path="/promotion"
              element={<BusinessPromotion token={token} />}
            />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile token={token} />} />
            </Route>
            <Route path="/login" element={<Login />} />

            <Route
              path="/causeDetails/:id"
              element={<CauseDetailsPage token={token} />}
            />
            <Route path="/cause" element={<CauseListing token={token} />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {isAuthenticated() ? null : <Footer />}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
