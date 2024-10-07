"use client";

import { Container } from "@/styles/global.styles";
import Image from "next/image";
import Link from "next/link";
import {
  FooterBox,
  FooterCopyRight,
  FooterFlex,
  FooterHeader,
  FooterLeft,
  FooterNavRoutes,
  FooterRight,
  FooterSocialLinks,
  FooterText,
} from "./Footer.styles";
import { importantLinks, navRoutes, socialIconsWithLinks } from "./constant";

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Container>
        <FooterFlex>
          <FooterLeft>
            <Link href="/">
              <Image
                src={"/svg/jsbnLogo.svg"}
                alt="JSBN Logo"
                height={99}
                width={89}
              />
            </Link>

            <FooterText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dicta accusamus eius rerum tenetur odit asperiores quo doloribus
            </FooterText>

            <FooterSocialLinks>
              {socialIconsWithLinks.map(({ Icon, link, alt }) => (
                <Link key={link} href={link} target="_blank" aria-label={alt}>
                  <Image src={Icon} width={32} height={32} alt={alt} />
                </Link>
              ))}
            </FooterSocialLinks>
          </FooterLeft>

          <FooterRight>
            <div>
              <FooterHeader>Company</FooterHeader>
              <FooterNavRoutes>
                {navRoutes.map((nav) => {
                  return (
                    <Link key={nav.route} href={nav.route ?? ""}>
                      {nav.title}
                    </Link>
                  );
                })}
              </FooterNavRoutes>
            </div>
            <div>
              <FooterHeader>Important Links</FooterHeader>
              <FooterNavRoutes>
                {importantLinks.map((nav) => {
                  return (
                    <Link key={nav.route} href={nav.route ?? ""}>
                      {nav.title}
                    </Link>
                  );
                })}
              </FooterNavRoutes>
            </div>
          </FooterRight>
        </FooterFlex>

        <FooterCopyRight>
          <p>Privacy | Terms of Service</p>
          <p>©2024. All Rights Reserved | Powered By Cilans System</p>
        </FooterCopyRight>
      </Container>
    </FooterBox>
  );
};

export default Footer;
