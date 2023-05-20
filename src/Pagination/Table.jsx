import {useState} from 'react'
import useTable from './useTable';
import TableFooter from './TableFooter';

function UserRow({ user,children }) {

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

const Table = ({data,rowsPerPage,children}) => {
	const [page,setPage] = useState(1);
	const { slice,range } = useTable(data, page, rowsPerPage);
  return (
	<div className="">
    <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {children.map((heading) => (
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
              {slice.map((user) => (
                <UserRow key={user.email} user={user} children={children} />
              ))}
            </tbody>
          </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
  </div>
  )
}

export default Table