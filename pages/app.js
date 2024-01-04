import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/App/Banner";
import Partner from "../components/App/Partner";
import Features from "../components/App/Features";
import AppWorks from "../components/App/AppWorks";
import Overview from "../components/App/Overview";
import Funfact from "../components/App/Funfact";
import SaasTools from "../components/App/SaasTools";
import Screenshot from "../components/App/Screenshot";
import Team from "../components/App/Team";
import PricingPlan from "../components/App/PricingPlan";
import Download from "../components/App/Download";
import Blog from "../components/App/Blog";
import Feedback from "../components/App/Feedback";
import Subscribe from "../components/App/Subscribe";

const App = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Partner />

      <Features />

      <AppWorks />

      <Overview />

      <Funfact />

      <SaasTools />

      <Screenshot />

      <Team />

      <PricingPlan />

      <Download />

      <Blog />

      <Feedback />

      <Subscribe />

      <Footer />
    </>
  );
};

export default App;
