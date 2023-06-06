import {useState} from "react";
import Table from "../../../Pagination/Table";
import ReferralPayoutData from "../../../../data/ReferralPayoutData";
import DummyUsers from "../../../../data/DummyUsers";
import useTable from "../../../Pagination/useTable";
import TableFooter from "../../../Pagination/TableFooter";

export default function ReferralPayout({data,rowsPerPage}) {
  const heading=[
    "Requested Date",
    "Request ID",
    "Email",
    "Total Amount(USD)",
    "User Payment Gateway",
    "Status",
    "Actions",
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
      <span className="font-bold text-gray-700">{user.requestedDate}</span>
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
    {user.requestID}
  </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <span className="font-weight-bold">{user.email}</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <span className="font-weight-bold">{user.amt}</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <span className="font-weight-bold">{user.paymentGateway}</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <span >
    {user.status}
  </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <span className="font-weight-bold">{user.action}</span>
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
        <h1 className="text-2xl font-bold">All Referral Payouts</h1>
      </div>
      <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px] space-y-4">
        <div className="border-b-[1px] border-gray-200 px-4 py-4">
          <h2 className="text-lg font-bold">
            Referral Commission Payout Requests{" "}
            <small className="text-gray-500">(All Time)</small>
          </h2>
        </div>
        <div className="overflow-x-auto px-2">
          <Table data={DummyUsers} rowsPerPage={6} heading={heading}>
            {slice.map(user=><UserRow user={user} key={user.email}/>)}
            </Table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div>
      </div>
    </>
  );
}
