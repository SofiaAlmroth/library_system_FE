# Library System Frontend

This is the frontend of the Library System project. The frontend interacts with the backend API to manage library items like books, DVDs, and audiobooks. The user interface allows users to browse, borrow, return, and manage library items efficiently.

## Live Demo

The application is live and can be accessed here: [Library System Frontend](https://library-system-fe.onrender.com/)

**Note**: To view detailed information about a book or item, click on its title. 

## Important Note

This frontend application **requires the backend** to be running in order to work properly. Ensure that you have the backend set up and running locally or deployed to a server. You can find the backend repository [here](https://github.com/SofiaAlmroth/library_system_BE).

If you do not have the backend running, the application will not be able to display or manage library items.

Make sure to set the correct backend URL in the `.env` file using the following environment variable:

```env
REACT_APP_BACKEND_URL=http://localhost:5689
```

This points to your backend running locally on port `5689`. If your backend runs on a different port, update it accordingly.

## For Production Deployment:
If you have deployed the backend, replace the above with the deployed URL. For example:

```env
REACT_APP_BACKEND_URL=https://library-system-90kk.onrender.com
```

## Tech Stack

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Used for type safety in the code.
- **Tailwind CSS**: Utility-first CSS framework for styling and layout.
- **React Query (Future Improvement)**: For managing server-state and handling data fetching.

## Features

- Display a list of library items (books, DVDs, audiobooks) with sorting and filtering functionality.
- Detailed views for individual library items.
- Borrow and return items directly from the interface.
- Responsive design for mobile and desktop users.
- Integration with the backend API for CRUD operations (Create, Read, Update, Delete) on library items and categories.

## Project Instructions (Summary)

This project serves as the frontend interface for the Library System and interacts with the backend API.

### Key Requirements:
- The application should be a **Single Page Application (SPA)** using React.
- The design should be **responsive** (work on mobile and desktop).
- The UI should allow users to **search, filter, and sort** the library items.
- Users should be able to **borrow and return** items, and view detailed information about each item.
- The project should integrate with the backend API for managing library items and categories.

## Pages

- **Home Page**: Displays a list of all library items with sorting and filtering.
- **Item Detail Page**: Shows detailed information about a specific library item (book, DVD, or audiobook).
- **Search and Filter**: Provides functionality to search and filter items by category or type.

## API Integration

This frontend interacts with the backend via RESTful API endpoints. Here are some of the main API interactions:

- **GET /items**: Fetch all library items.
- **GET /items/:id**: Fetch details of a specific item.
- **PUT /items/:id/borrow**: Borrow an item.
- **PUT /items/:id/return**: Return a borrowed item.
- **POST /categories**: Add a new category.
- **PUT /categories/:id**: Update a category.
- **DELETE /categories/:id**: Delete a category.

### Example API Interaction

Here’s an example of how to fetch all library items from the backend:

```tsx
useEffect(() => {
  async function fetchLibraryItems() {
    const response = await fetch('http://localhost:your_backend_port/items');
    const data = await response.json();
    setItems(data);
  }
  fetchLibraryItems();
}, []);
```

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/SofiaAlmroth/library_system_FE.git
cd library_system_FE
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build the project for production:
```bash
npm run build
```
5. Deploy: You can deploy this application to any hosting service that supports static web apps. The production build is located in the dist folder after running the build command.


## Future Improvements
React Query: Implement React Query to handle server-state, data fetching, and caching, reducing the need for manual API calls and improving performance.
State Management: Add more advanced state management with Redux or Context API for better scalability.
Authentication: Add user authentication to restrict access to certain features (e.g., only authenticated users can borrow or return items).
Search Optimization: Improve search functionality with better filtering and sorting capabilities for large datasets.

## Environment Variables
Make sure you set up the following environment variables in a `.env` file:

```env
REACT_APP_BACKEND_URL=http://localhost:your_backend_port
This URL should point to the backend server that handles data management for the library system.
```

## Deployment
The project can be deployed to any static hosting platform such as Vercel, Netlify, or Render. Make sure the environment variables are correctly set during deployment.

## Contributing
Feel free to fork this repository, submit issues, or open pull requests. Contributions are welcome!
























