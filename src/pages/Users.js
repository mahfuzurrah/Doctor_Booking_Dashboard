import React from "react";
import { BiUserPlus } from "react-icons/bi";
import UsersTable from "../components/table/UsersTable";

function Users() {
  return (
    <div className="user_page">
      <div className="section_title section_title_row">
        <h2>Users(3)</h2>
        <div className="btn_area">
          {/* <span className="ex_title"><BiDownload className="icons"/></span> */}
          <span className="ex_title"><BiUserPlus className="icons"/></span>
        </div>
      </div>
      <div className="table_area mt-2">
        <UsersTable/>
      </div>
    </div>
  );
}

export default Users;
