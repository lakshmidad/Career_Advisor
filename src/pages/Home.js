import React from 'react';
import CareerAdvisor from '../components/CareerAdvisor';
import SkillsAssessment from '../components/SkillsAssessment';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Personalized Career and Skills Advisor</h1>
            <p>Your journey to a successful career starts here!</p>
            <CareerAdvisor />
            <SkillsAssessment />
        </div>
    );
};

export default Home;