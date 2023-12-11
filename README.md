# Weekend Movie Sagas

## Description
Duration: Weekend Project (approx 15 hours)

This project is developed to be able to see a list of movie posters, details, genres, and add additional movies to the page.

### Main Page
The initial page displays all of the movie posters displayed on clickable cards.  The movies listed on this page come from the movies table of the database.  In order to access details of the selected movie you can click on the movie poster.  Additionally, the main screen also has a button on the top of the page to 'Create Movie'.  Clcking this button will take you to the new movie page of the application.

### Details Page
Clicking on the poster of the main page will take you to the details of that movie.  The left-hand column of this page will show the name of the movie, and the movie poster again.  The center column will display the writted description of the movie from the database.  The right-hand column displays the genres that the movie is connected to in the database.  Below the genres you will find buttons to either go back to the movie list or navigate to add a new movie.  

### Add New Movie Page
The add a new movie page allows the user to add a new movie to the application and the relevant database files.  The user will be prompted to enter a movie title, movie poster URL, movie description, and to select one of the applicable movie genres.  After the user has entered the applicable information they can click on either 'save' or 'cancel' at the bottom of the screen.  Pressing 'cancel' will not save the information and will return the user to the main page.

## Screenshots
![2023-12-10 19 29 39](https://github.com/RyanKjesboJohnson/weekend-movie-sagas/assets/137465822/9993e5a6-79d2-4ecc-806e-71bae5cb15c6)
![2023-12-10 19 31 18](https://github.com/RyanKjesboJohnson/weekend-movie-sagas/assets/137465822/5281e49b-7fd4-428b-8486-1766e87b74af)

## Prerequisites
The software needed to run this program includes:
-Node.js
-React
-React Router
-React Redux
-React Saga
-Redux Logger
-Material UI
-Axios
-PG

## Installation
1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend`
3. `npm Install`
4. `npm run server`
5. `npm run client`

## Usage
The weekend movie saga application is used to keep track of movies and their relevant details.  Users can easily see all displayed movies on the movie list screen.  Users can then view details about a movie by clicking on a movie image.  Finally, users can add additional movies to their app on the new movie page.

## Acknowledgement
Thank you to the staff and fellow students at Prime Digital Academy.  Thank you to my wife who did more around the house while I worked on this project.

