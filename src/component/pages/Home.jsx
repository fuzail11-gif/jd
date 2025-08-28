import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import WelcomeDialog from "../welcome";
import SlidingBanner from "../SlidingBanner";
import Banner from "../Banner";
import AboutUs from "../AboutUs";

const Home = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <WelcomeDialog />
      <Banner/>
      <AboutUs/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Home;
