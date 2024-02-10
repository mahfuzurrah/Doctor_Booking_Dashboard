import React from "react";
import AppointmentTable from "../components/table/AppointmentTable";

function Patients() {
  return (
    <div className="user_page">
      <div className="section_title section_title_row">
        <h2>Patients(2)</h2>
      </div>
      <div className="table_area mt-2">
        <AppointmentTable />
      </div>
    </div>
  );
}

export default Patients;
