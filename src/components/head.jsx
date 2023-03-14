import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Body from "./Body";
import "../css/spotify.css";
import Navba from "./NavBa";
import Shortcut from "./shortcut";
import { Search } from "./search";
import "../css/search.css";

// import Navbar from "./navbar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import SearchResults from "./SearchResults";
export default function Head() {
  const [query, setQuery] = useState("");
  const [searchDetails, setSearchDetails] = useState(null);
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      // console.log("data",data)
      const userInfo = {
        // userId: data.id,
        // userName: data.display_name,
        // imgUrl: data.images[0].url,
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [token, dispatch]);
  //searching songs or albums or etc
  const onSearch = async () => {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${query}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(response.data.tracks.items)
    setSearchDetails(response.data.tracks.items);
    // const albums = response.data
    // console.log(albums)
    // dispatch({ type: reducerCases.SET_ALBUMS, albums});
  };
  return (
    <div ref={bodyRef} onScroll={bodyScrolled}>
      <Navba
        navBackground={navBackground}
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
      />
    </div>
  );
}
