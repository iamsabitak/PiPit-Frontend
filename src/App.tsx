import React from "react";

import HomePage from "./components/HomePage";
import Banners from "./components/Banners";
import Contact from "./components/Contact";
import PipitBenefitsTable from "./components/PipitBenefitsTable";
import FeaturePresentation from "./components/FeaturePresentation";
import FeatureSection from "./components/FeatureSection";

const App: React.FC = () => {
  return (
    <>
      <HomePage />
      <FeatureSection />
      <FeaturePresentation />
      <PipitBenefitsTable />
      <Banners />
      <Contact />
    </>
  );
};

export default App;
