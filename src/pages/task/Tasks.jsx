import Calendar from "../../components/calendar/Calendar.jsx";
import { useEffect, useState } from "react";
import TaskItem from "../../components/taskItem/TaskItem.jsx";
import { deleteTask, getTasks } from "../../services/apiTasks.js";
import { formatDate } from "../../utils/helpers.js";
import dayjs from "dayjs";
import EmptyTask from "./EmptyTask/EmptyTask.jsx";

const Tasks = () => {
  const [selected, setSelected] = useState({
    date: dayjs().date(),
    month: dayjs().month() + 1,
    year: dayjs().year(),
  });
  const [tasks, setTasks] = useState([]);

  const activeUser = sessionStorage.getItem("activeUser");
  const userId = JSON.parse(activeUser)[0]["id"];

  const onDeleteTaskClick = (taskId) => {
    deleteTask(taskId);

    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    const fullDate = formatDate(selected);

    const fetchTasks = async () => {
      let dailyTasks = await getTasks(fullDate, userId);

      dailyTasks = dailyTasks.sort((current, next) =>
        current.time.localeCompare(next.time),
      );

      setTasks(dailyTasks);
    };

    fetchTasks();
  }, [selected, userId]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className={"mt-20 w-full md:w-[65%]"}>
        <Calendar selected={selected} updateSelected={setSelected} />
      </div>

      {tasks.length ? (
        <div className="mt-4 mb-6 w-full flex-1 overflow-y-auto px-6 md:w-[60%]">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              taskId={task.id}
              title={task.title}
              description={task.description}
              isDone={task.isDone}
              time={task.time}
              onDeleteTaskClick={onDeleteTaskClick}
            />
          ))}
        </div>
      ) : (
        <EmptyTask />
      )}
    </div>
  );
};

export default Tasks;
