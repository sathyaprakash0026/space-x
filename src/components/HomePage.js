import React, { useState, useEffect } from 'react';
import './css/ag.css';
import { useNavigate } from "react-router-dom/dist";

function App() {
  const [companyData, setCompanyData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
        const data = await response.json();
        setCompanyData(data);
        console.log(data, "home");
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  }, []);

  if (!companyData) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to SpaceX Info App</h1>
        <nav>
          <ul>
            <li><a style={{ cursor: 'pointer' }} onClick={() => navigate("crew-members")}>Crews</a></li>
            <li><a style={{ cursor: 'pointer' }} onClick={() => navigate("rockets")}>Rockets</a> </li>
            <li><a style={{ cursor: 'pointer' }} onClick={() => navigate("launches")}>Launches</a></li>
          </ul>
        </nav>
      </header>


      <main>
        {companyData && (
          <section className="hero">
            <h2>{companyData.name}</h2>
            <p>CEO: {companyData.ceo}</p>
            <p>{companyData.summary}</p>
            <p>Headquarters: {companyData.headquarters.address}, {companyData.headquarters.city}, {companyData.headquarters.state}</p>
            <p>Founded: {companyData.founded}</p>

          </section>
        )}

        <section className="features">
          <div className="feature">
            <h3>Number of Employees</h3>
            <p>{companyData && companyData.employees} employees</p>
          </div>
          <div className="feature">
            <h3>Company Links</h3>
            <p>Website: <a href={companyData?.links.website} target="_blank" rel="noopener noreferrer">{companyData?.links.website}</a></p>
            <p>Twitter: <a href={companyData?.links.twitter} target="_blank" rel="noopener noreferrer">{companyData?.links.twitter}</a></p>
            <p>Elon Musk's Twitter: <a href={companyData.links.elon_twitter} target="_blank" rel="noopener noreferrer">{companyData?.links.elon_twitter}</a></p>
          </div>
          <div className="feature">
            <h3>Number of Launch Sites</h3>
            <p>{companyData.launch_sites}</p>

          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
