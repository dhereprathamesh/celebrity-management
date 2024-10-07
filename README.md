# Celebrity Management App

This is a **Celebrity Management App** built with React. It allows users to view, search, edit, and delete celebrity information. The app uses an accordion UI to display details and prevents editing if the celebrity is under 18 years old.

## Features

- **Search**: Easily find celebrities by name.
- **View Details**: Click to expand and view more info about each celebrity.
- **Edit**: Update details if the celebrity is 18 years or older. Includes form validation for input fields.
- **Delete**: Remove a celebrity with confirmation.
- **Responsive Design**: Adjusts seamlessly to different screen sizes, ensuring a great experience on mobile, tablet, and desktop devices.
- **Form Validation**: Ensures that only valid data is entered when editing celebrity information.

## Live Demo

You can view the live version of the app here:

[Live Demo](https://6702ceab19eada91ac5f1d64--cosmic-dusk-7f12e5.netlify.app/)

## Tech Stack

- **React** for the UI.
- **Styled-Components** for styling.
- **React-Hot-Toast** for notifications.
- **Simple JSON data** for mock celebrity info.

## How to Run

To run this project locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/celebrity-management-app.git
    ```

2. Go into the project folder:

    ```bash
    cd celebrity-management-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the app:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## File Structure

- `src/components`: Contains components like `CelebrityAccordion`, `DeleteDialog`, and `SearchInput`.
- `src/data`: Holds the `celebrities.json` file with celebrity information.
- `src/utils`: Contains utility functions like `calculateAge`.

## Responsive Design

The app is fully responsive and adapts to different screen sizes, making it easy to use on mobile phones, tablets, and desktops.

## Validation

- **Edit Form**: Validations are in place to ensure proper input for fields like name, date of birth, and other celebrity details.
- **Age Restriction**: Prevents editing if the celebrity is under 18 years old, with clear error notifications using React-Hot-Toast.

## License

This project is open-source and free to use.
