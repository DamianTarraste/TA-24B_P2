const questions = [
    {
      question: "In css we make?",
      options: ["main structure", "scripts", "style"],
      correct: "style"
    },
    {
      question: "Which command we use to get data from url?",
      options: ["for", "fetch", "src"],
      correct: "fetch"
    },
    {
        question: "Which command sets or returns the value of the for attribute of a label",
        options: ["for", "else", "return"],
        correct: "for"
    },
    {
        question: "which value can boolean have?",
        options: ["JavaScript", "True/False", "Command"],
        correct: "True/False"
    },
    {
        question: "What is string data?",
        options: ["text data", "text+numbers data", "False data"],
        correct: "text data"
    },
    {
        question: "What the difference between ( ) and [ ] in js?",
        options: ["str/bool", "True/False", "Method/Array"],
        correct: "Method/Array"
    },
    {
        question: "Which symbols we use to make text from any value?",
        options: ["Quotes", "Parentheses", "Comma"],
        correct: "Quotes"
    },
    {
        question: "When HTML first version was written?",
        options: ["1992", "1999", "1993"],
        correct: "1993"
    },
    {
        question: "What does const do?",
        options: ["Create lists and read them", "Defines a variable or pointer as unchangeable", "Turn on JavaScripts and CSS stylesheets"],
        correct: "Defines a variable or pointer as unchangeable"
    },
    {
        question: "In html we make?",
        options: ["style", "scripts", "main structure"],
        correct: "main structure"
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
      score=score+1;
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
    document.querySelector(".quiz-container").innerHTML = `<h2>Your Score: ${score}/10 </h2>`;
  }
  
  // count of questions check
  
  // Load first question
  loadQuestion();