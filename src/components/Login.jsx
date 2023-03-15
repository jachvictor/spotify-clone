import React from "react";
// import styled from "styled-components";
import "../css/login.css";

export default function Login() {
  const handleClick = async () => {
    const client_id = "1339902024254cb6aa018773f8d49be9";
    // const client_id = "51b9d0ed71a04247941c4d204b1b54e2";
    // const redirect_uri = "http://localhost:3000/";
    const redirect_uri = "https://jachvictor.github.io/spotify-clone/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const scope = [
      "streaming",
      "user-library-read",
      "user-library-modify",
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${RESPONSE_TYPE}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="contain">
      <img className="imgl" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />

      <button className="but1" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}
