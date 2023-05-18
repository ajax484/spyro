import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="relative">
        <div className="h-screen fixed overflow-hidden w-[100vw] md:w-[50vw]">
          <img src="/login-bg.png" className="h-full" alt="" />
        </div>
      </div>
      {children}
    </div>
  );
}
