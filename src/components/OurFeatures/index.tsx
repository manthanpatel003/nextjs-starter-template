import { Container } from "@/styles/global.styles";
import React from "react";
import {
  FeatureImage,
  FeatureItem,
  OurFeaturesBox,
  StyledCircle,
  StyledItemContainer,
  StyledTypographyBody,
  StyledTypographyHeader,
} from "./OurFeatures.styles";
import { OUR_FEATURES } from "./constant";

const OurFeatures: React.FC = () => {
  return (
    <Container>
      <OurFeaturesBox>
        <StyledTypographyHeader>
          Some Of Our Features include
        </StyledTypographyHeader>

        <StyledItemContainer>
          {OUR_FEATURES.map((feature) => (
            <FeatureItem key={feature?.image}>
              <StyledCircle>
                <FeatureImage
                  src={feature.image}
                  alt={feature.text}
                  width={100}
                  height={100}
                />
              </StyledCircle>
              <StyledTypographyBody>{feature.text}</StyledTypographyBody>
            </FeatureItem>
          ))}
        </StyledItemContainer>
      </OurFeaturesBox>
    </Container>
  );
};

export default OurFeatures;
