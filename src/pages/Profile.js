import React, { useEffect, useState } from 'react';
import { getUserProfile, getCareerRecommendations } from '../utils/api';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const profileData = await getUserProfile();
            setUserProfile(profileData);
            const careerData = await getCareerRecommendations(profileData.skills);
            setRecommendations(careerData);
        };

        fetchUserProfile();
    }, []);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{userProfile.name}'s Profile</h1>
            <h2>Skills</h2>
            <ul>
                {userProfile.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h2>Career Recommendations</h2>
            <ul>
                {recommendations.map(rec => (
                    <li key={rec}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;