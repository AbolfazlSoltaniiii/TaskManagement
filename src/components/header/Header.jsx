import LightModeIcon from "./icons/LightModeIcon.jsx";
import DarkModeIcon from "./icons/DarkModeIcon.jsx";
import { Link } from "react-router";
import Button from "../button/Button.jsx";

const Header = ({ isDarkMode, updateDarkMode }) => {
  return (
    <header
      className={
        "fixed start-0 end-0 flex items-center justify-between px-4 py-3"
      }
    >
      <Link
        to={"/"}
        className={
          "font-shrikhand text-2xl tracking-wider uppercase duration-300 focus:outline-none md:text-4xl md:tracking-widest hover:md:tracking-[0.2em] dark:!text-stone-200"
        }
      >
        Task Management
      </Link>

      <Button type={"extraSmall"} onClick={() => updateDarkMode(!isDarkMode)}>
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </header>
  );
};

export default Header;
