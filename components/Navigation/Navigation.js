import Link from "next/link";
import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useScrollPosition } from "../../ui/hooks/useScrollPosition";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: white;
`;

const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  li {
    margin: 0 1rem;
    list-style: none;
  }
`;

const StyledA = styled.a`
  color: black;
  text-decoration: none;
  padding: 1rem 0;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
`;

const NavLink = ({ active, children, href }) => {
  return (
    <Link href={href}>
      <StyledA>{children}</StyledA>
    </Link>
  );
};

const StickTop = ({ children }) => {
  const scrollPos = useScrollPosition();
  const ref = useRef(null);

  const [stick, setStick] = useState(false);

  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      const { top } = elem.getBoundingClientRect();
      if (!stick && top <= 0) {
        setStick(true);
      } else if (stick && top > 0) {
        setStick(false);
      }
    }
  }, [scrollPos, stick]);

  const stickStyle = useMemo(() => {
    return stick
      ? {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }
      : {};
  }, [stick]);

  return (
    <div ref={ref}>
      <div
        style={{
          ...stickStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Navigation = () => {
  const router = useRouter();

  return (
    <div
      style={{
        height: "4rem",
      }}
    >
      <StickTop>
        <StyledNav>
          <NavUl>
            <li>
              <NavLink href="/" active={router.pathname === "/"}>
                Start
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/restaurants"
                active={router.pathname === "/restaurants"}
              >
                Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink href="/bars" active={router.pathname === "/bars"}>
                Bars
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/impressum"
                active={router.pathname === "/impressum"}
              >
                Impresume
              </NavLink>
            </li>
          </NavUl>
        </StyledNav>
      </StickTop>
    </div>
  );
};

export default Navigation;
