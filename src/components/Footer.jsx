import React from "react";
import CurrentTrack from "./CurrentTrack";
import PlayBack from "./PlayBack";

import PlayerControls from "./PlayerControls";
import Volume from "./Volume";
import "../css/footer.css";
export default function Footer() {
  return (
    <div className="contain3">
      <PlayBack />
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
}
