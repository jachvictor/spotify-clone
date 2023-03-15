import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };
  return (
    <Container>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width:100%;
  float:right;
  // margin-left:14cm;
  margin-top:-3cm;
  justify-content: flex-end;
  align-content: center;
  color:black;
  input {
    width: 1.6cm;
    border-radius: 2rem;
    height: 0.5rem;
    margin-right:-14cm;
    displey:flex;
    color:black;
    background-color:black;
  }
`;
