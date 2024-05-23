const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, "../client/dist")));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
