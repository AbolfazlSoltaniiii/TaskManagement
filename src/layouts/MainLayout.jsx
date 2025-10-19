import Header from "../components/header/Header.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className={"flex flex-col bg-gradient-to-bl from-stone-200 to-stone-400 h-screen"}>
      <Header />

      <main className={"flex-1 flex justify-center items-center"}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;