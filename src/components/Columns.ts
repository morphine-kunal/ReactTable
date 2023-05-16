import { Column } from "react-table";

type UserData = {
  id: number;
  name: string;
  status: string;
  role: string;
  Last_login: string;
};

export const COLUMNS: Column<UserData>[] = [
    // {
    //   Header: "ID",
    //   accessor: "id",
    // },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Role",
      accessor: "role",
    },
    {
      Header: "Last Login",
      accessor: "Last_login",
    },
  ];
  