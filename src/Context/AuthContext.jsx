import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalState } from "../utils/hooks";
import { useMutation } from "react-query";
import axios from "axios";

const AuthContext = createContext({
  user: {},
  login: async () => {},
  register: async () => {},
});

export default function AuthContextWrapper({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useLocalState(null, "refresh_token");
  const [user, setUser] = useLocalState({}, "currentUser");

  const {
    mutate: refresh,
    isLoading,
    error,
  } = useMutation(async () => {
    try {
      console.log(refreshToken);
      const response = await axios
        .post(
          "https://f73a-105-113-17-25.ngrok-free.app/v1/user/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        )
        .catch((err) => {
          if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log(err.response.data.detail);
            throw err.response.data.detail;
          } else if (err.request) {
            // The client never received a response, and the request was never left
            console.log(err.request);
            throw "request not sent";
          } else {
            // Anything else
            throw "unknown error";
          }
        });

      console.log(response.data);

      // setUser(response?.data?.user);
      // setAccessToken(response?.data?.access_token);
      // setRefreshToken(response?.data?.refresh_token);
    } catch (error) {
      alert(error);
    }
  });

  const login = async (username, password) => {
    try {
      const response = await axios
        .post("https://f73a-105-113-17-25.ngrok-free.app/v1/user/login", {
          username,
          password,
        })
        .catch((err) => {
          if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log(err.response.data.detail);
            throw err.response.data.detail;
          } else if (err.request) {
            // The client never received a response, and the request was never left
            console.log(err.request);
            throw "request not sent";
          } else {
            // Anything else
            throw "unknown error";
          }
        });

      console.log(response.data);

      setUser(response?.data?.user);
      setAccessToken(response?.data?.access_token);
      setRefreshToken(response?.data?.refresh_token);

      return { data: null, msg: "login successful", error: null };
    } catch (err) {
      return { data: null, error: err, msg: "error" };
    }
  };

  const register = async (userDetails) => {
    try {
      const {
        username,
        firstname,
        lastname,
        password,
        confirmpassword,
        bio,
        location,
        country,
        avatarurl,
      } = userDetails;

      const response = await axios
        .post("https://ea9f-105-113-17-77.ngrok-free.app/v1/user/signup", {
          firstname,
          lastname,
          password,
          username,
          country,
          bio,
          location,
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log(err.response.data.detail);
            throw err.response.data.detail;
          } else if (err.request) {
            // The client never received a response, and the request was never left
            console.log(err.request);
            throw "request not sent";
          } else {
            // Anything else
            throw "unknown error";
          }
        });

      console.log(response.data);

      if (response.status !== 200) {
        throw "An Error has occured";
      }

      return { data: null, msg: "signup successful", error: null };
    } catch (err) {
      console.log(err);
      return { data: null, error: err, msg: "error" };
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
