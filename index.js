const express = require("express");
const cors = require("cors");
const app = express();
const configRoutes = require("./routes");
const port = process.env.PORT || 3001;

const corsOptions = {
  // all network requests allowed from the frontend URL only
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

configRoutes(app);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});