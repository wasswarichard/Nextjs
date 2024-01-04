import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Saas/Banner";
import Features from "../components/Saas/Features";
import Overview from "../components/Saas/Overview";
import JoinCard from "../components/Saas/JoinCard";
import CtaCard from "../components/Saas/CtaCard";
import SaasTools from "../components/Saas/SaasTools";
import Funfact from "../components/Saas/Funfact";
import WorkProcess from "../components/Saas/WorkProcess";
import PricingPlan from "../components/Saas/PricingPlan";
import GetStarted from "../components/Saas/GetStarted";
import Feedback from "../components/Saas/Feedback";
import Partner from "../components/Saas/Partner";
import Analytics from "../components/Saas/Analytics";
import Employees from "../components/Saas/Employees";
import AgeBar from "../components/Saas/AgeBar";

const Saas = () => {

  return (
    <>
        <Navbar />
        <Banner />
        <AgeBar/>
        <Analytics/>
        <Employees/>
        <Footer />
    </>
  );
};

export default Saas;
