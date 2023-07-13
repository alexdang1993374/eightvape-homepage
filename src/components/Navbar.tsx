"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { movingGradient } from "@/constants";
import {
  backgroundPrimary,
  boxBackground,
  failColor,
  sunsetBackground,
  textPrimary,
  textSecondary,
} from "@/lib/colors";
import { logo } from "@/assets";
// import { useGlobalContext } from "./GlobalContext";
// import LanguageDropdown from "./LanguageDropdown";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import Image from "next/image";

interface INavLink {
  id: string;
  title: string;
}

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  //   const [navLinks, setNavLinks] = useState<INavLink[]>([]);
  const [activeNav, setActiveNav] = useState("");
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "products",
      title: "All Products",
    },
    {
      id: "contact",
      title: "Contact Us",
    },
    {
      id: "cart",
      title: "Cart",
    },
  ];

  //   const { cartProducts, activeLanguage } = useGlobalContext();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        toggle &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggle]);

  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  return (
    <StyledNav>
      <ContainerSt>
        <StyledLink href="/" title="logo" onClick={() => window.scrollTo(0, 0)}>
          <ImageContainer>
            <Image src={logo} alt="eightvape logo" width={50} height={50} />
          </ImageContainer>
        </StyledLink>

        <StyledLargeScreenUl>
          {navLinks.map((link) => (
            <li key={link.id}>
              <StyledLink href={`/${link.id}`} title={link.title} passHref>
                <StyledMenuAnchor
                  onClick={() => setActiveNav(link.id)}
                  activeNav={activeNav}
                  id={link.id}
                >
                  {link.title}
                </StyledMenuAnchor>
              </StyledLink>
            </li>
          ))}
        </StyledLargeScreenUl>

        <MenuIconItemsContainer>
          {/* {cartProducts.length > 0 && (
            <CartCounter $isOpen={toggle} onClick={() => setToggle(!toggle)}>
              {cartProducts.length}
            </CartCounter>
          )} */}

          <DropdownWrapper ref={wrapperRef}>
            <NavButton onClick={() => setToggle(!toggle)}>
              {toggle ? <CloseIcon /> : <MenuIcon />}
            </NavButton>

            <AnimatePresence>
              {toggle && (
                <ListContainerSt
                  toggle={toggle}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                >
                  <StyledUl>
                    {navLinks.map((link) => (
                      <li key={link.id} onClick={() => setToggle(!toggle)}>
                        <StyledLink
                          href={`/${link.id}`}
                          title={link.title}
                          passHref
                        >
                          <StyledAnchor
                            onClick={() => setActiveNav(link.id)}
                            activeNav={activeNav}
                            id={link.id}
                          >
                            {link.title}
                          </StyledAnchor>
                        </StyledLink>
                      </li>
                    ))}
                  </StyledUl>
                </ListContainerSt>
              )}
            </AnimatePresence>
          </DropdownWrapper>
        </MenuIconItemsContainer>
      </ContainerSt>
    </StyledNav>
  );
};

export default Navbar;
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledNav = styled.nav`
  padding: 1.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 20;
  background-image: ${sunsetBackground};
  background-size: 400% 400%;
  animation: ${movingGradient} 25s ease infinite;
`;

const ContainerSt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 640px) {
    margin-right: 4rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2;
  text-decoration: none;
`;

const MenuIconItemsContainer = styled.div`
  display: none;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media screen and (max-width: 640px) {
    display: flex;
  }
`;

const ListContainerSt = styled(motion.div)<{ toggle: boolean }>`
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  padding: 0.6rem;
  position: absolute;
  background-color: ${boxBackground};
  min-width: 14rem;
  top: 96%;
  right: 3%;
  margin: 0.2rem 0.4rem;
  box-shadow: 0rem 0.8rem 1.6rem 0rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  border-radius: 1.2rem;
`;

const StyledLargeScreenUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-right: 3rem;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;

const StyledMenuAnchor = styled.div<{ activeNav: string; id: string }>`
  color: ${({ activeNav, id }) =>
    activeNav === `/${id}` || activeNav === `${id}`
      ? backgroundPrimary
      : textPrimary};
  opacity: ${({ activeNav, id }) =>
    activeNav === `/${id}` || activeNav === `${id}` ? 1 : 0.6};
  font-size: 1.8rem;
  font-weight: medium;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${backgroundPrimary};
  }
`;

const StyledAnchor = styled(StyledMenuAnchor)`
  font-size: 1.6rem;
  color: ${({ activeNav, id }) =>
    activeNav === `/${id}` || activeNav === `${id}`
      ? textPrimary
      : textSecondary};
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 4rem;
  height: 4rem;
  border: 0;
  color: ${backgroundPrimary};
  cursor: pointer;
  position: relative;
  z-index: 3;
  margin-right: 1rem;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

interface ICartCounter {
  $isOpen: boolean;
}

const CartCounter = styled.span<ICartCounter>`
  position: absolute;
  background-color: ${failColor};
  color: ${backgroundPrimary};
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  z-index: 4;
`;
