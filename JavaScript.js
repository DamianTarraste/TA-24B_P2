const questions = [
    {
      question: "What does css?",
      options: ["main structure", "scripts", "style"],
      correct: "style"
    },
    {
      question: "Which command we use to get data from url?",
      options: ["for", "fetch", "src"],
      correct: "fetch"
    },
    {
        question: "Which command we use to read smth? Example to read list.",
        options: ["for", "else", "return"],
        correct: "for"
    },
    {
        question: "What is boolean?",
        options: ["JavaScript", "True/False", "Command"],
        correct: "True/False"
    },
    {
        question: "What is str data?",
        options: ["text", "text+numbers", "Lie"],
        correct: "text"
    },
    {
        question: "What the difference between () and []?",
        options: ["str/bool", "True/False", "Method/Array"],
        correct: "Method/Array"
    },
    {
        question: "Which symbols we use to make text from variable?",
        options: ["Quotes", "Parentheses", "Comma"],
        correct: "Quotes"
    },
    {
        question: "When HTML first version was written?",
        options: ["1993", "1999", "1992"],
        correct: "1993"
    },
    {
        question: "What does const mean?",
        options: ["Create lists and read them", "Defines a variable or pointer as unchangeable", "Turn on JavaScripts and CSS stylesheets"],
        correct: "Defines a variable or pointer as unchangeable"
    },
    {
        question: "What does html?",
        options: ["style", "scripts", "main_structure"],
        correct: "Mars"
    },
    

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option-btn");
  
    // question text
    questionElement.textContent = questions[currentQuestionIndex].question;
  
    // answers text
    optionButtons.forEach((button, index) => {
      button.value = questions[currentQuestionIndex].options[index];
      button.onclick = () => checkAnswer(button.value);
    });
  }
  
  // Check answer
  function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      score++;
      document.getElementById("score").textContent = `Score: ${score}`;
    }
    // next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  // End
  function endQuiz() {
    document.querySelector(".quiz-container").innerHTML = `<h2>Your Score: ${score} + </h2>`;
  }
  
  // count of questions check
  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  });
  
  // Load first question
  loadQuestion();