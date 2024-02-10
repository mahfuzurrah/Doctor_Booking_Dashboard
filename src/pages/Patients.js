import React from "react";
import PatientTable from "../components/table/PatientTable";

function Patients() {
  return (
    <div className="user_page">
      <div className="section_title section_title_row">
        <h2>Patients(2)</h2>
      </div>
      <div className="table_area mt-2">
        <PatientTable />
      </div>
    </div>
  );
}

export default Patients;
