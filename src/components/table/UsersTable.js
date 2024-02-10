import { Table } from "antd";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "User Name",
    dataIndex: "Neme",
    width: 100,
  },
  {
    title: "Email",
    dataIndex: "Email",
    width: 100,
  },
  // {
  //   title: "SSo",
  //   dataIndex: "SSo",
  //   width: 100,
  // },
  // {
  //   title: "Created",
  //   dataIndex: "Created",
  //   width: 100,
  // },
  // {
  //   title: "Last Login",
  //   dataIndex: "LLogin",
  //   width: 100,
  // },
  // {
  //   title: "Total Loging",
  //   dataIndex: "TLogin",
  //   width: 100,
  // },
  // {
  //   title: "Permissions",
  //   dataIndex: "Permissions",
  //   width: 100,
  // },
  {
    title: "Action",
    className: "custom_table_action",
    width: 80,
    render: () => (
      <Link to="">
        <BsTrash />
      </Link>
    ),
  },
];

const data = [
  {
    key: "1",
    Neme: "Jonathan Mandell",
    Email: "Jonathan@teepeesafe.com",
    SSo: "On",
    TFA: "On",
    Created: "6/15/2021",
    LLogin: "6 mins ago",
    TLogin: "26",
    Permissions: "Account owner",
  },
  {
    key: "2",
    Neme: "Jonathan Mandell",
    Email: "Jonathan@teepeesafe.com",
    SSo: "On",
    TFA: "On",
    Created: "6/15/2021",
    LLogin: "6 mins ago",
    TLogin: "26",
    Permissions: "Account owner",
  },
];

const AppointmentTable = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const hasSelected = selectedRowKeys.length > 0;

  // const onSelectChange = (selectedRowKeys) => {
  //   setSelectedRowKeys(selectedRowKeys);
  // };

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };

  return (
    <div className="mt-0">
      {/* <div>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div> */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="custom-table"
        // rowSelection={rowSelection}
        bordered={false}
        scroll={{
          x: 1000,
        }}
      />
    </div>
  );
};

export default AppointmentTable;
