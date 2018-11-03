let friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    console.log("req.body.scores", req.body);

    let scoresArr = [];
    let bestfriendIndex = 0;

    friendData.forEach(function(friend) {
      let scoreDifference = 0;
      for (let i = 0; i < friendData.length; i++) {
        scoreDifference += Math.abs(
          parseInt(friend.scores[i]) - parseInt(req.body.scores[i])
        );
      }

      scoresArr.push(scoreDifference);
    });

    for (let i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestfriendIndex]) bestfriendIndex = i;
    }

    let newBestfriend = friendData[bestfriendIndex];
    console.log("scoresdifference", scoresArr);

    friendData.push(req.body);
    res.json(newBestfriend);
  });
};
