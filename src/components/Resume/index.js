import React from "react";
import * as C from "./styles";
import ResumeItem from "../ResumeItem";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
    </C.Container>
  );
};

export default Resume;
