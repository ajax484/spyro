import React from "react";
import { useNavigate } from "react-router-dom";

const dummyUsers = [
  {
    name: "Vivian Agbata",
    email: "vivianagbata1@gmail.com",
    role: "User",
    imagesLeft: 685,
    wordsLeft: 1000,
    country: "Ireland",
    status: "Active",
    dateCreatedAt: "28 Mar 2023",
    timeCreatedAt: "11:18 AM",
    avatar: "Avatar",
  },
  {
    name: "Jonathan Emmanuel",
    email: "jonathan@zenithchain.co",
    role: "Subscriber",
    imagesLeft: 50000,
    wordsLeft: 30,
    country: "Ireland",
    status: "Active",
    dateCreatedAt: "28 Mar 2023",
    timeCreatedAt: "20:36 PM",
    avatar: "Avatar",
  },
  {
    name: "Jonathan Emmanuel",
    email: "jonathan@payvix.com",
    role: "Subscriber",
    imagesLeft: 5000,
    wordsLeft: 1000,
    country: "Ireland",
    status: "Active",
    dateCreatedAt: "28 Mar 2023",
    timeCreatedAt: "01:56 AM",
    avatar: "Avatar",
  },
  {
    name: "Jonathan Emmanuel",
    email: "jezenith22@gmail.com",
    role: "User",
    imagesLeft: 1000,
    wordsLeft: 1000,
    country: "Ireland",
    status: "Pending",
    dateCreatedAt: "03 Apr 2023",
    timeCreatedAt: "15:23 PM",
    avatar: "Avatar",
  },
  {
    name: "Carue Main",
    email: "salbiz2021@gmail.com",
    role: "User",
    imagesLeft: 1000,
    wordsLeft: 1000,
    country: "Nigeria",
    status: "Active",
    dateCreatedAt: "01 May 2023",
    timeCreatedAt: "14:51 PM",
    avatar: "Avatar",
  },
  {
    name: "Admin",
    email: "admin@example.com",
    role: "Admin",
    imagesLeft: 100000,
    wordsLeft: 10000,
    country: "",
    status: "Active",
    dateCreatedAt: "27 Mar 2023",
    timeCreatedAt: "20:46 PM",
    avatar: "Avatar",
  },
];

function UserRow({ user }) {
  console.log(user);
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
            <span className="font-bold text-gray-700">{user.name}</span>
            <br />
            <span className="text-gray-500">{user.email}</span>
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
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="font-weight-bold">{user.wordsLeft}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="font-weight-bold">{user.imagesLeft}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="font-weight-bold">{user.country}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className={`cell-box user-${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="font-weight-bold">{user.dateCreatedAt}</span>
        <br />
        <span>{user.timeCreatedAt}</span>
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
  );
}

export default function UserList() {
  const navigate = useNavigate();

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
                  "User",
                  "Group",
                  "Words Left",
                  "Images Left",
                  "Country",
                  "Status",
                  "Created On",
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
              {dummyUsers.map((user) => (
                <UserRow key={user.email} user={user} />
              ))}
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
        {/* END DATATABLE */} {/* END BOX CONTENT */}
      </div>
    </>
  );
}
