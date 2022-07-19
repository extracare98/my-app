import React, { useState } from "react";
import PatientDataService from "../services/PatientService";

const AddPatient = () => {
  const initialPatientState = {
    FN: "",
    name: "",
    phone_number: ""
  };
  const [patient, setPatient] = useState(initialPatientState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const savePatient = () => {
    var data = {
      FN: patient.FN,
      name: patient.name,
      phone_number: patient.phone_number
    };

    PatientDataService.create(data)
      .then(response => {
        setPatient({
          FN: response.data.FN,
          name: response.data.name,
          phone_number: response.data.phone_number
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPatient = () => {
    setPatient(initialPatientState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPatient}>
            Add Patient
          </button>
        </div>
      ) : (
        
        <div>
          <div className="form-group">
            <label htmlFor="FN">File Number</label>
            <input
              type="text"
              className="form-control"
              id="FN"
              required
              value={patient.FN}
              onChange={handleInputChange}
              name="FN"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={patient.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              required
              value={patient.phone_number}
              onChange={handleInputChange}
              name="phone_number"
            />
          </div>

          <button onClick={savePatient} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPatient;
