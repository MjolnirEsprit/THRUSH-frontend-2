import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Line, Doughnut } from "react-chartjs-2";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { userService } from "../../services";

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
  const [listUsers, setlistUsers] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let isApiSubscribed = true;
    userService
      .getAll("http://localhost:2000/api/v1/users")
      .then((response) => {
        if (isApiSubscribed) {
          // handle success
          setlistUsers(response.data);
        }
      });

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);

  console.log(listUsers.data);

  return (
    <MUIDataTable
      title={"Employee List"}
      data={listUsers.data}
      columns={columns}
      options={options}
    />
  );
}
