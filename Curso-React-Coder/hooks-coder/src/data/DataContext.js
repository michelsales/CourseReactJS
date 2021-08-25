import React, { createContext } from "react";

export const data = {
  number: 123,
  text: "oioi..",
};

export const DataContext = createContext(data);

export default DataContext;