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

-----------------------------------------------------------------------------------------------------------------------------------------------

CREDENTIAL CREATION AND TESTING:

Use Postman to create your requests and register your credentials. API DOCS: https://secrets-api.appbrewery.com/
Here's a detailed guide on how to get and register your credentials, testing and ultimately use the app by accessing http://localhost:3000/:

->Basic Authentication Steps

Register a New User or Re-Register (if credentials expire):

In Postman, create a new POST request:
URL: https://secrets-api.appbrewery.com/register
Go to the Body tab and select x-www-form-urlencoded.
Add two fields: username and password, setting each with your desired credentials.
Send the Request: Click Send to register. You should see a successful registration message if it worked.
Test Basic Authentication Credentials:

Create a new GET request in Postman:
URL: https://secrets-api.appbrewery.com/all?page=1
Go to the Authorization tab and select Basic Auth.
Enter your registered username and password.
Set x-www-form-urlencoded in the Body Tab: Even though this is a GET request, set x-www-form-urlencoded in the Body tab.
Send the Request: Click Send. If successful, you should see a 200 OK status code.




->Steps to Obtain and Use an API Key

Generate an API Key:

Visit the Secrets API website and register or log in to your account.
You may need to provide your card details and complete any required sign-up steps.
Once logged in, locate the endpoint to generate an API key. Follow the instructions to create your access key. This key will allow access to endpoints requiring API authentication.

Use the API Key for Authorized Requests:

In Postman, create a new GET request:
URL: https://secrets-api.appbrewery.com/filter
Set Query Parameters:
Go to the Params tab in Postman.
Add a new query parameter with:
Key: score
Value: 7 (or any desired minimum score to filter results).

Provide API Key:
Some APIs require the API key in the Header or Query Parameters. For the Secrets API, use Query Parameters.
Add a new parameter in the Params tab:
Key: apiKey (capital "K" as specified in the API documentation)
Value: your API key.

Send the Request:
Click Send to make the request. If successful, you’ll receive a filtered list of secrets based on the specified score parameter.




->Steps to Obtain and Use a Bearer Token
Obtain the Bearer Token:

In Postman, create a new POST request.
URL: https://secrets-api.appbrewery.com/get-auth-token
Set Body Parameters:
Go to the Body tab.
Select x-www-form-urlencoded.
Add the following parameters:
Key: username (use the username you registered with).
Key: password (use the password you created during registration).
Send the Request:
Click Send to request the token.
You’ll receive a token in the response. If this is your first time, a new token will be generated; otherwise, you’ll receive the same token issued earlier.

Use the Bearer Token for Authorized Requests:

In Postman, create a new GET request.
URL: https://secrets-api.appbrewery.com/secrets/2 (replace 2 with the desired secret ID if needed).
Set Authorization:
Go to the Authorization tab.
Select Bearer Token from the dropdown.
Paste the token received from the previous step.
Send the Request:
Click Send to make the request. If successful, you’ll receive the secret data associated with the specified ID.

Note: In the headers, Postman will automatically add the Authorization header in the format Bearer {your_token}. If making this request in code, ensure that the Authorization header is set to Bearer {token}.
