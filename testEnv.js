import dotenv from "dotenv";

dotenv.config();

console.log("Username:", process.env.USERNAME);
console.log("Password:", process.env.PASSWORD);
console.log("API Key:", process.env.API_KEY);
console.log("Bearer Token:", process.env.BEARER_TOKEN);
