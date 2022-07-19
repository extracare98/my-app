import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPatient from "./components/AddPatient";
import AddVisit from "./components/AddVisit";
import Patient from "./components/Patient";
import PatientsList from "./components/PatientsList";
import ShowVisits from "./components/ShowVisits";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/patients" className="navbar-brand">
          Extra Care
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/patients"} className="nav-link">
              Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Patient
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PatientsList/>} />
          <Route path="/patients" element={<PatientsList/>} />
          <Route path="/add" element={<AddPatient/>} />
          <Route path="/patients/:id" element={<Patient/>} />
          <Route path="/newvisit" element={<AddVisit/>} />
          <Route path="/visits/:id" element={<ShowVisits/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
