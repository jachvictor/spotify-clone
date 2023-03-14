import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../css/search.css";
import Navba from "./NavBa";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import { FaSearch } from "react-icons/fa";
// import "../css/body.css"
import Head from "./head";
import { Home } from "@material-ui/icons";

export function Search() {
  const [query, setQuery] = useState("");
  const [searchDetails, setSearchDetails] = useState(null);
  const [{ token1 }, dispatch] = useStateProvider();
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
          Authorization: "Bearer " + token1,
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
  }, [token1, dispatch]);
  //searching songs or albums or etc
  const onSearch = async () => {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${query}`,
      {
        headers: {
          Authorization: "Bearer " + token1,
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
        Authorization: `Bearer ${token}`,
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
      <div className="hold" key={artist.id}>
        {artist.images.length ? (
          <img
            className="art"
            // width={"0"}
            src={artist.images[1].url}
            alt=""
          />
        ) : (
          <div className="art">
            <img src="/images1/r11.png" alt="" />
          </div>
        )}
        <div className="artname">{artist.name}</div>
      </div>
    ));
  };

  const renderArtists1 = () => {
    return artists.map((artist) => (
      <div className="hol" key={artist.id}>
        {artist.images.length ? (
          <img
            className="ar"
            // width={"0"}
            src={artist.images[1].url}
            alt=""
          />
        ) : (
          <div className="ar">
            <img src="/images/r11.png" alt="" />
          </div>
        )}
        <div className="artname">{artist.name}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className="contain4">
        {token ? (
          <div className="searchbar">
            <form onSubmit={searchArtists}>
              <input
                className="input"
                type="text"
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="search artist"
              />
            </form>
          </div>
        ) : (
          <h2>Please login</h2>
        )}
        {/* {searchArtists} */}
        <h3>favArtist</h3>
        <div className="con">
          <ul className="ulist1">
            <li className="list1">
              <span className="span1"> {renderArtists()}</span>
            </li>
          </ul>
        </div>

        {/* </header> */}
      </div>
      <div className="down">{renderArtists1()}</div>
    </div>
  );
}

function Navb({ navBackground, query, setQuery, onSearch }) {
  const [{ userInfo }] = useStateProvider();

  return (
    <div className="containn4">
      <div className="searchbar1">
        <FaSearch />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="input1"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Artists, songs, or podcasts"
          />
          <button onClick={onSearch} type="submit" style={{ display: "none" }}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
