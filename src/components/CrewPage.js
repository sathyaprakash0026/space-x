import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import "./css/ag.css";

const RocketsList = () => {
    const navigate = useNavigate();
    const [crewMembers, setCrewMembers] = useState();

    useEffect(() => {
        const fetchCrewMembers = async () => {
            try {
                const response = await fetch("https://api.spacexdata.com/v4/crew");
                const data = await response.json();
                setCrewMembers(data);
            } catch (error) {
                console.error("Error fetching crew members:", error);
            }
        };

        fetchCrewMembers();
    }, []);

    if (!crewMembers) {
        return (
            <div className="loading-container">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <Toolbar title={"Crew Members"} />
            <div className="crew-container">
                {crewMembers.map((member) => (
                    <div key={member.id} className="crew-member-card">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.agency}</p>
                        <p>Status: {member.status}</p>
                        <a href={member.wikipedia} target="_blank" rel="noopener noreferrer">
                            Learn more
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RocketsList;
