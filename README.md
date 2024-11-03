API Authentication App

This Node.js application demonstrates multiple methods for authenticating API requests. It includes examples of No Auth, Basic Auth, API Key, and Bearer Token authentication methods.

Features
Express.js Server: A simple server that handles routes for various authentication types.
EJS Templating: Uses EJS for rendering the responses on the frontend.
Axios: Makes HTTP requests to an external API using different authentication methods.

Authentication Methods:
No Auth: Access an endpoint without any authentication.
Basic Auth: Access an endpoint using a username and password.
API Key Auth: Access an endpoint using an API key.
Bearer Token Auth: Access an endpoint using a bearer token.

Prerequisites
Node.js (v12+)
npm (Node package manager)

Installation
Clone the repository:
bash:
git clone https://github.com/yourusername/api-authentication-app.git
cd api-authentication-app

Install dependencies:
bash: 
npm install

Configure authentication details:
Open the main JavaScript file and replace the placeholder variables (yourUsername, yourPassword, yourAPIKey, yourBearerToken) with your actual authentication credentials.

Start the server:
bash: 
node index.js

Access the app:
Open your web browser and go to http://localhost:3000.
Use the available buttons to test each authentication method.

File Structure
index.js: Main server file, sets up routes and handles authentication logic.
views/index.ejs: EJS template to display the API response.
package.json: Project metadata and dependencies.

Dependencies
Express: Web framework for Node.js
EJS: Templating engine for rendering HTML
Axios: Promise-based HTTP client for making API requests
Example API Routes
No Auth: GET /noAuth
Basic Auth: GET /basicAuth
API Key: GET /apiKey
Bearer Token: GET /bearerToken

License
This project is licensed under the ISC License.
