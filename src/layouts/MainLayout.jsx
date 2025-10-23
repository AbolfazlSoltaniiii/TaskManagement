import Header from "../components/header/Header.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`flex h-screen flex-col bg-gradient-to-bl from-stone-200 to-stone-400 dark:from-neutral-800 dark:to-neutral-900 ${isDarkMode ? "dark" : ""}`}
    >
      <Header isDarkMode={isDarkMode} updateDarkMode={setIsDarkMode} />

      <main className={"flex flex-1 items-center justify-center"}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
