import React from "react";
import { RiMoonFill } from "react-icons/ri";
import { HiSun } from "react-icons/hi";
import { theme } from "../utils/theme";

export function Navbar() {
  let [light, isLight] = React.useState(false);
  return (
    <nav id="nav" className="bg-white">
      <div>
        <img src="./public/logo.png" alt="logo" />
      </div>
      <div className="theme-icon bg-gray-100">
        {light ? (
          <HiSun
            className="icon"
            onClick={() => {
              isLight((prev) => !prev);
              theme(light);
            }}
          />
        ) : (
          <RiMoonFill
            className="icon"
            onClick={() => {
              isLight((prev) => !prev);
              theme(light);
            }}
          />
        )}
      </div>
    </nav>
  );
}
