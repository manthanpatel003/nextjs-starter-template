"use client";

import { About, HeroSection, OurFeatures } from "@/components";
import { StyledLandingPage } from "@/styles/global.styles";

const HomePage: React.FC = () => {
  return (
    <StyledLandingPage>
      <HeroSection />
      <OurFeatures />
      <About />
    </StyledLandingPage>
  );
};

export default HomePage;
