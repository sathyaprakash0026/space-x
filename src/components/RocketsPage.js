import React, { useState, useEffect } from 'react';
import { spacexService } from '../services/spacexService';
import './css/ag.css';
import Toolbar from './Toolbar';
import { useNavigate } from "react-router-dom/dist";



const RocketsList = () => {
  const navigate = useNavigate();

  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    spacexService.getRockets().then((data) => {
      setRockets(data);
      console.log(data, "data")
    });
  }, []);

  return (
    <><Toolbar title={'Rockets'} /><div className="rockets-list-container">
      {rockets.map((rocket) => (
        <div className="rocket-card" key={rocket.id}>

          <div onClick={() => navigate(`/rockets/${rocket.id}`)}>
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
            <div className="rocket-details">
              <h3>{rocket.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default RocketsList;
