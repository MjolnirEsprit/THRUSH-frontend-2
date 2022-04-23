import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Line, Doughnut } from "react-chartjs-2";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "State",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: "checkbox",
};

export default function DataTable() {
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
