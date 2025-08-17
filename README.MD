😂 Random Joke GeneratorA simple and fun web application built with Node.js that fetches and displays a random joke. The punchline is cleverly hidden and is revealed only when the user hovers over the setup, creating an interactive experience.✨ FeaturesRandom Joke Fetching: Gets a new joke with a setup and a punchline from an external API with a single click.Interactive UI: The joke's punchline is initially hidden and is revealed with a smooth fade-in effect on hover.Minimalist Design: A clean and simple interface that focuses on the content.Server-Side Rendering: Uses EJS to dynamically render the joke content on the server.🛠️ 

Technology StackBackend: Node.js, Express.jsTemplating Engine: EJS (Embedded JavaScript)HTTP Client: AxiosPackage Manager: npm🚀
 Setup and InstallationTo get a local copy up and running, follow these simple steps.PrerequisitesMake sure you have Node.js and npm installed on your machine.
 Node.jsInstallationClone the repository:git clone repo-url

Navigate to the project directory:cd repository-name

Install NPM packages:npm install

Run the application:node index.js

Or if you have nodemon installed:nodemon index.js

Open your browser and navigate to http://localhost:3000.🔌 

API ReferenceThis project utilizes the public JokeAPI to fetch random jokes.Endpoint Used: GET https://v2.jokeapi.dev/joke/Any?lang=en  This endpoint returns a two-part joke (setup and delivery) from any category.Example Response:{
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": "Why do programmers prefer dark mode?",
    "delivery": "Because light attracts bugs.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 259,
    "safe": true,
    "lang": "en"
}
