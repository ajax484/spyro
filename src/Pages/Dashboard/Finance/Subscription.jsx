import React from "react";

export default function Subscription() {
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {[
                  "Plan Name",
                  "Status",
                  "Words",
                  "Images",
                  "Characters",
                  "Minutes",
                  "Frequency",
                  "AI Image",
                  "Featured",
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
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-col justify-center text-gray-700">
                  <span className="text-gray-800 font-bold text-lg">
                    Visionary Plan
                  </span>
                  <span>30.00 USD</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span
                    className={`px-4 py-2 rounded-xl w-full text-center font-bold ${
                      "Subscriber" === "Subscriber"
                        ? "bg-green-200/50 text-green-500"
                        : user.role === "Admin"
                        ? "bg-blue-200/50 text-blue-500"
                        : "bg-stone-200/50 text-gray-500"
                    }`}
                  >
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                  250,000
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                  100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                  0
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span
                    className={`px-4 py-2 rounded-xl w-full text-center font-bold ${
                      "Subscriber" === "Subscriber"
                        ? "bg-green-200/50 text-green-500"
                        : user.role === "Admin"
                        ? "bg-blue-200/50 text-blue-500"
                        : "bg-stone-200/50 text-gray-500"
                    }`}
                  >
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-xs text-gray-600">
              Showing 1 to 6 of 6 entries
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div
              className="dataTables_paginate paging_full_numbers"
              id="listUsersTable_paginate"
            >
              <ul className="pagination">
                <li
                  className="paginate_button page-item first disabled"
                  id="listUsersTable_first"
                >
                  <a
                    href="#"
                    aria-controls="listUsersTable"
                    data-dt-idx={0}
                    tabIndex={0}
                    className="page-link"
                  >
                    <i className="fa fa-angle-double-left" />
                  </a>
                </li>
                <li
                  className="paginate_button page-item previous disabled"
                  id="listUsersTable_previous"
                >
                  <a
                    href="#"
                    aria-controls="listUsersTable"
                    data-dt-idx={1}
                    tabIndex={0}
                    className="page-link"
                  >
                    <i className="fa fa-angle-left" />
                  </a>
                </li>
                <li className="paginate_button page-item active">
                  <a
                    href="#"
                    aria-controls="listUsersTable"
                    data-dt-idx={2}
                    tabIndex={0}
                    className="page-link"
                  >
                    1
                  </a>
                </li>
                <li
                  className="paginate_button page-item next disabled"
                  id="listUsersTable_next"
                >
                  <a
                    href="#"
                    aria-controls="listUsersTable"
                    data-dt-idx={3}
                    tabIndex={0}
                    className="page-link"
                  >
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li
                  className="paginate_button page-item last disabled"
                  id="listUsersTable_last"
                >
                  <a
                    href="#"
                    aria-controls="listUsersTable"
                    data-dt-idx={4}
                    tabIndex={0}
                    className="page-link"
                  >
                    <i className="fa fa-angle-double-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
