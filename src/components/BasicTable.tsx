import React, { MouseEventHandler, useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
// import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./Columns.ts";
import "../style/table.css";
import { BsCloudDownload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () =>
  axios.get("https://users-edbd4-default-rtdb.firebaseio.com/users.json");

const BasicTable: React.FC<{
  onEdit: MouseEventHandler<HTMLButtonElement> | undefined;
  onVisible: MouseEventHandler<HTMLButtonElement> | undefined;
  onShow: () => void;
}> = (props) => {
  type Column = {
    Header: string;
    accessor: string;
  };

  const [tableData, setTableData] = useState([]);

  const { data: apiResponse, isLoading, isError, error } = useQuery("name", fetchData);

  useEffect(() => {
    if (apiResponse?.data) {
      console.log(apiResponse.data);
      const dataArray = Object.values(apiResponse.data)
      setTableData(dataArray);
    }
  }, [apiResponse]);

  const columns: Column[] = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);
  const pageSize = 10;

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {},
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
  }: any = tableInstance;

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if(isError){
    return <p>{error.message}</p>
  }

  return (
    <div className="table-container">
      <div className="table-heading">
        <div className="title">
          <div className="title-con">
            <h4>Users</h4>
            <span>{data.length} users</span>
          </div>
          <p>Manage your team members and their account permission here.</p>
        </div>
        <div className="btn-container">
          <button className="download-btn">
            <span>
              <BsCloudDownload className="cloud" />
            </span>{" "}
            Download CSV
          </button>
          <button className="addUser-btn" onClick={props.onShow}>
            <span>
              <AiOutlinePlus className="plus" />
            </span>{" "}
            Add user
          </button>
        </div>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
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
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
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
                            src={cell.row.original.dp ? `${cell.row.original.dp}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yZLjRO-cckbWa-SF-9ikN42WHpRkF_-j0BS-zEm6&s'}
                            alt="User"
                          />
                        </div>
                        {cell.render("Cell")}
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
                <td className="icon-container">
                  <button className="delete" onClick={props.onVisible}>
                    <RiDeleteBin6Line />
                  </button>
                  <button className="edit" onClick={props.onEdit}>
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
          {pageOptions.map((pageNum) => (
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
          ))}
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
