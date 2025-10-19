const Error = ({children, type = "small"}) => {
  return (
    <div className={`text-red-400 font-semibold ps-4 ${type === "small" ? "text-sm" : "text-md"}`}>
      {children}
    </div>
  );
};

export default Error;