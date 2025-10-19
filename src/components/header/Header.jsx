import LightModeIcon from "./icons/LightModeIcon.jsx";
import DarkModeIcon from "./icons/DarkModeIcon.jsx";
import { useState } from "react";
import { Link } from "react-router";
import Button from "../button/Button.jsx";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className={"fixed start-0 end-0 flex items-center justify-between px-4 py-3"}>
      <Link to={"/"} className={"tracking-widest uppercase text-3xl font-semibold hover:font-bold"}>
        Task Management
      </Link>

      <Button
        type={"extraSmall"}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {
          isDarkMode ? <DarkModeIcon /> : <LightModeIcon />
        }
      </Button>
    </header>
  );
};

export default Header;