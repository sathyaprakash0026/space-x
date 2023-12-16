import React from 'react';
import './css/ag.css'; // Import your CSS file
import { useNavigate } from "react-router-dom/dist";


const Toolbar = ({ title }) => {
    const navigate = useNavigate();

    return (
        <div>
            <header>

                <div className="header-container">
                    <h2>{title}</h2>

                    <button className="home-button" onClick={() => navigate('/')}>Home</button>


                </div>
            </header>
        </div>
    );
}

export default Toolbar;