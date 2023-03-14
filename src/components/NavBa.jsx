import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../css/navbar.css";
export default function Navba({ navBackground, query, setQuery, onSearch }) {
  const [{ userInfo }] = useStateProvider();

  return (
    <div navBackground={navBackground}>
      <button className="move">&larr;</button>
      <button className="move">&rarr;</button>
      <div className="searchbar1">
        <FaSearch />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="inpu1"
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
