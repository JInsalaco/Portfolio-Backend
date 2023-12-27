const admin = require('../firebase/config');
const { getAuth } = require('firebase-admin/auth');

const checkIfAuthenticated = (req, res, next) => {
      const authToken = req.headers.authorization;
      getAuth().verifyIdToken(authToken).then((decodedToken) => 
        console.log(decodedToken))
      .catch(() => {
        return res
        .status(500)
        .send({ error: 'Unauthorized' });
      });
      return next();
};

module.exports = { checkIfAuthenticated }