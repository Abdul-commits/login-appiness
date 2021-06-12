import React from "react";
import "./Empolyee.css";

const EmpolyeeList = (props) => {
  return (
    <div>
      <img
        className="image"
        alt="Logo"
        src={require("./images/appinesslogo.png").default}
      />

      <h1>DashBoard</h1>
      <table className="styled-table">
        <div className="table-list">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>PHONE NO</th>
            </tr>
          </thead>
          <tbody>
            {props.userData &&
              props.userData.map((d, i) => {
                return (
                  <React.Fragment key={i}>
                    <tr>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.age}</td>
                      <td>{d.gender}</td>
                      <td>{d.email}</td>
                      <td>{d.phoneNo}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </div>
      </table>
    </div>
  );
};

export default EmpolyeeList;
