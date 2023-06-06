import { useState } from "react";
import Table from "../../../Pagination/Table";
import DummyUsers from "../../../../data/DummyUsers";
import useTable from "../../../Pagination/useTable";
import TableFooter from "../../../Pagination/TableFooter";
import SubscriptionData from "../../../../data/SubscriptionData";

export default function Subscription({data,rowsPerPage}) {
  const heading=[
    "Plan Name",
    "Status",
    "Words",
    "Images",
    "Characters",
    "Minutes",
    "Frequency",
    "AI Image",
    "Featured",
  ]
  const [page,setPage] = useState(1);
  const { slice,range } = useTable(data, page, rowsPerPage);

  function UserRow({user}){
    return (
     <tr className="odd">
     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <div className="flex">
     <div className="mr-4 h-6 w-6">
       <img
         alt="Avatar"
         className="rounded-circle"
         src="https://test.spyro.ai/img/users/avatar.png"
       />
     </div>
     <div className="widget-user-name">
       <span className="font-bold text-gray-700">{user.plan}</span>
     </div>
   </div>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm flex justify-center">
   <span
     className={`px-2 py-1 rounded-xl w-full text-center font-bold ${
       user.role === "Subscriber"
         ? "bg-green-200/50 text-green-500"
         : user.role === "Admin"
         ? "bg-blue-200/50 text-blue-500"
         : "bg-stone-200/50 text-gray-500"
     }`}
   >
     {user.status}
   </span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span className="font-weight-bold">{user.words}</span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span className="font-weight-bold">{user.images}</span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span className="font-weight-bold">{user.characters}</span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span >
     {user.minutes}
   </span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span className="font-weight-bold">{user.frequency}</span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span className="font-weight-bold">{user.ai_image}</span>
 </td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
   <span className="font-weight-bold">{user.featured}</span>
 </td>
 <td
   style={{
     display: "none",
   }}
 >
   <div>
     <a href="https://test.spyro.ai/admin/users/3/show">
       <i
         className="fa-solid fa-clipboard-user table-action-buttons view-action-button"
         title="View User"
       />
     </a>
     <a href="https://test.spyro.ai/admin/users/3/edit">
       <i
         className="fa-solid fa-user-pen table-action-buttons edit-action-button"
         title="Edit User Group"
       />
     </a>
     <a className="deleteUserButton" id={3} href="#">
       <i
         className="fa-solid fa-user-slash table-action-buttons delete-action-button"
         title="Delete User"
       />
     </a>
   </div>
 </td>
 </tr> 
    )
  }
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Subscription Plans</h1>
        <button
          type="submit"
          className="bg-primary rounded-lg py-2 px-3 text-white font-semibold border border-primary hover:bg-white hover:text-primary transition-colors duration-150"
          //   onClick={() => navigate("/admin/users/create")}
        >
          Create New Subscription Plan
        </button>
      </div>
      <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px] space-y-4">
        <div className="border-b-[1px] border-gray-200 px-4 py-4">
          <h2 className="text-lg font-bold">User Management</h2>
        </div>
        <div className="overflow-x-auto px-2">
        <Table data={SubscriptionData} rowsPerPage={6} heading={heading}>
            {slice.map(user=><UserRow user={user} key={user.words}/>)}
            </Table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div>
      </div>
    </>
  );
}
