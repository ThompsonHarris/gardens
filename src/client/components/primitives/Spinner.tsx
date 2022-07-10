import React from "react";
import styled from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/Cg";

const SpinnerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
});

const SpinnerElement = styled(CgSpinnerTwoAlt)({
  animation: "spin 1s linear infinite",
  fill: "var(--grey)",
  width: '50px',
  height: '50px'
});

const Spinner: React.FC = ({ children }) => {
  return (
    <SpinnerContainer>
      <SpinnerElement />
    </SpinnerContainer>
  );
};

export default Spinner;
