import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import Button from "../../components/button/Button.jsx";
import { Link, useNavigate } from "react-router";
import Input from "../../components/form/input/Input.jsx";
import Label from "../../components/form/label/Label.jsx";
import { useForm } from "react-hook-form";
import Error from "../../components/form/error/Error.jsx";
import { getUserByInfo } from "../../services/apiUsers.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  if (sessionStorage.getItem("activeUser")) {
    navigate("/tasks");
  }

  const loginUser = async ({ username, password }) => {
    const user = await getUserByInfo(username, password);

    if (!user.length) {
      setError("Username or Password incorrect");
      return;
    }

    sessionStorage.setItem("activeUser", JSON.stringify(user));

    navigate("/tasks");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className={`rounded-2xl border border-stone-300 bg-gradient-to-br from-stone-200 to-stone-300 px-10 py-8 md:w-[400px] dark:border-stone-600 dark:from-neutral-800 dark:to-neutral-900`}
        onSubmit={handleSubmit(loginUser)}
      >
        <h2 className="pb-8 text-center text-3xl font-bold tracking-wide text-stone-800 select-none dark:text-stone-200">
          Welcome Back 👋
        </h2>

        {error && (
          <div className={"mb-3 text-center"}>
            <Error type={"medium"}>{error}</Error>
          </div>
        )}

        <div className="relative mb-6">
          <FaUser className="absolute top-3.5 left-3 text-stone-500" />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            required
            register={register}
          />
        </div>

        <div className="relative mb-4">
          <FaLock className="absolute top-3.5 left-3 text-stone-500" />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            extraClassName={"pr-10"}
            required
            register={register}
          />

          {showPassword ? (
            <FaEyeSlash
              className="absolute top-3.5 right-3 cursor-pointer text-stone-500 hover:text-stone-700"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEye
              className="absolute top-3.5 right-3 cursor-pointer text-stone-500 hover:text-stone-700"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <div className="mb-6 flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="mr-2 accent-stone-600 focus:outline-stone-500"
          />
          <Label htmlFor={"remember"}> Remember me </Label>
        </div>

        <div className="flex justify-center">
          <Button type={"large"}>Login</Button>
        </div>

        <p className="pt-6 text-center text-sm text-stone-600 dark:text-stone-300">
          Don’t have an account?
          <Link
            to={"/register"}
            className={
              "ms-1 font-semibold text-stone-800 hover:border-b hover:font-bold focus:outline-none"
            }
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
