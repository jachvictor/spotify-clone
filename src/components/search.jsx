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
              {/* <button type={"submit"}>Search</button> */}
            </form>
          </div>
        ) : (
          <h2>Please login</h2>
        )}

        <div className="con">
          <ul className="ulist1">
            <li className="list1">
              <span className="span1"> {renderArtists()}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="down">{renderArtists1()}</div>
    </div>
  );
}

