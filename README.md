# Library System Frontend

A responsive web interface for browsing and managing library items like books, DVDs, and audiobooks. Built with React and TypeScript, it connects to an external backend API for data handling.

Check out the project here: [Live demo](https://library-system-fe.onrender.com)

⚠️ This app requires the backend to be running locally or hosted online.
Backend repo: [Library System Backend](https://github.com/SofiaAlmroth/library_system_BE)

## Tech Stack
- React + TypeScript
- Tailwind CSS
- Vite
- API integration with RESTful endpoints

## Features
- List, search, filter, and sort library items
- Borrow and return items
- Manage categories (create, update, delete)

## Setup
git clone https://github.com/SofiaAlmroth/library_system_FE.git
cd library_system_FE
npm install
npm run dev
Update your .env with your backend URL:

REACT_APP_BACKEND_URL=http://localhost:5689
Or use your deployed backend URL.

## Deployment
Can be deployed to Vercel, Netlify, Render, etc. Remember to include your REACT_APP_BACKEND_URL in the deployed environment.

## Possible Improvements
- Add state management (e.g. React Query, Context API)
- Implement authentication
- Improve search for larger datasets

🤝 Contributions
Feedback and pull requests are welcome!
