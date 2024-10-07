"use client";
import { Container } from "@/styles/global.styles";
import {
  Drawer,
  IconButton,
  MenuItem,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  CloseButton,
  DrawerContent,
  DropdownMenu,
  MenuArrow,
  Nav,
  NavLinkGroup,
  StyledDrawerNav,
  StyledLink,
  StyledNavButton,
  TopBarBox,
  UrlBox,
} from "./NavBar.styles";
import { navRoutes } from "./constant";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(900),
  );

  const handleMouseEnter = (navTitle: string) => {
    setHoveredMenu(navTitle);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = navRoutes.map((nav) => {
    const isMenuHovered = hoveredMenu === nav.title;

    return (
      <button
        key={nav.title}
        onMouseEnter={() => handleMouseEnter(nav.title)}
        onMouseLeave={handleMouseLeave}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        {nav.action === "menu" ? (
          <StyledNavButton>
            {nav.title}
            <MenuArrow
              src={"/svg/menuArrow.svg"}
              alt="Arrow Icon"
              height={24}
              width={24}
              isMenuHovered={isMenuHovered}
            />
          </StyledNavButton>
        ) : (
          <StyledLink
            href={nav.route ?? ""}
            pathname={pathname}
            route={nav.route}
          >
            {nav.title}
          </StyledLink>
        )}

        {isMenuHovered && nav.action === "menu" && (
          <DropdownMenu>
            <MenuItem onClick={handleMouseLeave}>Library Register</MenuItem>
            <MenuItem onClick={handleMouseLeave}>Publisher Register</MenuItem>
          </DropdownMenu>
        )}
      </button>
    );
  });

  return (
    <>
      <TopBarBox>
        <Container>
          <UrlBox>
            <Link href="mailto:jsbn.help@gmail.com">jsbn.help@gmail.com</Link>
          </UrlBox>
        </Container>
      </TopBarBox>

      <Container>
        <Nav>
          <Link href="/">
            <Image
              src={"/svg/jsbnLogo.svg"}
              alt="JSBN Logo"
              height={83}
              width={83}
            />
          </Link>
          <NavLinkGroup>
            {isSmallScreen ? (
              <>
                <IconButton onClick={toggleDrawer(true)} color="inherit">
                  <GiHamburgerMenu size={24} /> {/* Using the hamburger icon */}
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerContent>
                    <StyledDrawerNav>
                      <CloseButton onClick={toggleDrawer(false)}>
                        <AiOutlineClose size={24} />
                      </CloseButton>
                      {navItems}
                    </StyledDrawerNav>
                  </DrawerContent>
                </Drawer>
              </>
            ) : (
              navItems
            )}
          </NavLinkGroup>
        </Nav>
      </Container>
    </>
  );
};

export default NavBar;
