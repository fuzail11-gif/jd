import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const Table = ({ data, columns, onEdit }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Application Table</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            Total: {totalRows} records
          </span>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            {[5, 10, 20, 50].map((num) => (
              <option key={num} value={num}>
                {num} / page
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  {col}
                </th>
              ))}
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {columns.map((col, idx) => (
                  <td key={idx} className="px-4 py-3 text-sm text-gray-800">
                    {row[col.toLowerCase()]}
                  </td>
                ))}
                <td className="px-4 py-3 flex items-center gap-3">
                  <button className="p-1 rounded hover:bg-blue-100 text-blue-600">
                    <Edit size={18} onClick={() => onEdit && onEdit(row)} />
                  </button>
                  <button className="p-1 rounded hover:bg-red-100 text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
