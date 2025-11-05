export const getTasks = async (date, userId) => {
  const res = await fetch(
    `http://localhost:8000/tasks?date=${date}&userId=${userId}`,
  );

  return await res.json();
};

export const updateTaskIsDone = async (taskId, isDone) => {
  const res = await fetch(`http://localhost:8000/tasks/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify({ isDone }),
  });

  return await res.json();
};

export const deleteTask = async (taskId) => {
  const res = await fetch(`http://localhost:8000/tasks/${taskId}`, {
    method: "DELETE",
  })

  return await res.json();
}
