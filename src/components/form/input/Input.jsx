import Error from "../error/Error.jsx";

const Input = ({
  type,
  name,
  placeholder,
  extraClassName,
  required,
  register,
  errorMsg,
}) => {
  return (
    <>
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-stone-400 py-2 pr-3 pl-10 text-stone-800 focus:outline-none dark:text-stone-200 ${extraClassName} `}
        required={required}
      />

      {errorMsg && <Error>{errorMsg}</Error>}
    </>
  );
};

export default Input;
