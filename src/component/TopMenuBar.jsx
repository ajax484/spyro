import React from "react";
import { useMutation } from "react-query";
import { useAuth } from "../Context/AuthContext";

export default function TopMenuBar({ toggleSidebar }) {
  const { logout } = useAuth();

  const { mutate, isLoading, error } = useMutation(async () => {
    try {
      const response = await logout();

      // if (error) throw new Error(error);
      console.log(response, logout);

      // alert(msg);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  });

  return (
    <header className="fixed bg-white w-full md:w-[calc(100vw-21%)] z-[1000] p-5 border-b-[1px] border-b-gray-100 shadow-[8px_2px_10px_0px_rgba(182,182,182,0.1)] flex justify-between">
      <img src="/public/logo.svg" />
      <button
        className="bg-primary rounded-lg py-2 px-3 text-white font-semibold border border-primary hover:bg-white hover:text-primary transition-colors duration-150"
        onClick={mutate}
      >
        {!isLoading ? "Logout" : "Loading..."}
      </button>
      <button onClick={toggleSidebar} className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-6 h-6"
        >
          {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </header>
  );
}
