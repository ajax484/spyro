import {useState} from "react";
import { useNavigate } from "react-router-dom";
import useTable from "../../../Pagination/useTable";
import TableFooter from "../../../Pagination/TableFooter";
import Table from "../../../Pagination/Table";
import DummyUsers from "../../../../data/DummyUsers";


export default function UserList() {
  // const navigate = useNavigate();
  //commented it because it was preventing the page from rendering 
  //Uncaught Error: useNavigate() may be used only in the context of a <Router> component.
  const arr=[
    "User",
    "Group",
    "Words Left",
    "Images Left",
    "Country",
    "Status",
    "Created On",
  ]

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Registered Users</h1>
        <button
          type="submit"
          className="bg-primary rounded-lg py-2 px-3 text-white font-semibold border border-primary hover:bg-white hover:text-primary transition-colors duration-150"
          onClick={() => navigate("/admin/users/create")}
        >
          Create New User
        </button>
      </div>
      <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px] space-y-4">
        <div className="border-b-[1px] border-gray-200 px-4 py-4">
          <h2 className="text-lg font-bold">User Management</h2>
        </div>
        <div className="overflow-x-auto px-2">
          <Table data={DummyUsers} rowsPerPage={6}>
            {arr}
          </Table>
          {/* <Table data={DummyUsers} rowsPerPage={6} arr={arr} /> */}
        </div>
        
        {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
        {/* END DATATABLE */} {/* END BOX CONTENT */}
      </div>
    </>
  );
}
