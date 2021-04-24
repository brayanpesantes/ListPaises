import React from "react";
import { Card } from "./Card";

export const ListPaises = (pais) => {
  return (
    <div className="col-sm-12 col-md-4 shadow spcing-2 mb-4">
      <Card {...pais} />
    </div>
  );
};
