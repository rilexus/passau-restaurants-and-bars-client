import React from "react";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { Spacer } from "ui/Spacer";

const s = {
  borderBottom: "1px solid #d5d5d5",
};
const HorizontalLine = (props) => {
  return <div style={s} {...props} />;
};

const Header = () => {
  return (
    <header>
      <Logo />
      <Spacer bottom={"2rem"} />
      <HorizontalLine />
      <Navigation />
      <Spacer bottom={"4rem"} />
    </header>
  );
};

export default Header;
