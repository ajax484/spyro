import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalState } from "../utils/hooks";
import { useMutation } from "react-query";
import axios from "axios";

const AuthContext = createContext({
  user: {d: 'e'},
  login: async () => {},
  logout: async () => {},
  googleSignUp: async () => {},
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
          "http://20.127.29.255/v1/user/refresh",
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

  const googleSignUp = async (token) => {
    try {
      // console.log(token);
      const response = await axios
        .post("http://20.127.29.255/v1/user/google-signup", {
          token,
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

  const login = async (username, password) => {
    try {
      const response = await axios
        .post("http://20.127.29.255/v1/user/login", {
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
        .post("http://20.127.29.255/v1/user/signup", {
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

  const logout = async () => {
    try {
      const response = await axios
        .delete(
          "http://20.127.29.255/v1/user/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
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

      setUser(null);
      setAccessToken(null);
      setRefreshToken(null);

      return { data: null, msg: "logout successful", error: null };
    } catch (err) {
      return { data: null, error: err, msg: "error" };
    }
  };

  // useEffect(() => {
  //   refresh();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, googleSignUp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
