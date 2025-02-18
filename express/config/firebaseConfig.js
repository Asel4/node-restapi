const admin = require("firebase-admin"); // Import Firebase Admin SDK
require('dotenv').config();  // Load environment variables from .env file

// Initialize Firebase Admin SDK with credentials from environment variables
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const db = admin.firestore(); // Initialize Firestore database instance
module.exports = db; //export
