import Calendar from "../../components/calendar/Calendar.jsx";
import { useEffect, useState } from "react";
import TaskItem from "../../components/taskItem/TaskItem.jsx";
import { getTasks } from "../../services/apiTasks.js";
import { formatDate } from "../../utils/helpers.js";

const Tasks = () => {
  const [selected, setSelected] = useState({});
  const [tasks, setTasks] = useState([]);

  const activeUser = sessionStorage.getItem("activeUser");
  const userId = JSON.parse(activeUser)[0]["id"];

  useEffect(() => {
    const fullDate = formatDate(selected);

    const fetchTasks = async () => {
      setTasks(await getTasks(fullDate, userId));
    };

    fetchTasks();
  }, [selected, userId]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className={"mt-20 w-[65%]"}>
        <Calendar selected={selected} updateSelected={setSelected} />
      </div>

      <div className="mt-4 mb-6 w-full flex-1 overflow-y-auto px-6 md:w-[60%]">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            taskId={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
