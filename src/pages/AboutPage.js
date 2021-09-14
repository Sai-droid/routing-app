import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";
import OuterPage from "./OuterPage";
function AboutPage() {
  return (
    <>
      <h1>welcome to About Page</h1>
      <h2>Message:{useContext(messageContext)}</h2>
      <OuterPage />
    </>
  );
}

export default AboutPage;
