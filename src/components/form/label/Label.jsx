const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-stone-700 dark:text-stone-300">
      {children}
    </label>
  );
};

export default Label;
