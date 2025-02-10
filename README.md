# TestLine Quiz APP

> **An engaging, timed quiz application built with React.**

---

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository hosts a dynamic quiz application built with React. The app fetches quiz data from a JSON file, renders questions with multiple options, and features a countdown timer. It also offers a theme toggle (light/dark mode) for an enhanced user experience. 

---

## Demo

You can view the live demo of the project here: [Test Line Quiz Demo](https://testlinequiz.netlify.app/)

---

## Features

- **Dynamic Data Fetching:** Loads quiz data from a `quiz.json` file via an asynchronous API call.
- **Interactive Quiz Interface:** Users navigate through questions, select answers, and receive immediate feedback.
- **Countdown Timer:** Adds time-based challenges to the quiz using `easytimer.js`.
- **Theme Toggle:** Switch between light and dark themes.
- **Stylish Loader:** Animated loader during data fetching.
- **Responsive & Accessible:** Works well across different devices.

---

## Tech Stack

- **React** - Front-end library
- **easytimer.js** - Countdown timer
- **React Icons** - Iconography
- **styled-components** - Styling
- **html-entities** - Decoding HTML entities

---

## Project Structure

```plaintext
├── App.jsx
├── quiz.json         // Quiz data file
├── pages
│   └── Quiz.jsx      // Main quiz component
├── components
│   ├── Navbar.jsx    // Navigation bar
│   ├── Loader.jsx    // Loading animation
│   └── StartQuiz.jsx // Start button
└── utils
    └── Theme.js      // Theme toggle utility
```

---

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/havishya10/react-quiz-app.git
   cd react-quiz-app
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the Development Server:**
   ```bash
   npm start
   # or
   yarn start
   ```
   The app should now be running on `http://localhost:3000`.

---

## Usage

1. **Load the Quiz:** The app fetches quiz data with a loader displayed during fetching.
2. **Theme Toggling:** Click the navbar icon to switch themes.
3. **Answer Questions:**
   - Select an answer; correct answers highlight green, incorrect red.
   - Navigate between questions; the last question displays a "Submit" button to view your score.
4. **Countdown Timer:** A timer runs per question, requiring users to answer within a time limit.

---

## Customization

- **Modify `quiz.json`** to change quiz content.
- **Edit `Theme.js`** to customize themes.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

- **Havishya Vally**  
- **Email:** havishya995@gmail.com  

Feel free to reach out for any questions

---

