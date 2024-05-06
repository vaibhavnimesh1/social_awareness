import { useEffect } from "react";
import HeroSection from "./Hero Section/HeroSection";
import axios from "axios";
// import A from "../Admin Dashboard/AdminDashboard"
const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:4016/getBusiness", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM4NzVlZTc0NTk3YzQwNjM2MmI2ZTciLCJpYXQiOjE3MTQ5NzY2NTcsImV4cCI6MTcxNTU4MTQ1N30.61CEPFREyGMq6ayR53BegjDjXjXoudQY-5G12ZXdPlA"
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <HeroSection />
      {/* <A/> */}
    </>
  );
};

export default Home;
