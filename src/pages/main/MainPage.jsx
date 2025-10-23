import LinkButton from "../../components/button/LinkButton.jsx";

const MainPage = () => {
  return (
    <div>
      <p
        className={
          "font-codystar pb-5 text-center text-2xl font-bold tracking-widest uppercase md:text-3xl dark:text-stone-200"
        }
      >
        <span className="block pb-3 md:inline md:pb-0">😇</span>
        Start organizing your tasks
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
