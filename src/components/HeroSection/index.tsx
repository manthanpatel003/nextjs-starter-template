import { Container } from "@/styles/global.styles";
import React from "react";
import {
  HeroInnerBox,
  HeroSectionBox,
  StyledButton,
  StyledHeroHeader,
} from "./HeroSection.styles";

const HeroSection: React.FC = () => {
  return (
    <HeroSectionBox>
      <Container>
        <HeroInnerBox>
          <StyledHeroHeader>
            Lorem Ipsum <br />
            dolor sit
          </StyledHeroHeader>
          <StyledButton variant="contained">Know More</StyledButton>
        </HeroInnerBox>
      </Container>
    </HeroSectionBox>
  );
};

export default HeroSection;
