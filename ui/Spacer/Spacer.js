import React from "react";

const Spacer = ({ bottom = "0", top = "0" }) => {
  return (
    <div
      style={{
        marginBottom: bottom,
        marginTop: top,
      }}
    />
  );
};

export default Spacer;
