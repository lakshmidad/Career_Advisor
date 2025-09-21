
# Personalized Career and Skills Advisor AI Platform

## Overview
The Personalized Career and Skills Advisor AI platform is designed to assist Indian students in making informed career choices based on their skills and interests. The platform leverages AI to provide personalized recommendations and assessments.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

```
career-skills-advisor-ai
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── userController.js
│   │   ├── routes
│   │   │   └── userRoutes.js
│   │   ├── models
│   │   │   └── userModel.js
│   │   ├── services
│   │   │   └── aiAdvisorService.js
│   │   └── utils
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── Dashboard.js
│   │   │   ├── CareerAdvisor.js
│   │   │   └── SkillsAssessment.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   └── Profile.js
│   │   └── utils
│   │       └── api.js
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Set up environment variables in a `.env` file (refer to the backend README for details).
4. Start the server:
   ```
   npm start
   ```

## Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Features
- **User Input**: Students can input their skills and interests through a user-friendly interface.
- **AI Recommendations**: The platform provides personalized career recommendations based on user input.
- **Skills Assessment**: Users can receive feedback on their skills and areas for improvement.
- **User Profiles**: Students can create profiles to save their information and recommendations.

## Branching Strategy
- Use `main` for production-ready code.
- Create feature branches for new features (e.g., `feature/career-recommendations`).
- Use descriptive commit messages to document changes.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Sample User Data
```json
{
  "interests": ["technology", "design"],
  "aptitudes": ["problem-solving", "creativity"],
  "skills": ["Python", "HTML", "CSS"],
  "academicBackground": "B.Tech Computer Science",
  "careerAspirations": "Work in AI/ML"
}
```
=======
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
>>>>>>> 2a28e200c22a4d185bc4965c8d0401670742c33f
