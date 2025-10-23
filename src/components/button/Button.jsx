const Button = ({ children, type, onClick }) => {
  const className = `border border-stone-400 dark:border-stone-600 rounded-lg cursor-pointer bg-gradient-to-bl
   to-stone-300 from-stone-100 hover:bg-gradient-to-br hover:from-stone-100 hover:to-stone-300
    focus:outline-stone-700 dark:bg-gradient-to-br dark:text-stone-200 dark:from-stone-700 dark:to-stone-900
       dark:hover:bg-gradient-to-bl dark:hover:from-stone-700 dark:hover:to-stone-900`;

  const style = {
    extraSmall: `${className} px-3 py-2`,
    small: `${className} px-7 py-2`,
    base: `${className} px-9 py-3`,
    large: `${className} py-1.5 w-full`,
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
