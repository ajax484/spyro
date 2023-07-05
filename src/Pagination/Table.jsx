

const Table = ({children,heading}) => {

  return (
	<div className="">
    <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr role="row">
                {heading.map((text) => (
                  <th
                    key={text}
                    className="px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wider"
                  >
                    {text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {children}
            </tbody>
          </table>
  </div>
  )
}

export default Table