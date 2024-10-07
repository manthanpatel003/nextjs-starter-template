"use client";
import { NavStyledLink } from "@/utils/types";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const TopBarBox = styled(Box)`
  height: 45px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UrlBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 95px;
  align-items: center;
`;

export const NavLinkGroup = styled.nav`
  gap: 10px;
  display: flex;
  * {
    white-space: nowrap;
  }
`;

export const StyledLink = styled(Link)<NavStyledLink>`
  display: inline-block;
  position: relative;
  font-weight: 400;
  color: ${({ pathname, route, theme }) =>
    pathname === route ? theme?.colors?.primary : theme?.colors?.black};
  text-decoration: none;
  padding: 0.5em 0.7em;
  cursor: pointer;
  transition: color 0.3s ease;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme?.colors?.primary};
    transition:
      width 0.3s ease,
      left 0.3s ease;
    width: 0;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  &:hover {
    color: ${({ theme }) => theme?.colors?.primary};
  }

  ${({ pathname, route }) =>
    pathname === route &&
    `
    &::before {
      width: 100%;
      left: 0;
    }
  `}

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
  }
  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme?.fontSizes?.medium};
  }
`;

export const StyledNavButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  position: relative;
  font-weight: 400 !important;
  color: ${({ theme }) => theme?.colors?.black};
  text-decoration: none;
  padding: 0.5em 0.7em;
  cursor: pointer;
  transition: color 0.3s ease;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme?.colors?.primary};
    transition:
      width 0.3s ease,
      left 0.3s ease;
    width: 0;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  &:hover {
    color: ${({ theme }) => theme?.colors?.primary};
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme?.fontSizes?.medium};
  }
`;

export const DropdownMenu = styled(Box)`
  position: absolute;
  background: white;
  z-index: 30;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme?.colors?.black};
`;

export const DrawerContent = styled(Box)`
  padding: 16px;
  width: min(100vw, 320px);
`;

export const StyledDrawerNav = styled(Box)`
  display: flex;
  flex-direction: column;
`;
export const MenuArrow = styled(Image)<{ isMenuHovered: boolean }>`
  transform: ${({ isMenuHovered }) =>
    isMenuHovered ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease;
`;
