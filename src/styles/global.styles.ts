"use client";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
    max-width: 95%;
  }
`;

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    gap: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    gap: 30px;
    margin-bottom: 30px;
  }
`;
