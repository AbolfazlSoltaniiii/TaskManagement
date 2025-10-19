import { Link } from "react-router";

const LinkButton = ({children, type, to}) => {
  const className = "border border-stone-700 rounded-lg";

  const style = {
    small: `${className} px-7 py-2`,
    base: `${className} px-9 py-3`
  };

  return (
    <Link to={to} className={style[type]}>
      {children}
    </Link>
  );
};

export default LinkButton;