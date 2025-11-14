const Button = ({ children, type, onClick, extraClassName }) => {
  const className = `border border-stone-400 dark:border-stone-600 rounded-lg cursor-pointer bg-gradient-to-bl
   to-stone-400 from-stone-200 hover:bg-gradient-to-br hover:from-stone-200 hover:to-stone-400
    focus:outline-stone-700 dark:bg-gradient-to-br dark:text-stone-200 dark:from-stone-700 dark:to-stone-900
       dark:hover:bg-gradient-to-bl dark:hover:from-stone-700 dark:hover:to-stone-900`;

  const style = {
    extraSmall: `${className} px-3 py-2 ${extraClassName}`,
    small: `${className} px-7 py-2 ${extraClassName}`,
    base: `${className} px-9 py-3 ${extraClassName}`,
    large: `${className} py-1.5 w-full ${extraClassName}`,
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
