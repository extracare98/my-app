import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import VisitDataService from "../services/VisitService";

const ShowVisists = () => {
    const location = useLocation();
    const {FN} = location.state;
    console.log("mmmmmmm");
    console.log(FN); 
    //const visits = VisitDataService.getAllForOne(FN);

    const [currentVisits, setCurrentVisits] = useState([]);

    const getVisits = FN => {
        VisitDataService.getAllForOne(FN)
        .then(response => {
            setCurrentVisits(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        //if (FN)
        getVisits(FN);
    }, [FN]);
//   const visits = [
//     {
//         "id": 1,
//         "date": null,
//         "treatment": "utkyfj lb.",
//         "amount_paid": 200,
//         "createdAt": "2022-07-09T02:19:24.000Z",
//         "updatedAt": "2022-07-09T02:19:24.000Z",
//         "FN": 1
//     },
//     {
//         "id": 2,
//         "date": null,
//         "treatment": "dental whatever",
//         "amount_paid": 200,
//         "createdAt": "2022-07-09T00:25:41.000Z",
//         "updatedAt": "2022-07-09T00:25:41.000Z",
//         "FN": 1
//     },
//     {
//         "id": 3,
//         "date": null,
//         "treatment": "rony teeth",
//         "amount_paid": 500,
//         "createdAt": "2022-07-09T00:28:19.000Z",
//         "updatedAt": "2022-07-09T00:28:19.000Z",
//         "FN": 1
//     },
//     {
//         "id": 4,
//         "date": null,
//         "treatment": "body lotion",
//         "amount_paid": 300,
//         "createdAt": "2022-07-09T00:28:38.000Z",
//         "updatedAt": "2022-07-09T00:28:38.000Z",
//         "FN": 1
//     },
//     {
//         "id": 5,
//         "date": null,
//         "treatment": "ggggg",
//         "amount_paid": 200,
//         "createdAt": "2022-07-09T00:46:06.000Z",
//         "updatedAt": "2022-07-09T00:46:06.000Z",
//         "FN": 1
//     },
//     {
//         "id": 6,
//         "date": null,
//         "treatment": "fff",
//         "amount_paid": 300,
//         "createdAt": "2022-07-09T00:47:41.000Z",
//         "updatedAt": "2022-07-09T00:47:41.000Z",
//         "FN": 1
//     },
//     {
//         "id": 7,
//         "date": null,
//         "treatment": "yarab",
//         "amount_paid": 100,
//         "createdAt": "2022-07-09T00:58:12.000Z",
//         "updatedAt": "2022-07-09T00:58:12.000Z",
//         "FN": 1
//     },
//     {
//         "id": 8,
//         "date": null,
//         "treatment": "dental whatever",
//         "amount_paid": 200,
//         "createdAt": "2022-07-09T01:06:27.000Z",
//         "updatedAt": "2022-07-09T01:06:27.000Z",
//         "FN": 1
//     },
//     {
//         "id": 9,
//         "date": null,
//         "treatment": "htjxfhc",
//         "amount_paid": 345,
//         "createdAt": "2022-07-09T01:11:27.000Z",
//         "updatedAt": "2022-07-09T01:11:27.000Z",
//         "FN": 1
//     },
//     {
//         "id": 10,
//         "date": null,
//         "treatment": "bla",
//         "amount_paid": 300,
//         "createdAt": "2022-07-09T01:12:39.000Z",
//         "updatedAt": "2022-07-09T01:12:39.000Z",
//         "FN": 1
//     }
// ];

  const showTable = () => {
    try {
      return currentVisits.map((item, index) => {
        console.log(item);
        return (
            <tr key={index}>
            <td className="text-xs font-weight-bold" >{index +1}</td>
           <td className="text-xs font-weight-bold">{item.date}</td>
           <td className="text-xs font-weight-bold">{item.treatment}</td>
           <td className="text-xs font-weight-bold">{item.amount_paid}</td>
            <td></td>
            </tr>
                        );
                });
                } catch (e) {
                alert(e.message);
                }
  };

    return(
    <div className="container-fluid py-4">
           <div className="table-responsive p-0 pb-2">
         <table id="table" className="table align-items-center justify-content-center mb-0">
             <thead>
                 <tr>
                 <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Visit no</th>
                 <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Date</th>
                 <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Treatment</th>
                 <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Amount Paid</th>
  <th></th>
  </tr>
             </thead>
  
             <tbody>
                     {showTable()}
             </tbody>
         </table>
             </div>
             </div>
  )
}

export default ShowVisists;