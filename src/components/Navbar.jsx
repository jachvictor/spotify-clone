// import React,{useState} from "react";
// import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import "../css/navbar.css"
import { useState, useEffect } from "react";

export default function Navbar({ navBackground }) {
  // const [{ userInfo }] = useStateProvider();

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="canta" navBackground={navBackground}>
      <button className="move">&larr;</button>
      <button className="move">&rarr;</button>
    </div>
  );
}

export function Avatar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className="cantain4" navBackground={navBackground}>
      <h3>userprofile</h3>
      <div className="avatar">
        <a className="a" href={userInfo?.userUrl}>
          <CgProfile className="home" />
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </div>
  );
}
