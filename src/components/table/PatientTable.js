import { Table } from "antd";
import React from "react";
import PFileUpload from "../modal/PFileUpload"

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
    title: "Upload File",
    dataIndex: "File",
  },
  {
    title: "Action",
    className: "custom_table_action",
    render: () => (
      <PFileUpload />
    ),
  },
];

const data = [
  {
    key: "1",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    File: "Feb-10-2024",
  },
  {
    key: "2",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    File: "Feb-10-2024",
  },
  {
    key: "3",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    File: "Feb-10-2024",
  },
  {
    key: "4",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    File: "Feb-10-2024",
  },
  {
    key: "5",
    Neme: "Jonathan Mandell",
    Number: "0123456789",
    File: "Feb-10-2024",
  },
];

const PatientTable = () => {
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

export default PatientTable;
