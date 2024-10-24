# censys-takehome
## Project Scope
- Integrate with the Censys REST API @ /api/v2/hosts/search
- Swagger Documentation: https://search.censys.io/api#/hosts/searchHosts
- Develop a basic search bar
- Render search results in a list and display IP address and # of protocols associated with each result
- Enable pagination

## Manual Testing
To run the application follow these steps:
1. Clone repository
2. Create a .env file
```
Create a field called VITE_API_ID and insert Censys API_ID
Create a field called VITE_API_SECRET_KEY and insert Censys Secret key

Content of .env:
VITE_API_ID=<Your Censys API Id>
VITE_API_SECRET_KEY=<Your Censys Secret Key>
```
3. Install packages via npm i
4. Run the application via npm run dev

Testing Steps:
1. Page will initiate with a search with an empty query (return all results)
2. You can scroll this page and navigate between next and prev from here
3. Run a search by typing into the search bar at the top of the application, pressing enter or clicking the submit button will submit your query
4. Note that page will load the search results

Notes on pagination:
- As pagination is defined by availability of next and prev cursors from search results, pagination button should only be enabled when those cursors are available from the API
