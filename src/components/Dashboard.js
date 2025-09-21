import React, { useEffect, useState } from 'react';
import { getUserData, getRecommendations } from '../utils/api';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData();
            setUserData(data);
            const recs = await getRecommendations(data.skills);
            setRecommendations(recs);
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Welcome to Your Dashboard</h1>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Skills: {userData.skills.join(', ')}</p>
                </div>
            )}
            <h2>Career Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;