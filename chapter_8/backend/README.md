# Design and Build a React Admin Dashboard and Template
## Chapter 8
### Backend

To run the backend locally, you will need to:

1. Clone this repository to your local machine.

2. Follow the MongoDB documentation to create and deploy a free cluster: https://www.mongodb.com/docs/atlas/getting-started/. When you do this yourself, you are recommended to follow the steps listed under the tab named Atlas UI.

3. Copy the connection string into the .env file of the backend. The connection string can be retrieve by clicking Connect >>> Connect your application buttons on the database panel of MongoDB Atlas. Make sure to replace the <username> and <password> with your own username and password for accessing your newly created cluster.

4. Open your terminal, navigate into this folder, and run `npm install`. After all dependencies are installed, run `npm run server`.