import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import VisitDataService from "../services/VisitService";

const AddVisit = () => {
  const location = useLocation();
  const {FN} = location.state;
  const initialVisitState = {
    FN,
    treatment: "",
    amount_paid: "",
    date: ""
  };
  const [visit, setVisit] = useState(initialVisitState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setVisit({ ...visit, [name]: value });
  };

  const saveVisit = () => {
    var data = {
      FN,
      treatment: visit.treatment,
      amount_paid: visit.amount_paid,
      date: visit.date
    };

    VisitDataService.create(data)
      .then(response => {
        if(response.status === 200)
          setSubmitted(true);
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newVisit = () => {
    setVisit(initialVisitState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You added visit successfully!</h4>
          <button className="btn btn-success" onClick={newVisit}>
            Add Visit
          </button>
        </div>
      ) : (
        <div>
            
          <div className="form-group">
            <label htmlFor="treatment">Treatment</label>
            <input
              type="text"
              className="form-control"
              id="treatment"
              required
              value={visit.treatment}
              onChange={handleInputChange}
              name="treatment"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount_paid">Amount Paid</label>
            <input
              type="number"
              className="form-control"
              id="amount_paid"
              required
              value={visit.amount_paid}
              onChange={handleInputChange}
              name="amount_paid"
            />
          </div>

          <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
              type="date"
              className="form-control"
              id="date"
              data-date="" data-date-format="YYYY-MMM-DD"
              required
              value={visit.date}
              onChange={handleInputChange}
              name="date" 
            />
            </div>

          <button onClick={saveVisit} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddVisit;