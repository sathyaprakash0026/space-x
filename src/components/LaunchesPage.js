import React, { useState, useEffect } from "react";
import { spacexService1 } from "../services/spacexService";
import "./css/ag.css";
import Toolbar from "./Toolbar";

const RocketsList = () => {
  const [rockets, setRockets] = useState();

  useEffect(() => {
    spacexService1.getRockets().then((data) => {
      setRockets(data);
    });
  }, []);

  if (!rockets) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }



  return (
    <><Toolbar title={'Launches'} /><div className="launch-list-container">


      {rockets.map((rocket) => (
        <div className="launch-card" key={rocket.id} >
          {rocket?.links && rocket?.links.patch && (
            <div className="image">
              <img src={rocket?.links.patch.small} alt={rocket.name} />
            </div>
          )}
          <div className="rocket-details">
            <h3>{rocket.name}</h3>
            <p>
              <strong>Date:</strong> {rocket.date_local}
            </p>
            <p>
              <strong>Success:</strong> {rocket.success ? "Yes" : "No"}
            </p>
            {rocket.failures && rocket.failures.length > 0 && (
              <p>
                <strong>Failure Reason:</strong> {rocket.failures[0].reason}
              </p>
            )}

          </div>
        </div>
      ))}
    </div></>
  );
};

export default RocketsList;
