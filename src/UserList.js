import React, { useState, useEffect } from "react";
import axios from "axios";
//primereact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      setUsers(res.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="datatable-selection-demo">
      <div className="card">
        <h6>Users List</h6>
        <DataTable
          value={users}
          selectionMode="single"
          // selection={selectedProduct1}
          // onSelectionChange={(e) => setSelectedProduct1(e.value)}
          dataKey="id"
        >
          <Column field="id" header="Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="username" header="Username"></Column>
          <Column field="email" header="Email"></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default UserList;
