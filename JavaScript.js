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
        question: "That we use to read list?",
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
    {
      question: "Which language is most used at that moment(2024)?",
      options: ["JavaScript", "Html/Css", "Python"],
      correct: "JavaScript"
    },
    {
      question: "What is event in js?",
      options: ["Value define", "Cycle reader", "Signal of some action"],
      correct: "Signal of some action"
    },
    {
      question: "In js we make?",
      options: ["style", "scripts", "main structure"],
      correct: "scripts"
    },
    {
      question: "Who is our teacher?",
      options: ["Leinu Lepp", "Krister", "Elon Mask"],
      correct: "Krister"
    },
    {
      question: "Who is Damian?",
      options: ["Reptile", "Human", "Noob"],
      correct: "Reptile"
    },
    

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option-btn");
  
    // question text change
    questionElement.textContent = questions[currentQuestionIndex].question;
  
    // answers options text
    optionButtons.forEach((button, index) => {
      button.value = questions[currentQuestionIndex].options[index];
      button.onclick = () => checkAnswer(button.value);
    });
  }
  
  // Check answer
  function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      score=score+1;
      document.getElementById("score").style.backgroundColor = "lightgreen"
      document.getElementById("score").textContent = `Score: ${score}`;
    }
    else {
      document.getElementById("score").style.backgroundColor = "tomato"
    }
    // next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  const url = "https://kool.krister.ee/chat/WebCode_Quiz";


  // End
  function endQuiz() {
    document.querySelector(".quiz-container").innerHTML = `<h2>Your Score: ${score}/${questions.length} </h2>`;
    const scores = score
    const questionslenghts = questions.length
    body: JSON.stringify({
      score: scores + "/" + questionslenghts,
      name: username
    })
  }
  
  
  // Load first question
  const username = prompt("what's your name?")
  loadQuestion();



  // Use that to create new  
  // {
  //   question: "(Question)",
  //   options: ["(Answer1)", "(Answer2)", "(Answer3)"],
  //   correct: "(Correct Answer option)"
  // },