import { Container } from "@/styles/global.styles";
import React from "react";
import {
  AboutBox,
  AboutParagraphContainer,
  HeaderParagraphContainer,
  StyledAboutHeader,
  StyledAboutImage,
  StyledAboutParagraph,
} from "./About.styles";
import { ABOUT_DESCRIPTION, ABOUT_HEADER, LOREM_IPSUM } from "./constant";

const About: React.FC = () => {
  return (
    <Container>
      <AboutBox>
        <HeaderParagraphContainer>
          <StyledAboutHeader
            dangerouslySetInnerHTML={{ __html: ABOUT_HEADER }}
          />
          <StyledAboutParagraph>{ABOUT_DESCRIPTION}</StyledAboutParagraph>
        </HeaderParagraphContainer>
        <AboutParagraphContainer>
          <div>
            <StyledAboutParagraph>{LOREM_IPSUM}</StyledAboutParagraph>
            <StyledAboutParagraph>{LOREM_IPSUM}</StyledAboutParagraph>
          </div>
          <div>
            <StyledAboutImage
              src={"/image/aboutImage.png"}
              alt="About the project image"
              width={400}
              height={400}
            />
          </div>
        </AboutParagraphContainer>
      </AboutBox>
    </Container>
  );
};

export default About;
