import React from "react";

export const Bandera = ({ ban, name }) => {
  return (
    <>
      <img src={ban} alt={name}  className="img-fluid shadow"/>
    </>
  );
};
