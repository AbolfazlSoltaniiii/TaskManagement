import { Link } from "react-router";

const LinkButton = ({ children, type, to }) => {
  const className = `border border-stone-500 rounded-lg dark:!text-stone-200 text-lg md:text-md bg-gradient-to-bl 
    hover:from-stone-300 hover:to-stone-400 dark:hover:from-stone-700 dark:hover:to-stone-900
     focus:outline-stone-500 dark:focus:outline-stone-950`;

  const style = {
    small: `${className} px-7 py-2`,
    base: `${className} px-12 py-2.5`,
  };

  return (
    <Link to={to} className={style[type]}>
      {children}
    </Link>
  );
};

export default LinkButton;
