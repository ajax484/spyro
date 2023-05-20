import Table from "../../../Pagination/Table";
import DummyUsers from "../../../../data/DummyUsers";

export default function Subscription() {
  const arr=[
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
        <Table data={DummyUsers} rowsPerPage={6}>
              {arr}
            </Table>
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
