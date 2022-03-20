import React from "react";

export const Header = () => {
  const headerStyle = {
    width: "100%",
    padding: "2%",
    backgroundColor: "yellowgreen",
    color: "black",
    textAlign: "center",
  };

  return (
    <div style={headerStyle}>
      <h1>Dealer Track</h1>
    </div>
  );
};
