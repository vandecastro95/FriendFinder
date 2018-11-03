let friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    console.log("req.body.scores", req.body);
    friendData.push(req.body);
    let scoresArr = [];
    let bestfriendIndex = 0;

    friendData.forEach(function(friend) {
      if (friend.name !== req.body.name) {
        return;

        let scoreDifference = 0;
        for (let i = 0; i < friendData.length - 1; i++) {
          scoreDifference += Math.abs(
            parseInt(friend.scores[i]) - parseInt(req.body.scores[i])
          );
        }

        scoresArr.push(scoreDifference);
      }
    });

    for (let i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestfriendIndex]) bestfriendIndex = i;
    }

    let newBestfriend = friendData[bestfriendIndex];
    console.log("scoresdifference", scoresArr);
    let bffHtml = `<h1> Say hello to your new Best Friend </h1> 
    
    <h1> ${newBestfriend.name} </h1> 
    
    <img src="${newBestfriend.photo}" alt="Smiley face" height="42" width="42">`;

    res.json(newBestfriend);
  });
};
