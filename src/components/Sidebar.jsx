import React from "react";
// import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import "../css/sidebar.css"
import { Avatar } from "./Navbar";
import FrameComponent from "react-frame-component";
import Frame from "react-frame-component"
import Logout from "./logout";
import { Search } from "./search";

export default function Sidebar() {
  const handle=()=>{<Search/>}
  return (
  // <Frame className="fr">
    <div className="contain2">
      <div className="color1"></div>
      <div className="color2"></div>
      <div className="color3"></div>
    <div className="link">
      <div className="logo">
        
      </div>
    
      </div>
      <div>

        <ul className="ulist">
          <li className="list">
            <MdHomeFilled className="home"/>
            <span onClick={handle} className="span1">Home</span>
          </li>
          <li className="list">
            <MdSearch />
            <span className="span1">Trends</span>
          </li>
          <li className="list">
            <IoLibrary/>
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
            <MdHomeFilled />
            <span className="span1">Artist</span>
          </li>
          <li className="list">
            <MdSearch />
            <span className="span1"><Playlists/></span>
          </li>
          <div className="p"></div>
          <Avatar/>
          <Logout/>
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

// const Container = styled.div`
//   background-color: black;
//   color: #b3b3b3;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
//   .top__links {
//     display: flex;
//     flex-direction: column;
//     .logo {
//       text-align: center;
//       margin: 1rem 0;
//       img {
//         max-inline-size: 80%;
//         block-size: auto;
//       }
//     }
//     ul {
//       list-style-type: none;
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       padding: 1rem;
//       li {
//         display: flex;
//         gap: 1rem;
//         cursor: pointer;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: white;
//         }
//       }
//     }
//   }
// `;
