module.exports = function (app) {

    //if someone asks for survey - run this function
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //default to home.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};