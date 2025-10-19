import Error from "../error/Error.jsx";

const Input = ({type, name, placeholder, extraClassName, required, register, errorMsg}) => {
  return (
    <>
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full border border-stone-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none text-stone-800 ${extraClassName}`}
        required={required}
      />

      {
        errorMsg && <Error>{errorMsg}</Error>
      }
    </>
  );
};

export default Input;