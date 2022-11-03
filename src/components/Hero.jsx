import React from "react";
import VideoBG from "../herobg.mp4";

export default function Hero() {
  return (
    <div className="Hero">
      <h1 className="Hero-Text">The Home to your scents</h1>
      <video
        autoPlay={true}
        loop={true}
        mute="true"
        className="Video-BG"
        src={VideoBG}
      />
      <button className="Hero-Button">Hello</button>
    </div>
  );
}
