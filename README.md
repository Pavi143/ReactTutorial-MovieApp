<h1>MovieDB React App</h1>



This is a simple React application that fetches popular movie data from The Movie Database (TMDb) API and displays it in a grid format. Users can click on a movie to see more details in a modal dialog. The application also features a navigation bar with links to the TMDb website and a trending movies list.

## Getting Started

To run this app on your local machine, you'll need to follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. Open your web browser and access the app at `http://localhost:3000`.

## Features

- Fetches popular movie data from TMDb API.
- Displays movie posters, titles, IMDb ratings, release dates, and overviews.
- Clicking on a movie opens a modal dialog with detailed information.
- A navigation bar with links to the TMDb website and a trending movies list is included.

## Code Structure

### `App.js`

The main component of the application. It fetches data from the TMDb API and displays it in a grid format. It also includes the navigation bar.

### `MovieBox.js`

A reusable component for rendering individual movie cards in the grid. It includes a button that opens a modal dialog to display more movie details.

## Usage

1. Launch the application by following the "Getting Started" instructions above.
2. Browse the list of popular movies, and click the "View more" button on a movie card to see additional information.
3. The modal dialog will display the movie title, IMDb rating, release date, overview, and a poster image.
4. Use the navigation bar to visit the TMDb website or view trending movies.

## Dependencies

- React
- React Bootstrap

## API Key

The application currently uses a hardcoded API key (`'6388b18a35180a4c323d445389f92fc3'`) to fetch data from the TMDb API. It's recommended to use your own API key by replacing the `API_URL` in `App.js` with your key.

## Acknowledgments

- The Movie Database (TMDb) provides the movie data for this application.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use and modify the code as needed for your own projects.

---

Enjoy exploring movies with the MovieDB React App! If you have any questions or feedback, please don't hesitate to get in touch.