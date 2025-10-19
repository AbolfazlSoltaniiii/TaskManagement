import LinkButton from "../../components/button/LinkButton.jsx";

const MainPage = () => {
  return (
    <div>
      <p className={"uppercase text-3xl font-semibold pb-5 tracking-widest"}>😇Ensure your tasks😇</p>

      {
        !sessionStorage.getItem("activeUser") && (
          <div className={"flex items-center justify-center gap-2"}>
            <LinkButton to={"login"} type={"base"}>Login</LinkButton>
            <LinkButton to={"register"} type={"base"}>Register</LinkButton>
          </div>
        )
      }
    </div>
  );
};

export default MainPage;