=========================
😂 Random Joke Generator
=========================

A simple and fun web application built with Node.js that fetches and displays a random joke. The punchline is cleverly hidden and is revealed only when the user hovers over the setup, creating an interactive experience.

-----------
## Features
-----------
* Fetches a random joke with a setup and a punchline from an external API.
* The punchline is revealed with a smooth fade-in effect on hover.
* Dynamically renders the joke content on the page using EJS templates.
* Clean, minimalist interface.

---------------------
## Technology Stack
---------------------
* Backend: Node.js, Express.js
* Templating Engine: EJS (Embedded JavaScript)
* HTTP Client: Axios
* Package Manager: npm

-------------------------
## Setup and Installation
-------------------------

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
- Node.js (https://nodejs.org/)

### Installation
1.  Clone the repository:
    `git clone https://github.com/AASTHA9416/Get-a-Joke.git`

2.  Navigate to the project directory:
    `cd REPO-NAME`

3.  Install NPM packages:
    `npm install`

4.  Run the application:
    `node index.js`

5.  Open your browser and navigate to http://localhost:3000.

----------------
## API Reference
----------------
This project utilizes the public JokeAPI to fetch random jokes.

Endpoint: `GET https://v2.jokeapi.dev/joke/Any?lang=en`