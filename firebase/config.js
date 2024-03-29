const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDS);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

module.exports = {admin}