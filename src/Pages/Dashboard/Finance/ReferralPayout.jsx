import React from "react";

export default function ReferralPayout() {
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {[
                  "Requested Date",
                  "Request ID",
                  "Email",
                  "Total Amount(USD)",
                  "User Payment Gateway",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
