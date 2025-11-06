import { useState } from "react";
import { updateTaskIsDone } from "../../../services/apiTasks.js";
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = ({
  taskId,
  title,
  description,
  isDone,
  time,
  onDeleteTaskClick,
}) => {
  const [isTaskDone, setIsTaskDone] = useState(isDone);

  const onIsDoneChange = () => {
    setIsTaskDone(!isTaskDone);

    updateTaskIsDone(taskId, !isTaskDone);
  };

  return (
    <div
      className={`relative mb-4 rounded-2xl border border-stone-300 px-5 pt-5 pb-11 ${
        isTaskDone ? "bg-stone-200 opacity-80" : "bg-stone-100 opacity-90"
      }`}
    >
      <div className="flex items-center gap-2 pb-3">
        <input
          type="checkbox"
          checked={!!isTaskDone}
          onChange={onIsDoneChange}
          className="h-5 w-5 cursor-pointer accent-emerald-600"
        />

        <p
          className={`text-xl font-semibold text-stone-800 transition-colors ${
            isTaskDone ? "text-stone-500 line-through" : ""
          }`}
        >
          {title}
        </p>
      </div>

      <p
        className={`ms-7 line-clamp-2 text-base leading-relaxed text-stone-700 ${
          isTaskDone ? "text-stone-400 line-through" : ""
        }`}
      >
        {description}
      </p>

      <span className="absolute top-4 right-4 cursor-pointer text-stone-500 transition-all duration-300 hover:scale-110 hover:text-red-500">
        <FaTrashAlt
          className="text-xl"
          onClick={() => onDeleteTaskClick(taskId)}
        />
      </span>

      <div className="absolute right-5 bottom-3 text-xl text-stone-500 italic">
        {time}
      </div>
    </div>
  );
};

export default TaskItem;
