import { Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const OurFeaturesBox = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.white};
  padding: 33px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const StyledTypographyHeader = styled(Typography)`
  font-size: ${({ theme }) => theme?.fontSizes?.size38};
  font-weight: 700;
  line-height: 44.23px;
  letter-spacing: 0.03em;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size25};
    line-height: 40px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size20};
    line-height: 36px;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size16};
    line-height: 32px;
  }
`;

export const StyledTypographyBody = styled(Typography)`
  font-size: ${({ theme }) => theme?.fontSizes?.large};
  font-weight: 400;
  line-height: 28.15px;
  letter-spacing: 0.03em;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size20};
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size18};
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme?.fontSizes?.medium};
    line-height: 1.5;
  }
`;

export const StyledCircle = styled.div`
  width: 139.87px;
  height: 139.87px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.white};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 8px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const FeatureImage = styled(Image)`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }
`;

export const StyledItemContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    gap: 12px;
  }
`;
