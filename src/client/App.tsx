import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import styled from "styled-components";
import { getInitData } from "./redux/general/actions";
import ParksLogo from "./components/SVG/parksLogo";
import List from "./components/primitives/List";
import Spinner from "./components/primitives/Spinner";
import { Garden } from "./redux/types";
import Card from "./components/primitives/Card";
import AddAGarden from "./components/AddAGarden";

const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  width: "min(80vw, 600px)",
});

const Header = styled("header")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled("h1")({
  fontSize: "30px",
  fontWight: "bold",
  color: "var(--grey)",
});

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetching, gardens } = useSelector((state: any) => state.main);
  useEffect(() => {
    dispatch(getInitData());
  }, []);
  return (
    <Main>
      <Header>
        <ParksLogo height="400px" />
        <Title>Community Garden quick lookup</Title>
      </Header>
      {fetching ? (
        <Spinner />
      ) : (
        <List>
          {gardens.map((garden: Garden, idx:number) => (
            <Card data={garden} key={idx}/>
          ))}
        </List>
      )}
      <AddAGarden />
    </Main>
  );
};

export default App;
