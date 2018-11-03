Survey.StylesManager.applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
  title: "Friend Finder Survey",
  pages: [
    {
      title: "Pineapple has no place on a Pizza",
      questions: [
        {
          type: "radiogroup",
          name: "q1",
          title: "Question 1",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title:
        "I believe two consenting adults should have the legal right to challenge each other to a duel, if they are so inclined, with no legal consequences for the winner.",
      questions: [
        {
          type: "radiogroup",
          name: "q2",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "OJ simpson did it",
      questions: [
        {
          type: "radiogroup",
          name: "q3",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Jack could have totally fit on the door with Rose",
      questions: [
        {
          type: "radiogroup",
          name: "q4",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Aliens Exists",
      questions: [
        {
          type: "radiogroup",
          name: "q5",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Dogs make better pets that cats",
      questions: [
        {
          type: "radiogroup",
          name: "q6",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Could Mike Tyson, in his prime, knock out a restrained tiger?",
      questions: [
        {
          type: "radiogroup",
          name: "q7",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Is a hot dog a sandwich?",
      questions: [
        {
          type: "radiogroup",
          name: "q8",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Are we living in a simulation?",
      questions: [
        {
          type: "radiogroup",
          name: "q9",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Crunchy peanut butter is better that smooth peanut butter",
      questions: [
        {
          type: "radiogroup",
          name: "q10",
          title: "Please select from the list",
          colCount: 5,
          isRequired: true,
          choices: [
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ],
          renderAs: "prettycheckbox"
        }
      ]
    },
    {
      title: "Please enter your name and a link to your photo!",
      questions: [
        {
          type: "text",
          name: "name",
          title: "Name:"
        },
        {
          type: "text",
          name: "photo",
          title: "Image link"
        }
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  //result.data is the results object
  console.log(result.data);
  let scores = [
    result.data.q1,
    result.data.q2,
    result.data.q3,
    result.data.q4,
    result.data.q5,
    result.data.q6,
    result.data.q7,
    result.data.q8,
    result.data.q9,
    result.data.q10
  ];

  let userData = {
    name: result.data.name,
    photo: result.data.photo,
    scores: scores
  };

  $.post("/api/friends", userData, function(data) {
    console.log("data", data);

    $(".bffname").text(data.name);
    $(".bffphoto").attr("src", data.photo);
    $(".hiddenBtn").removeClass("hide");
  });
});

survey.showProgressBar = "bottom";
survey.completedHtml = "Thank you for completing the survey! Click to meet your new Bestfriend"

$("#surveyElement").Survey({ model: survey });

$(".name").click(function() {
  window.location.href = "localhost";
});
