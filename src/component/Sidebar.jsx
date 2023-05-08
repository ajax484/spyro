import React, { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    label: "Users",
    mainpath: "/admin/users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="h-7 w-7"
        color="currentColor"
      >
        {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
      </svg>
    ),
    children: [
      {
        path: "dashboard",
        label: "Dashboard",
      },
      {
        path: "list",
        label: "List",
      },
    ],
  },
];

function Accordion({ route }) {
  const [isOpen, setOpen] = useState();
  const contentRef = useRef();
  const location = useLocation().pathname.split("/");
  const currRoute = location[location.length - 1];
  const mainRoute =
    "/" + location[location.length - 3] + "/" + location[location.length - 2];

  console.log(mainRoute, route.mainpath, mainRoute === route.mainpath);

  return (
    <li className="">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-4 px-5 font-medium text-left focus:border-l-primary focus:border-l-4 focus:bg-primary/10 rounded-sm ${route.mainpath === mainRoute ? "bg-primary/10" : ""}`}
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <div className="flex gap-4 items-center">
            {route.icon}
            <span className="text-gray-700 font-[500]">{route.label}</span>
          </div>
          <svg
            className={`w-5 h-5 ${
              isOpen ? "rotate-180 text-gray-700" : "rotate-0 text-primary"
            } shrink-0 transition-all duration-300`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>

      <div
        className={`${
          isOpen
            ? "h-0"
            : `h-[${contentRef?.current?.offsetHeight + "px"}] mt-0.5`
        } transition-all duration-750 overflow-hidden`}
      >
        <ul ref={contentRef}>
          {route.children.map((subRoute) => (
            <li className={`py-1 ${currRoute === subRoute.path ? "" : ""}`}>
              <NavLink
                to={`/admin/users/${subRoute.path}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-primary" : "text-gray-600"
                  } text-sm pl-6 flex justify-start gap-6`
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                </svg>
                {subRoute.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Sidebar() {
  return (
    <>
      <h1 className="text-gray-600 font-semibold text-sm px-2">ADMIN PANEL</h1>
      <ul>
        {routes.map((route) => (
          <Accordion route={route} />
        ))}
      </ul>
    </>
  );
}
