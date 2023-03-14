import React, { useEffect, useRef, useState } from "react";
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
function Spotify() {
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
        userName: data.display_name,
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
    <div className="contain1">
      <div className="spotifybody">
        <Sidebar setSearchDetails={setSearchDetails} />
        <div className="body " ref={bodyRef} onScroll={bodyScrolled}>
          <Navba
            navBackground={navBackground}
            query={query}
            setQuery={setQuery}
            onSearch={onSearch}
          />
          <div className="bodycontents">
            {searchDetails ? (
              <SearchResults searchDetails={searchDetails} />
            ) : (
              <Body headerBackground={headerBackground} />
            )}

            <Search />
          </div>
        </div>
      </div>

      <Footer />

      <Shortcut />
    </div>
  );
}
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
export default Spotify;
