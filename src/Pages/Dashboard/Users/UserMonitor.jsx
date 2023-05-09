import React from "react";

export default function UserMonitor() {
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {[
                  "User Email",
                  "User Group",
                  "IP Address",
                  "Connection",
                  "Last Activity",
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
