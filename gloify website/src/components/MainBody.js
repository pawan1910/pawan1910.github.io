import React, { useEffect } from "react";
import "./MainBody.css";
import { BsHouseDoor } from "react-icons/bs";
import { GrShare } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import Navbar from "./Navbar";
import { text } from "@fortawesome/fontawesome-svg-core";
// import axios from "axios";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function MainBody() {
  //     let  data = '';
  // useEffect( () => {
  //     let config = {
  //         method: 'get',
  //         url: 'https://api.postman.com/collections/17586809-d17a5e98-c009-4582-9a2f-f4926825ab7e?access_key=PMAT-01GMW3EE83FD8QGW9JYQGXHN5F',
  //         headers: { },
  //         data : data
  //       };

  //       axios(config)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // })

  return (
    <div>
      <Navbar/>
      <div>
        <div className="header">
          <h3 className="main-head"> Your Prospect List </h3>
          <p className="home">
            <BsHouseDoor />
            <span className="gr-icon"> {">"} </span>
          </p>
          <p>Your List</p>
        </div>
        <div className="d-flex align-items-center bg-success inpt">
          <div className="d-flex">
            <BsFillPersonFill className="icon1" />
            <input placeholder=" First name" className="up_int" />
          </div>
          <div>
            <BsFillPersonFill className="icon1" />
            <input placeholder="Last name" />
          </div>
          <div>
            <BsGlobe className="icon1" />
            <input placeholder="mysite.com or company site" />
          </div>
          <button className="btns">
            <FiSend />
            Find Emails
          </button>
        </div>
      </div>

      <div className="card shadow-lg p-3 mb-5 bg-body rounded mt-3">
        <div className="d-flex align-items-center border-bottom border-secondary my-3 px-2">
          <h5>List Management</h5>
          <select className="select">
            <option>Show All</option>
          </select>
          <h5 className="last fs-6 ">
            24 emails found/ 31 total unique searches -- success rate 77%
          </h5>
          <hr></hr>
        </div>

        {/* --- 3 Button--- */}
        <div className="3btn d-flex align-items-center justify-content-between my-3">
          <div>
            <select className="btn btn-success mx-1">
              <option>Download CSV</option>
            </select>
            <button className="btn btn-success mx-1 new_btn">
              Export to Google Sheet
              <span className="text-warning position-absolute new">New</span>
            </button>
            <button className="btn btn-success mx-1">
              Add list of properties
            </button>
          </div>
          <div>
            <input className="search" placeholder="Enter search query" />
            <button className="btn btn-success">Search</button>
          </div>
        </div>

        {/* ---Table--- */}
        <div className="table-responsive">
        <table className="table">
          <thead className="tbhead">
            <th scope="col">STATUS </th>
            <th scope="col">IMAGE </th>
            <th scope="col">NAME </th>
            <th scope="col-2">EMAIL </th>
            <th scope="col">DOMAIN </th>
            <th scope="col">COMPANY </th>
            <th scope="col-2">POSITION </th>
            <th scope="col">INDUSTRY </th>
            <th scope="col">LOCALITY </th>
          </thead>
          <tbody>
            <tr className="row1">
              <td>
                <button className="btn btn-danger btn-sm">Not Found</button>
              </td>
              <td>
                <a href="#">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
                    className="img"
                  />
                </a>
              </td>
              <td>Apoorva Pande</td>
              <td className="email">
                <a href="#">
                  <GrShare />
                </a>
              </td>
              <td> </td>
              <td>
                Advisor at <br />
                Various
                <br /> Startups{" "}
              </td>
              <td>CEO</td>
              <td></td>
              <td>Unitied States</td>
            </tr>
            <tr className="row2">
              <td>
                <button className="btn btn-success btn-sm">Found</button>
              </td>
              <td>
                <a href="#">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
                    className="img"
                  />
                </a>
              </td>
              <td>Apoorva Pande</td>
              <td className="email">
                apoorva@focusedfounder.com
                <GrShare />
              </td>
              <td className="email"> focusedfounder.com</td>
              <td>
                Focused <br />
                Founder{" "}
              </td>
              <td>CEO</td>
              <td></td>
              <td>Unitied States</td>
            </tr>
            <tr className="row2">
              <td>
                <button className="btn btn-success btn-sm">Found</button>
              </td>
              <td>
                <a href="#">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
                    className="img"
                  />
                </a>
              </td>
              <td>Sourav Chakraborty</td>
              <td className="email">
                sourav@mygov.in
                <GrShare />
              </td>
              <td> </td>
              <td>
                Responsible <br />
                Indian{" "}
              </td>
              <td>Co-founder</td>
              <td></td>
              <td>India</td>
            </tr>
            <tr className="row1">
              <td>
                <button className="btn btn-danger btn-sm">Not-Found</button>
              </td>
              <td>
                <a href="#">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
                    className="img"
                  />
                </a>
              </td>
              <td>Sourav Chakraborty</td>
              <td className="email">
                <GrShare />
              </td>
              <td> </td>
              <td>
                Cibertix <br />
                Technologies{" "}
              </td>
              <td>Co-founder</td>
              <td></td>
              <td>India</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
