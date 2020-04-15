import React from "react";
import "./Header.css";

export const BackDrop = ({ close }) => {
  return <div className="backdrop" onClick={close} />;
};
