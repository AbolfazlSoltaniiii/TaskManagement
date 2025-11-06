const EmptyTask = () => {
  return (
    <div
      className={
        "my-auto flex flex-col items-center px-4 text-2xl font-semibold tracking-widest text-stone-500 select-none md:flex-row"
      }
    >
      <span>🧐</span>
      <span className={"text-center italic"}>
        No task has been defined for this day.
      </span>
      <span>🧐</span>
    </div>
  );
};

export default EmptyTask;
