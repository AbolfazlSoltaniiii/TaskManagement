export const getUserByEmail = async (email) => {
  const res = await fetch(`http://localhost:8000/users?email=${email}`);

  return await res.json();
};

export const getUserByInfo = async (username, password) => {
  const res = await fetch(`http://localhost:8000/users?username=${username}&password=${password}`);

  return await res.json();
}

export const createUser = async (data) => {
  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    body: JSON.stringify(data)
  });

  return await res.json();
};