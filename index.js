const express = require("express");
const cors = require("cors");
const app = express();
const configRoutes = require("./routes");
const port = process.env.PORT || 3001;
const morgan = require('morgan')
const corsOptions = {
  // all network requests allowed from the frontend URL only
  origin: process.env.CORS_URL,
};

app.use(morgan('combined'))
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true}));

configRoutes(app);

app.listen(port);