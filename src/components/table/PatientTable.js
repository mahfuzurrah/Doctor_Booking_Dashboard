import { Table, Space, Input } from "antd";
import React, { useState } from "react";
import PFileUpload from "../modal/PFileUpload";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";

const EditableCell = ({ dataIndex, record, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(record[dataIndex]);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const save = () => {
    toggleEdit();
    onSave(record.key, dataIndex, inputValue);
  };

  return (
    <Space size="middle">
      {editing ? (
        <>
          <Input
            value={inputValue}
            onChange={handleChange}
            onPressEnter={save}
          />
          <CheckOutlined onClick={save} />
        </>
      ) : (
        <>
          {record[dataIndex]}
          <EditOutlined onClick={toggleEdit} />
        </>
      )}
    </Space>
  );
};

const handleEdit = (key, dataIndex, value) => {
  console.log(`Editing key ${key}, dataIndex ${dataIndex} with value ${value}`);
};

const columns = [
  {
    title: "Patient Name",
    dataIndex: "Neme",
  },
  {
    title: "Number",
    dataIndex: "Number",
    render: (text, record) => (
      <EditableCell dataIndex="Number" record={record} onSave={handleEdit} />
    ),
  },
  {
    title: "Upload File",
    dataIndex: "File",
  },
  {
    title: "Action",
    className: "custom_table_action",
    render: () => <PFileUpload />,
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
        scroll={{
          x: 768,
        }}
      />
    </div>
  );
};

export default PatientTable;
