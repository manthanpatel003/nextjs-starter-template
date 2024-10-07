"use client";
import { Box } from "@mui/material";
import styled from "styled-components";

export const FooterBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 59px;
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterFlex = styled(Box)`
  display: flex;
  gap: 2em;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterLeft = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  padding-top: 7px;
  padding-bottom: 35px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const FooterSocialLinks = styled(Box)`
  display: flex;
  gap: 25px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const FooterRight = styled(Box)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

  @media (max-width: 600px) {
    gap: 50px;
    justify-content: center;
  }
`;

export const FooterCopyRight = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;

  p:nth-child(1) {
    font-weight: 300;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const FooterNavRoutes = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const FooterHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
