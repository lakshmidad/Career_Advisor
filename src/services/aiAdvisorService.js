const axios = require('axios');

const getCareerRecommendations = async (userInput) => {
    try {
        const response = await axios.post('https://your-google-cloud-vertex-ai-endpoint', {
            data: userInput
        });

        return response.data;
    } catch (error) {
        throw new Error('Error fetching career recommendations: ' + error.message);
    }
};

module.exports = {
    getCareerRecommendations
};