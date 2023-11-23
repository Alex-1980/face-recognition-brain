import React from "react";
import { Tilt } from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img className='w-80 pt2' alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
}
