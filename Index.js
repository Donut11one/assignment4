// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// Serve static files
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

// Route for the homepage
app.get("/", function (req, res) {
    // Read and send the HTML document
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});

// Handle 404 errors
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + "/public/404.html");
});

// RUN SERVER
const port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
