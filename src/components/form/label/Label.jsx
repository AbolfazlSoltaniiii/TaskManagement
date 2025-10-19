const Label = ({htmlFor, children}) => {
  return (
    <label htmlFor={htmlFor} className="text-stone-700">
      {children}
    </label>
  );
};

export default Label;