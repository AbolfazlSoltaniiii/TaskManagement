const Button = ({children, type, onClick}) => {
  const className = "border border-stone-500 rounded-lg cursor-pointer hover:bg-gradient-to-bl hover:from-stone-200 hover:to-stone-300 focus:outline-stone-500";

  const style = {
    extraSmall: `${className} px-3 py-2`,
    small: `${className} px-7 py-2`,
    base: `${className} px-9 py-3`,
    large: `${className} py-1 w-full`
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;