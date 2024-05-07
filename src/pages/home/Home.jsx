import { useEffect } from "react";
import HeroSection from "./Hero Section/HeroSection";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.29.39:4016/getCategory",
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM4NzVlZTc0NTk3YzQwNjM2MmI2ZTciLCJpYXQiOjE3MTQ5NzY2NTcsImV4cCI6MTcxNTU4MTQ1N30.61CEPFREyGMq6ayR53BegjDjXjXoudQY-5G12ZXdPlA",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
