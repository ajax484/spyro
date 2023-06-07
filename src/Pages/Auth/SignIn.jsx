import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAuth } from "../../Context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, login, googleSignUp } = useAuth();

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const { mutate, isLoading, error } = useMutation(async ({ type, token }) => {
    try {
      console.log(googleSignUp);

      const loginTypeFn = () =>
        type === "google" ? googleSignUp(token) : login(username, password);
      const { data, error, msg } = await loginTypeFn();

      if (error) throw new Error(error);
      console.log(msg);

      navigate("/admin/users/dashboard");
      alert(msg);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  });

  return (
    <form className="pt-8 pb-4 md:pt-28 md:pb-8 px-4 space-y-8 absolute md:static bg-white h-fit top-1/2 -translate-y-1/2 md:translate-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 w-[90vw] md:w-[unset] rounded-xl md:rounded-none">
      <h3 className="text-center font-bold mb-8 text-3xl">
        Sign In to{" "}
        <span className="text-primary">
          <a href="#">Brainwave</a>
        </span>
      </h3>
      <div className="pt-10 space-y-6 px-12">
        <div className="space-y-2">
          <label htmlFor="username" className="text-sm font-bold text-right">
            Username
          </label>
          <br />
          <input
            id="username"
            type="text"
            className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
            name="username"
            autoComplete="off"
            autoFocus
            placeholder="username"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password-input"
            className="text-sm font-bold text-right"
          >
            Password
          </label>
          <input
            id="password-input"
            type="password"
            className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
            name="password"
            required
            autoComplete="off"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <button
          disabled={isLoading}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            mutate({ type: "normal", token: null });
          }}
          className="bg-primary rounded-lg py-2 px-3 text-white font-semibold border border-primary hover:bg-white hover:text-primary transition-colors duration-150"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res.credential);
            mutate({ type: "google", token: res.credential });
          }}
          onError={(err) => alert(err)}
        />
        <p className="text-sm text-gray-500">
          or{" "}
          <Link
            className="text-primary hover:font-semibold hover:underline"
            to={"/auth/signup"}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
