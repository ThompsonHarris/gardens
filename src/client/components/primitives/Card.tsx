import React from "react";
import styled from "styled-components";
import { Garden } from "../../redux/types";
import {
  BsPlusCircleFill,
  BsFillGearFill,
  BsXCircleFill,
} from "react-icons/bs";
import Button from "../primitives/Button";

interface CardProps {
  data: Garden;
}

const CardWrapper = styled("li")({
  display: "flex",
  flexDirection: "row",
  borderBottom: "5px solid var(--grey)",
  width: "400px",
  paddingTop: "10px",
  paddingBottom: "10px",
  justifyContent: "space-between",
});

const CardInfo = styled("div")({
  marginTop: "20px",
  marginBottom: "20px",
});

const Actions = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const CardHeader = styled("h2")({
  fontSize: "20px",
  fontWeight: "bold",
  color: "var(--grey)",
});

const CardSubHeader = styled("h3")({
  fontSize: "15px",
  fontWeight: "bold",
  color: "var(--grey)",
});

const Plus = styled(BsPlusCircleFill)({
  fill: "var(--lightGreen)",
  width: "20px",
  height: "20px",
  marginRight: "10px",
  marginLeft: "10px",
});

const Delete = styled(BsXCircleFill)({
  fill: "var(--orange)",
  width: "20px",
  height: "20px",
  marginRight: "10px",
  marginLeft: "10px",
});

const Edit = styled(BsFillGearFill)({
  fill: "var(--grey)",
  width: "20px",
  height: "20px",
  marginRight: "10px",
  marginLeft: "10px",
});

const Card: React.FC<CardProps> = ({ data, children }) => {
  return (
    <CardWrapper>
      <CardInfo>
        <CardHeader>{data.name}</CardHeader>
        <CardSubHeader>
          {data.city}, {data.state}
        </CardSubHeader>
      </CardInfo>
      <Actions>
        <Button><Plus /></Button>
        <Button><Edit /></Button>
        <Button><Delete /></Button>
      </Actions>
    </CardWrapper>
  );
};

export default Card;
