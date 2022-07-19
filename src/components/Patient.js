import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import PatientDataService from "../services/PatientService";

const Patient = props => {
  const { FN }= useParams();
  let navigate = useNavigate();

  const initialPatientState = {
    FN: null,
    name: "",
    phone_number: ""
  };
  const [currentPatient, setCurrentPatient] = useState(initialPatientState);
  const [message, setMessage] = useState("");

  const getPatient = FN => {
    PatientDataService.get(FN)
      .then(response => {
        setCurrentPatient(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (FN)
      getPatient(FN);
  }, [FN]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPatient({ ...currentPatient, [name]: value });
  };


  const updatePatient = () => {
    PatientDataService.update(currentPatient.FN, currentPatient)
      .then(response => {
        console.log(response.data);
        setMessage("The patient was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deletePatient = () => {
    PatientDataService.remove(currentPatient.FN)
      .then(response => {
        console.log(response.data);
        navigate("/patients");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPatient ? (
        <div className="edit-form">
          <h4>Patient personal info</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentPatient.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone number</label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                name="phone_number"
                value={currentPatient.phone_number}
                onChange={handleInputChange}
              />
            </div>

          </form>

         
          <button className="badge badge-danger mr-2" onClick={deletePatient}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updatePatient}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Patient...</p>
        </div>
      )}
    </div>
  );
};

export default Patient;
