import React from "react";
// import styled from "styled-components";
import "../css/login.css";


export default function Login() {
  const handleClick = async () => {
    const client_id = "1339902024254cb6aa018773f8d49be9";
    // const redirect_uri = "http://localhost:3000/";
    const redirect_uri = "https://jachvictor.github.io/spotify-clone/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token"
    const scope = [
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
      <button className="but1" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   background-color: #1db954;
//   gap: 5rem;
//   img {
//     height: 20vh;
//   }
//   button {
//     padding: 1rem 5rem;
//     border-radius: 5rem;
//     background-color: black;
//     color: #49f585;
//     border: none;
//     font-size: 1.4rem;
//     cursor: pointer;
//   }
// `;