"use client";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const HeroSectionBox = styled(Box)`
  min-height: 519px;
  background-image: linear-gradient(#fcebea80, #fcebea80),
    url("/image/hero-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 1024px) {
    min-height: 450px;
  }

  @media (max-width: 768px) {
    min-height: 400px;
  }

  @media (max-width: 480px) {
    min-height: 350px;
  }
`;

export const StyledHeroHeader = styled.h1`
  font-size: ${({ theme }) => theme?.fontSizes?.size86};
  font-weight: 700;
  line-height: 100px;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size72};
    line-height: 80px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size60};
    line-height: 70px;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size48};
  }
`;

export const HeroInnerBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  max-width: 372.12px;
  height: 67.33px;
  margin-top: 20px;
  border-radius: 10px;
  color: white;
  font-size: ${({ theme }) => theme?.fontSizes?.medium};
  font-weight: bold;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    max-width: 300px;
    height: 60px;
    font-size: ${({ theme }) => theme?.fontSizes?.medium};
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 55px;
    font-size: ${({ theme }) => theme?.fontSizes?.small};
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
    font-size: ${({ theme }) => theme?.fontSizes?.small};
  }
`;
