import React from "react";

export default function TopMenuBar({ toggleSidebar }) {
  return (
    <header className="fixed bg-white w-full z-[1000] p-5 border-b-[1px] border-b-gray-100 shadow-[10px_5px_10px_0px_rgba(182,182,182,0.75)] flex justify-between">
      HEADER
      <button onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 block md:hidden">
          {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </header>
  );
}
