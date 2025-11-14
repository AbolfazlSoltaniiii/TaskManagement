import LinkButton from "../../components/button/LinkButton.jsx";
import { useEffect, useState } from "react";

const MainPage = () => {
  const fullTitle = "Start organizing your tasks";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setDisplayedText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p
        className={
          "font-codystar pb-5 text-center text-2xl font-bold tracking-widest uppercase md:text-3xl dark:text-stone-200"
        }
      >
        <span className="block pb-3 md:inline md:pb-0">😇</span>
        {displayedText}
        <span className="block pt-3 md:inline md:pt-0">😇</span>
      </p>

      <div className={"flex items-center justify-center gap-2"}>
        {sessionStorage.getItem("activeUser") ? (
          <LinkButton to={"tasks"} type={"base"}>
            Tasks
          </LinkButton>
        ) : (
          <>
            <LinkButton to={"login"} type={"base"}>
              Login
            </LinkButton>
            <LinkButton to={"register"} type={"base"}>
              Register
            </LinkButton>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
