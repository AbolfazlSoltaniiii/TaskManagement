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

  const {handleSubmit, register} = useForm();

  if (sessionStorage.getItem("activeUser")) {
    navigate("/tasks");
  }

  const loginUser = async ({username, password}) => {
    const user = await getUserByInfo(username, password);

    if (!user.length) {
      setError("Username or Password incorrect");
      return;
    }

    sessionStorage.setItem("activeUser", JSON.stringify(user));

    navigate("/tasks");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-gradient-to-br from-stone-100 to-stone-300 backdrop-blur-md shadow-xl rounded-2xl px-10 py-8 w-[400px] border border-stone-300"
        onSubmit={handleSubmit(loginUser)}
      >
        <h2 className="text-3xl font-bold text-center text-stone-800 pb-4 tracking-wide select-none">
          Welcome Back 👋
        </h2>

        {
          error && (
            <div className={"text-center mb-3"}>
              <Error type={"medium"}>{error}</Error>
            </div>
          )
        }

        <div className="relative mb-6">
          <FaUser className="absolute left-3 top-3.5 text-stone-500" />
          <Input type="text" name="username" placeholder="Username" required register={register} />
        </div>

        <div className="relative mb-4">
          <FaLock className="absolute left-3 top-3.5 text-stone-500" />
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
              className="absolute right-3 top-3.5 text-stone-500 cursor-pointer hover:text-stone-700"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEye
              className="absolute right-3 top-3.5 text-stone-500 cursor-pointer hover:text-stone-700"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <div className="flex items-center mb-6">
          <input id="remember" type="checkbox" className="mr-2 accent-stone-600 focus:outline-stone-500" />
          <Label htmlFor={"remember"}> Remember me </Label>
        </div>

        <div className="flex justify-center">
          <Button type={"large"}>Login</Button>
        </div>

        <p className="text-center text-sm text-stone-600 pt-6">
          Don’t have an account?
          <Link
            to={"/register"}
            className={"ms-1 text-stone-800 font-semibold hover:border-b hover:font-bold focus:outline-stone-500"}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
