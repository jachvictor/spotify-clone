import React from "react";
// import styled from "styled-components";
import { TrendingDown } from "@material-ui/icons";
import { PlaylistAdd } from "@material-ui/icons";
import { PictureAsPdf } from "@material-ui/icons";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import "../css/sidebar.css";
import { Avatar } from "./Navbar";
import FrameComponent from "react-frame-component";
import Frame from "react-frame-component";
import Logout from "./logout";
import { Search } from "./search";
// import "../images1"

export default function Sidebar() {
  return (
    // <Frame className="fr">
    <div className="contain2">
      <div className="color1"></div>
      <div className="color2"></div>
      <div className="color3"></div>
      {/* <div className="link"> */}
        {/* <div className="logo"> */}
        <img className="img1" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />

        {/* </div> */}
      {/* </div> */}
      <div>
        <ul className="ulist">
          <li className="list">
          {/* <img src="/logo.png" alt="" className="imglogo" /> */}
            <MdHomeFilled className="home" />
            <span className="span1">Home</span>
          </li>
          <li className="list">
            <TrendingDown className="home" />
            <span className="span1">Trends</span>
          </li>
          <li className="list">
            <IoLibrary className="home" />
            <span className="span1">Feed</span>
          </li>
          {/* <p>discover</p>
          <li className="list">
            <MdHomeFilled />
            <span className="span1">New and Notable</span>
          </li>
          <li className="list">
            <MdSearch />
            <span className="span1">Release Calender</span>
          </li>
          <li className="list">
            <IoLibrary/>
            <span className="span1">Events</span>
          </li> */}
          <p className="header">Your collection</p>
          <li className="list">
            <PictureAsPdf className="home" />
            <span className="span1">Artist</span>
          </li>
          <li className="list">
            <PlaylistAdd className="home" />
            <span className="span2">
              <Playlists />
            </span>
          </li>
          <div className="p"></div>
          <Avatar />
          <Logout />
          {/* <li className="list"> */}

          {/* <span className="span1">feed</span> */}
          {/* </li> */}
        </ul>
        {/* </FrameComponent> */}
      </div>
      {/* <Playlists/> */}
    </div>
    // {/* </Frame> */}
  );
}
