import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./Columns.ts";
import "../style/table.css";
import { BsCloudDownload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const pageSize = 10;

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      pageCount: Math.ceil(data.length / pageSize),
    },
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    pageOptions,
    gotoPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    <div className="table-container">
      <div className="table-heading">
        <div className="title">
          <div className="title-con">
            <h4>Users</h4>
            <span>{data.length} users</span>
          </div>
          <p>Manage your team members ans their account permission here.</p>
        </div>
        <div className="btn-container">
          <button className="download-btn">
            <span>
              <BsCloudDownload className="cloud" />
            </span>{" "}
            Download CSV
          </button>
          <button className="addUser-btn">
            <span>
              <AiOutlinePlus className="plus" />
            </span>{" "}
            Add user
          </button>
        </div>
      </div>
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")} &nbsp;
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <span>&#x2191;</span>
                        ) : (
                          <span>&#x2193;</span>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.id === "name") {
                    return (
                      <td {...cell.getCellProps()} className="img-name">
                        <div className="img-container">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s"
                            alt="User"
                          />
                        </div>
                        {cell.render("Cell")}
                      </td>
                    );
                  } else
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                })}

                <td className="icon-container">
                  <button className="delete">
                    <RiDeleteBin6Line />
                  </button>
                  <button className="edit">
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footer">
        <button
          className="prev-btn"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <span>&larr;</span> Previous
        </button>
        <div>
          {pageOptions.map((pageNum) => {
            return (
              <button
                key={pageNum}
                onClick={() => gotoPage(pageNum)}
                style={{
                  fontWeight: pageIndex === pageNum ? "bold" : "normal",
                }}
                className="page-btn"
              >
                {pageNum + 1}
              </button>
            );
          })}
        </div>
        <button
          className="next-btn"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default BasicTable;
