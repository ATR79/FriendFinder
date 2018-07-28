//link to friends.js data
var friendData = require("../data/friends");

//routing
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Don't get confused here --> my tutor definitely helped me with this algorithm
  app.post("/api/friends", function(req, res) {
    //Compare those results against every user in the database.
    //Calculate the difference between each of the numbers and the user's numbers.
    //Choose the user with the least differences as the "best friend match."
    //Choose the first match.
    //Push the user to the database.

    //Hold the "best match" and loop through all of the options
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    //Take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    //Calculate the difference between the user"s scores and the scores of each user in the database
    var totalDifference;

    //Loop through all the friend possibilities in the database.
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //Loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        //Calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      //If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        //Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    //Save the user's data to the database (this has to happen AFTER the check. otherwise, 
    //the database will always return that the user is the user's best friend).
    friends.push(userData);

    //Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);
  });
};
