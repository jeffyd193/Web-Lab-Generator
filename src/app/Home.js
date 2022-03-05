import React from "react";
import { Heading } from "./Heading";
import { SectionList } from "./SectionList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Heading />
        <SectionList />
      </div>
    </React.Fragment>
  );
};
