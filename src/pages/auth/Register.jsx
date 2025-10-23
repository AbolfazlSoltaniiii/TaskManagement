import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Input from "../../components/form/input/Input.jsx";
import { useState } from "react";
import Button from "../../components/button/Button.jsx";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { createUser, getUserByEmail } from "../../services/apiUsers.js";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  if (sessionStorage.getItem("activeUser")) {
    navigate("/tasks");
  }

  const registerUser = async (data) => {
    setErrors({});

    const { email, username, password, confirmPassword } = data;

    if (
      !validatePasswords(password, confirmPassword) ||
      !(await validateEmail(email))
    ) {
      return;
    }

    const user = await createUser({
      email,
      username,
      password,
    });

    sessionStorage.setItem("activeUser", JSON.stringify(user));

    navigate("/tasks");
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password.length < 6) {
      setErrors({
        password: "Password must be at least 6 characters long",
      });

      return false;
    }

    if (password !== confirmPassword) {
      setErrors({
        password: "Passwords do not match",
      });

      return false;
    }

    return true;
  };

  const validateEmail = async (email) => {
    const user = await getUserByEmail(email);

    if (user && user.length) {
      setErrors({
        email: "Email is already in use",
      });

      return false;
    }

    return true;
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        className={`rounded-2xl border border-stone-300 bg-gradient-to-br from-stone-200 to-stone-300 px-10 py-8 md:w-[400px] dark:border-stone-600 dark:from-neutral-800 dark:to-neutral-900`}
        onSubmit={handleSubmit(registerUser)}
      >
        <h2 className="pb-8 text-center text-3xl font-bold tracking-wide text-stone-800 select-none dark:text-stone-200">
          Who are you?🧐🧐
        </h2>

        <div className="relative mb-6">
          <MdOutlineEmail className="absolute top-3.5 left-3 text-stone-500" />

          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            required
            register={register}
            errorMsg={errors["email"]}
          />
        </div>

        <div className="relative mb-6">
          <FaUser className="absolute top-3.5 left-3 text-stone-500" />

          <Input
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            required
            register={register}
            errorMsg={errors["username"]}
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
            errorMsg={errors["password"]}
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

        <div className="relative mb-4">
          <FaLock className="absolute top-3.5 left-3 text-stone-500" />

          <Input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            extraClassName={"pr-10"}
            required
            register={register}
            errorMsg={errors["confirmPassword"]}
          />

          {showConfirmPassword ? (
            <FaEyeSlash
              className="absolute top-3.5 right-3 cursor-pointer text-stone-500 hover:text-stone-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <FaEye
              className="absolute top-3.5 right-3 cursor-pointer text-stone-500 hover:text-stone-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>

        <div className="flex justify-center pt-3">
          <Button type={"large"}>Register</Button>
        </div>

        <p className="pt-6 text-center text-sm text-stone-600 dark:text-stone-300">
          Already have an account?
          <Link
            to={"/login"}
            className={
              "ms-1 font-semibold text-stone-800 hover:border-b hover:font-bold focus:outline-none"
            }
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
