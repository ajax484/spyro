import React from 'react'

const Table = () => {
	const [page, setPage] = useState(1);
	const { slice, range } = useTable(data, page, rowsPerPage);
  return (
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
              {slice.map((user) => (
                <UserRow key={user.email} user={user} />
              ))}
            </tbody>
          </table>
  )
}

export default Table