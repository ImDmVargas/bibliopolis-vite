
import "./../../index.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Sidebar from "../layout/slidebarUsers";

function MyLoans() {
  return (
    <>
      <Sidebar />
      <p className=" ml-52">Aquí van mis prestamos</p>
    </>
  );
}

export default MyLoans;
