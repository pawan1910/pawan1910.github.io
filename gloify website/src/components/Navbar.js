import React from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GoVerified } from "react-icons/go";
import { GoThreeBars } from "react-icons/go";
import {GrFormAdd} from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillLockFill} from "react-icons/bs";
import { BsChevronDown} from "react-icons/bs";
import { BsCart} from "react-icons/bs";
import "./Navbar.css";


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-success ">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#"><AiOutlineMail/>Getemail.io</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse part1" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link text-light " aria-current="page" href="#"><CgMenuRound/>Prospects</a>
        <a className="nav-link text-light " href="#"><CiSearch/>Search People <span className="text-warning position-absolute new">New</span></a>
        <a className="nav-link text-light " href="#"><GoVerified/>Verify</a>
        <a className="nav-link text-light " href='#'><GoThreeBars/>Upload CSV</a>
        <a className="nav-link text-light " href='#'><GrFormAdd/>Add Chrome Extension</a>
        <a className="nav-link text-light " href='#'><AiOutlineQuestionCircle/>Report a Bug</a>
      </div>
      <div className='d-flex align-items-center secbtn'>
      <a className="nav-link text-light " href='#'><BsFillLockFill/>Account:harsh@vikgol.com<BsChevronDown/></a>
      <button className='btn btn-warning cartbtn'><BsCart/>Plan:free<BsChevronDown/></button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar