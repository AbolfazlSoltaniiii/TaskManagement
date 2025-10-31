import { useState } from "react";
import { updateTaskIsDone } from "../../services/apiTasks.js";

const TaskItem = ({ taskId, title, description, isDone }) => {
  const [isTaskDone, setIsTaskDone] = useState(isDone);

  const onIsDoneChange = () => {
    setIsTaskDone(!isTaskDone);

    updateTaskIsDone(taskId, !isTaskDone);
  };

  return (
    <div className={"mb-3 rounded-xl border border-stone-400 p-4"}>
      <div className="flex items-center gap-1.5 pb-4">
        <input
          type="checkbox"
          checked={isTaskDone}
          className={"mr-2 h-4 w-4 accent-stone-600 focus:outline-stone-500"}
          onChange={onIsDoneChange}
        />

        <p
          className={`text-2xl font-semibold text-stone-900 ${isTaskDone ? "line-through" : ""}`}
        >
          {title}
        </p>
      </div>

      <span
        className={`text-md ms-4 line-clamp-1 text-stone-800 ${isTaskDone ? "line-through" : ""}`}
      >
        {description}
      </span>
    </div>
  );
};

export default TaskItem;
