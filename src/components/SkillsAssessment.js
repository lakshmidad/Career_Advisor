import React, { useState } from 'react';

const SkillsAssessment = () => {
    const [skills, setSkills] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setSkills(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFeedback('');
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/assess-skills`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ skills }),
            });
            if (!response.ok) throw new Error('Server error');
            const data = await response.json();
            setFeedback(data.feedback);
        } catch (err) {
            setError('Unable to process your request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Skills Assessment</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={skills}
                    onChange={handleInputChange}
                    placeholder="Enter your skills here..."
                    rows="4"
                    cols="50"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Assessing...' : 'Assess Skills'}
                </button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {feedback && (
                <div>
                    <h3>Feedback:</h3>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default SkillsAssessment;