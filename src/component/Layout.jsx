import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TopMenuBar from "./TopMenuBar";
import PageHeader from "./PageHeader";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(true);

  const toggleSidebarHandler = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div className="bg-light overflow-hidden relative">
      <aside
        className={`z-[10000] fixed py-8 ${
          isOpen && "-left-1/4 -translate-x-1/2"
        } md:left-0 md:translate-x-0 w-1/2 md:w-1/5 border-r-[1px] bg-white border-gray-100 space-y-4 h-screen transition-transform duration-750 ease-in-out`}
      >
        <Sidebar />
      </aside>
      <main className="md:ml-[20%] relative">
        <TopMenuBar toggleSidebar={toggleSidebarHandler} />
        {/* <PageHeader /> */}
        <div className="pt-20 md:pt-28 px-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
