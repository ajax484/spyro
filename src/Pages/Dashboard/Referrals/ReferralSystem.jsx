import React from "react";

const referralsInfo = [
  {
    label: "Total Referred Users",
    value: 0,
  },
  {
    label: "Total Referral Income",
    value: 0,
  },
  {
    label: "Total Referral Commission",
    value: 0,
  },
];

export default function ReferralSystem() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Referral System</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {referralsInfo.map((info) => (
          <ReferralInfoCard key={info.label} info={info} />
        ))}
      </div>
      <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px] space-y-4">
        <div className="border-b-[1px] border-gray-200 px-4 py-4">
          <h2 className="text-lg font-bold">
            Payment Referrals{" "}
            <small className="text-gray-500">(All Time)</small>
          </h2>
        </div>
        <div className="overflow-x-auto px-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {[
                  "Purchase Date",
                  "Order ID",
                  "Referrer",
                  "Payment(USD)",
                  "Commission(USD)",
                  "Paid By",
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
      <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px] space-y-4">
        <div className="border-b-[1px] border-gray-200 px-4 py-4">
          <h2 className="text-lg font-bold">
            Top Referrers <small className="text-gray-500">(All Time)</small>
          </h2>
        </div>
        <div className="overflow-x-auto px-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {[
                  "Referrer Name",
                  "Referrer Email",
                  "Referral ID",
                  "Group",
                  "# of Users",
                  "Total Commissions(USD)",
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
    </div>
  );
}

function ReferralInfoCard({ info }) {
  return (
    <div className="bg-white shadow-md rounded-xl border-gray-100 py-4 px-6 overflow-hidden border-[1px]">
      <div className="flex flex-col gap-y-2">
        <h2 className="mb-0">
          <span className="font-bold">
            {info.label} <small className="text-gray-500">(All Time)</small>
          </span>
        </h2>
        <p className="text-4xl font-bold">{info.value}</p>
      </div>
    </div>
  );
}
