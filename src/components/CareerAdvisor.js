import React, { useState } from 'react';
import axios from 'axios';

const CareerAdvisor = () => {
    const [interests, setInterests] = useState('');
    const [skills, setSkills] = useState('');
    const [recommendations, setRecommendations] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('/api/recommendations', {
                interests,
                skills,
            });
            setRecommendations(response.data);
        } catch (err) {
            setError('Error fetching recommendations. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Personalized Career Advisor</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="interests">Interests:</label>
                    <input
                        type="text"
                        id="interests"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="skills">Skills:</label>
                    <input
                        type="text"
                        id="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Get Recommendations'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {recommendations && (
                <div>
                    <h3>Recommendations:</h3>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CareerAdvisor;