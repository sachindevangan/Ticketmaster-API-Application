
---

# Ticketmaster API Application

## Description
A dynamic web application utilizing the Ticketmaster API to search and display venue information. This project demonstrates templated rendering with Handlebars, a custom CSS design, and asynchronous API handling through Axios. It provides a user-friendly interface for finding venues across the US with search filtering.

## Features
- **Venue Search**: Main page provides a search form for querying venues by name.
- **Search Results**: Returns up to 10 venue matches, displaying names and links to detailed venue information.
- **Venue Details**: Each venue has a dedicated page showing full details including name, address, phone number, and a photo if available.
- **Error Handling**: Displays appropriate messages for invalid searches or missing venue data.

## Tech Stack
- HTML, CSS
- JavaScript
- Handlebars
- Axios

## Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/sachindevangan/Ticketmaster-API-Application
   ```
2. Navigate to the project directory.

3. Install the dependencies.
   ```bash
   npm install
   ```
4. Add your Ticketmaster API key to the project (e.g., in an `.env` file).
5. Start the server.
   ```bash
   npm start
   ```

## Usage
- Open the application at `http://localhost:3000/`.
- Use the search form to find venues by name.
- View detailed information by clicking on a specific venue result.

