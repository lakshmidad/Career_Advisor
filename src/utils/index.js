// This file contains utility functions, such as error handling and response formatting.

const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
};

const formatResponse = (data) => {
    return {
        success: true,
        data: data,
    };
};

module.exports = {
    handleError,
    formatResponse,
};