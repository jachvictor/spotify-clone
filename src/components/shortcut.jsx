import React,{useState,useEffect} from "react";
import { Search } from "./search";
import "../css/shortcut.css"
import axios from "axios";
import "../css/search.css"
import Navba from "./NavBa";
export default function Shortcut(){

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
            <div className="art">No Image</div>
          )}
          <div className="artname">
          {artist.name}</div>
        </div>
      ));
    };

return(
    <div>
        <h2 className="searchbox">
{/* <Search/> */}Shortcut
        </h2>
        <div className="">
            {/* <Navba/> */}
        </div>
    </div>
)
}