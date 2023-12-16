import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './css/ag.css';
import Toolbar from './Toolbar';

const RocketPage = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchRocket = async () => {
      try {
        const response = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
        const data = await response.json();
        setRocket(data);
      } catch (error) {
        console.error('Error fetching rocket details:', error);
      }
    };

    fetchRocket();
  }, [id]);

  useEffect(() => {
    // Change the image every 20 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rocket.flickr_images.length);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [rocket]);

  if (!rocket) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <><Toolbar title={'Rocket Details'} /><div className="rocket-details">
      <br></br>
      <div
        className="rocket-background"
        style={{ backgroundImage: `url(${rocket.flickr_images[currentImageIndex]})` }} />
      <h2>{rocket.name}</h2>
      <p>{rocket.description}</p>
      <p>Country: {rocket.country}</p>
      <p>Cost per Launch: ${rocket.cost_per_launch}</p>
      {/* Add other fields as needed */}

      <div className="additional-info">
        <h3>Details:</h3>
        <ul>
          <li>
            Height: {rocket.height.meters} meters / {rocket.height.feet} feet
          </li>
          <li>
            Diameter: {rocket.diameter.meters} meters / {rocket.diameter.feet} feet
          </li>
          <li>Mass: {rocket.mass.kg} kg / {rocket.mass.lb} lb</li>
          {/* Add other fields as needed */}
        </ul>
      </div>
    </div></>
  );
};

export default RocketPage;
