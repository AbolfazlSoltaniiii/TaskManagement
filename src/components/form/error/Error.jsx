const Error = ({ children, type = "small" }) => {
  return (
    <div
      className={`ps-4 font-semibold text-red-400 ${type === "small" ? "text-sm" : "text-md"}`}
    >
      {children}
    </div>
  );
};

export default Error;
