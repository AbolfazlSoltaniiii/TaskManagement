const EmptyTask = () => {
  return (
    <div
      className={
        "my-auto text-2xl font-semibold tracking-widest text-stone-500 select-none"
      }
    >
      <span>🧐</span>
      <span className={"italic"}>No task has been defined for this day.</span>
      <span>🧐</span>
    </div>
  );
};

export default EmptyTask;
