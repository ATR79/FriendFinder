var path = require("path");


module.exports = function (app) {

    //if someone asks for survey - run this function
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/assets/style.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/style.css"));
    });

    app.get("/assets/images/background.jpg", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/images/background.jpg"));
    });

    // //default to home.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};