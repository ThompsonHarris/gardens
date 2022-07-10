import React from "react";
import styled from "styled-components";
import GardenForm from "../GardenForm";

const AddGardenHeader = styled("h2")({
  fontSize: "25px",
  fontWight: "bold",
  color: "var(--grey)",
});

const AddAGardenWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  marginBottom: "20px",
});

const AddAGarden: React.FC = ({}) => {
  return (
    <AddAGardenWrapper>
      <AddGardenHeader>Add a garden</AddGardenHeader>
      <GardenForm />
    </AddAGardenWrapper>
  );
};

export default AddAGarden;
