import Image from "next/image";
import styled from "styled-components";

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    margin: 15px 0;
    gap: 40px;
  }
  @media (max-width: 480px) {
    margin: 10px 0;
    gap: 30px;
  }
`;

export const HeaderParagraphContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  gap: 60px;
  * {
    flex: 1;
  }
  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    * {
      justify-content: center;
    }
  }
  @media (max-width: 480px) {
    gap: 30px;
    margin: 10px 0;
  }
`;

export const AboutParagraphContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 60px;
  div {
    flex: 1;
  }

  > div:first-child p {
    margin-bottom: 20px;
  }
  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
    margin: 10px 0;
  }
`;

export const StyledAboutHeader = styled.h1`
  font-size: ${({ theme }) => theme?.fontSizes?.size60};
  font-weight: 700;
  line-height: 100px;
  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size50};
    line-height: 80px;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size40};
    line-height: 60px;
  }
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size30};
    line-height: 50px;
  }
`;

export const StyledAboutParagraph = styled.p`
  font-size: ${({ theme }) => theme?.fontSizes?.size20};
  font-weight: 400;
  line-height: 36px;
  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size18};
    line-height: 32px;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size16};
    line-height: 28px;
  }
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size14};
    line-height: 24px;
  }
`;

export const StyledAboutImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const StyledAboutSubHeader = styled.h2`
  font-size: ${({ theme }) => theme?.fontSizes?.size38};
  font-weight: 600;
  line-height: 50px;
  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme?.fontSizes?.size25};
    line-height: 40px;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.large};
    line-height: 30px;
  }
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme?.fontSizes?.medium};
    line-height: 28px;
  }
`;
