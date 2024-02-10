import { Table } from "antd";
import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "File Name",
    dataIndex: "Neme",
    className: "custom_table_header",
    width: 250,
  },
  {
    title: "Type",
    dataIndex: "Type",
    className: "custom_table_type",
    width: 80,
  },
  {
    title: "Date",
    dataIndex: "Date",
    width: 120,
  },
  {
    title: "File Size",
    dataIndex: "FSize",
    className: "custom_table_fSize",
    width: 100,
  },
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
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "2",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "3",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "4",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "5",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "6",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "7",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "8",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "9",
    Neme: (
      <div className="table_content_name">
        <p> Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
  {
    key: "10",
    Neme: (
      <div className="table_content_name">
        <p>Upload file name here</p>
        <span>
          <BiPencil />
        </span>
      </div>
    ),
    Type: "PDF",
    Date: "05/24/2023",
    FSize: "2.5MB",
  },
];


const DocumentsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      theme="dark"
        columns={columns}
        dataSource={data}
        pagination={false}
        className="custom-table mb-4"
        rowSelection={rowSelection}
        bordered={false}
        scroll={{
          x: 670,
          y: 250,
        }}
      />
  );
};

export default DocumentsTable;
