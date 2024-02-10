import { Table } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Patient Name",
    dataIndex: "Neme",
  },
  {
    title: "Number",
    dataIndex: "Number",
  },
  {
    title: "Time",
    dataIndex: "Time",
  },
  {
    title: "status",
    className: "custom_table_action",
    render: () => (
      <Link to="">
        <BsThreeDotsVertical />
      </Link>
    ),
  },
];

const data = [
  {
    key: "1",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
  },
  {
    key: "2",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
  },
  {
    key: "3",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
  },
  {
    key: "4",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
  },
  {
    key: "5",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
  },
];

const AppointmentTable = () => {
  return (
    <div className="mt-0">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="custom-table"
        bordered={false}
      />
    </div>
  );
};

export default AppointmentTable;
