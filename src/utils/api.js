import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const getCareerRecommendations = async (userInput) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/recommendations`, userInput);
        return response.data;
    } catch (error) {
        console.error('Error fetching career recommendations:', error);
        throw error;
    }
};

export const submitUserProfile = async (userProfile) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user`, userProfile);
        return response.data;
    } catch (error) {
        console.error('Error submitting user profile:', error);
        throw error;
    }
};