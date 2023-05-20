import React from "react";
import Table from "../../../Pagination/Table";
import ReferralPayoutData from "../../../../data/ReferralPayoutData";
import DummyUsers from "../../../../data/DummyUsers";

export default function ReferralPayout() {
  const arr=[
    "Requested Date",
    "Request ID",
    "Email",
    "Total Amount(USD)",
    "User Payment Gateway",
    "Status",
    "Actions",
  ]
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
          <Table data={DummyUsers} rowsPerPage={6}>
              {arr}
            </Table>
        </div>
      </div>
    </>
  );
}
