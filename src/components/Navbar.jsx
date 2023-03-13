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

  const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      // getToken()


      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: "Bearer " + token
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    setArtists(data.artists.items)
}

const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}

  return (
    <div className="canta" navBackground={navBackground}>
      <button className="move">&larr;</button>
      <button className="move">&rarr;</button>
      {/* <div className="searchbar"> */}
        {/* <FaSearch /> */}
        {/* <form action="" onSubmit={searchArtists}>
        <input className="input" type="text" onChange={e => setSearchKey(e.target.value)} 
        placeholder="Artists, songs, or podcasts" />
        <button type={"submit"}>Search</button>
        </form> */}
        {/* <input type="text" /> */}
        {/* {renderArtists()} */}
      {/* </div> */}
      {/* <div className="avatar">
        <a className="a" href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div> */}
    </div>
  );
}


export  function Avatar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className="cantain4" navBackground={navBackground}>
      {/* <div className="searchbar">
        <FaSearch />
        <input className="input" type="text" placeholder="Artists, songs, or podcasts" />
      </div> */}
      <h3>userprofile</h3>
      <div className="avatar">
        
        <a className="a" href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </div>
  );
}
// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2rem;
//   height: 15vh;
//   position: sticky;
//   top: 0;
//   transition: 0.3s ease-in-out;
//   background-color: ${({ navBackground }) =>
//     navBackground ? "rgba(0,0,0,0.7)" : "none"};
//   .searchbar {
//     background-color: white;
//     width: 30%;
//     padding: 0.4rem 1rem;
//     border-radius: 2rem;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     margin-right:9cm;
//     input {
//       border: none;
//       height: 2rem;
//       width: 100%;
//       &:focus {
//         outline: none;
//       }
//     }
//   }
//   .avatar {
//     background-color: black;
//     padding: 0.3rem 0.4rem;
//     padding-right: 1rem;
//     border-radius: 2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     a {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 0.5rem;
//       text-decoration: none;
//       color: white;
//       font-weight: bold;
//       svg {
//         font-size: 1.3rem;
//         background-color: #282828;
//         padding: 0.2rem;
//         border-radius: 1rem;
//         color: #c7c5c5;
//       }
//     }
//   }
// `;
