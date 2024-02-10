import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Patient Name",
    dataIndex: "Name",
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
    title: "Status",
    dataIndex: "Status", // Updated from "status"
    render: (status) => {
      let color;
      let className = "";

      switch (status) {
        case "Pending":
          color = "black";
          className = "pending";
          break;
        case "Approved":
          color = "black";
          className = "approved";
          break;
        case "Canceled":
          color = "black";
          className = "canceled";
          break;
        default:
          color = "black";
          break;
      }

      return (
        <div className="status_area">
          <span className={`status ${className}`} style={{ color }}>
            {status}
          </span>
        </div>
      );
    },
  },
];

const data = [
  {
    key: "1",
    Name: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
    Status: "Approved",
  },
  {
    key: "1",
    Name: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
    Status: "Pending",
  },
  {
    key: "1",
    Name: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
    Status: "Approved",
  },
  {
    key: "1",
    Name: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
    Status: "Approved",
  },
  {
    key: "1",
    Name: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
    Status: "Pending",
  },
  {
    key: "1",
    Name: "Jonathan Mandell",
    Number: "0123456789",
    Time: "Feb-10-2024",
    Status: "Approved",
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
        scroll={{
          x: 768,
        }}
      />
    </div>
  );
};

export default AppointmentTable;
