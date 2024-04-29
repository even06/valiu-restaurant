# Getting Started

This is a test project for Valiu. It simply consumes an API to book tables at different restaurants.

## Project Overview

This application allows users to book tables at various restaurants. The system supports grouping smaller tables to accommodate larger parties if necessary.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

**Note:** Currently, there are not a lot of tests, but more will be added as the application develops.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

## Assumptions

- **Single Timeslot per Day:** Each restaurant only has one timeslot per day for bookings. Future enhancements may include logic to create table availability for multiple timeslots per day.
  
- **Table Grouping:** Table grouping is allowed. For instance, if a restaurant has two tables for two guests each and a reservation is needed for four guests, the system will show availability by grouping the two tables. Future iterations may include options to restrict which tables can be grouped.

- **Dynamic Availability Updates:** Post-booking, the application requires a refresh to reflect the new availability of tables at restaurants.

- **Error Handling:** Simple error handling is implemented on both the frontend and backend. Error modals are not yet optimized for mobile devices.

- **UI Tests:** UI tests are currently missing. Plans to implement these are in place to ensure better UI reliability and usability.

## Limitations

- **No Routing:** Currently, the application does not use client-side routing. All interactions are managed within single-page application (SPA) views or modals. Future enhancements may include moving from modals to different views for each action.

- **Reloading for Updates:** The application does not dynamically reload restaurant data after bookings are made, requiring a manual refresh to see updated availability.

## Future Enhancements

- **Mobile Optimization:** Improve modals and overall UI to be fully responsive for better mobile device compatibility.

- **Advanced Booking Logic:** Introduce multiple timeslots per day and enhance table grouping rules and restrictions.

- **Enhanced Navigation:** Implement client-side routing to transition between different views seamlessly, moving away from modal-based interactions.

- **Real-Time Data Updates:** Develop functionality to dynamically update restaurant availability without needing to reload the page.

- **Comprehensive Testing:** Develop a robust suite of UI and integration tests to ensure application reliability and ease future development.
