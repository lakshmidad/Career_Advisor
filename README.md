# Career Skills Advisor AI Backend

## Overview
The Career Skills Advisor AI platform is designed to assist Indian students in making informed career choices based on their skills and interests. This backend application is built using Node.js and Express, providing a RESTful API for the frontend to interact with.

## Features
- User registration and profile management
- AI-driven career recommendations based on user input
- Skills assessment and feedback

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB or Firestore (for user data storage)
- Google Cloud account with Vertex AI enabled (for AI recommendations)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/career-skills-advisor-ai.git
   ```
2. Navigate to the backend directory:
   ```
   cd career-skills-advisor-ai/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Environment Variables
Create a `.env` file in the `backend` directory and add the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLOUD_PROJECT_ID=your_google_cloud_project_id
GOOGLE_CLOUD_API_KEY=your_google_cloud_api_key
```

### Running the Server
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

### API Endpoints
- `POST /api/users/register`: Register a new user
- `POST /api/users/recommendations`: Get career recommendations based on user input

## Testing
You can use tools like Postman or Insomnia to test the API endpoints.

## Contributing
Contributions are welcome! Please create a pull request for any changes you would like to propose.

## License
This project is licensed under the MIT License. See the LICENSE file for details.