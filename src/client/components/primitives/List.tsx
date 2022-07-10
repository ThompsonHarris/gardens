import React from "react";
import styled from "styled-components";

const ListWrapper = styled("ul")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  listStyle: "none",
  margin: "0",
  padding: "0",
  width: "100%",
});

const List: React.FC = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};

export default List;
