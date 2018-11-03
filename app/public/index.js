Survey.StylesManager.applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
  title: "Friend Finder Survey",
  pages: [
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
    },
    {
      title: "What operating system do you use?",
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
      title: "q1",
      questions: [
        {
          type: "radiogroup",
          name: "q2",
          title: "Plese select from the list",
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
      title: "q2",
      questions: [
        {
          type: "radiogroup",
          name: "q3",
          title: "Plese select from the list",
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
      title: "q3",
      questions: [
        {
          type: "radiogroup",
          name: "q4",
          title: "Plese select from the list",
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
      title: "What language(s) are you currently using?",
      questions: [
        {
          type: "radiogroup",
          name: "q5",
          title: "Plese select from the list",
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
      title: "What language(s) are you currently using?",
      questions: [
        {
          type: "radiogroup",
          name: "q6",
          title: "Plese select from the list",
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
      title: "What language(s) are you currently using?",
      questions: [
        {
          type: "radiogroup",
          name: "q7",
          title: "Plese select from the list",
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
      title: "What language(s) are you currently using?",
      questions: [
        {
          type: "radiogroup",
          name: "q8",
          title: "Plese select from the list",
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
      title: "What language(s) are you currently using?",
      questions: [
        {
          type: "radiogroup",
          name: "q9",
          title: "Plese select from the list",
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
      title: "What language(s) are you currently using?",
      questions: [
        {
          type: "radiogroup",
          name: "q10",
          title: "Plese select from the list",
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
    }
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  //result.data is the results object
  console.log(result.data);
  let scores = [
    (result.data.q1),
    (result.data.q2),
    (result.data.q3),
    (result.data.q4),
    (result.data.q5),
    (result.data.q6),
    (result.data.q7),
    (result.data.q8),
    (result.data.q9),
    (result.data.q10)
  ];
  
  let userData = {
    name: result.data.name,
    photo: result.data.photo,
    scores: scores,
  };

  $.post("/api/friends", userData);
});

survey.showProgressBar = "bottom";

$("#surveyElement").Survey({ model: survey });

$(".name").click(function() {
  window.location.href = "localhost";
});
