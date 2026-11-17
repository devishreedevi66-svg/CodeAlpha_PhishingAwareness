
// 10 PHISHING AWARENESS QUESTIONS

const questions = [

{
    question: "1. What is phishing?",
    options: [
        "A type of cyberattack",
        "A computer game",
        "A programming language",
        "A hardware device"
    ],
    answer: 0,
    explanation: "Phishing is a cyberattack used to trick people into revealing sensitive information."
},

{
    question: "2. What should you do when you receive a suspicious email?",
    options: [
        "Click the link",
        "Share your OTP",
        "Verify the sender",
        "Download all attachments"
    ],
    answer: 2,
    explanation: "Always verify the sender before responding to an email."
},

{
    question: "3. What is Smishing?",
    options: [
        "Email phishing",
        "SMS-based phishing",
        "Website development",
        "Computer programming"
    ],
    answer: 1,
    explanation: "Smishing is phishing conducted through SMS messages."
},

{
    question: "4. Should you share your OTP with anyone?",
    options: [
        "Yes",
        "Sometimes",
        "Never",
        "Only with strangers"
    ],
    answer: 2,
    explanation: "Never share your OTP with anyone."
},

{
    question: "5. Which is a common warning sign of phishing?",
    options: [
        "Urgent suspicious messages",
        "Regular software updates",
        "Known contacts",
        "Official notifications"
    ],
    answer: 0,
    explanation: "Attackers often create urgency to make victims act without thinking."
},

{
    question: "6. What is Vishing?",
    options: [
        "Video editing",
        "Voice-based phishing",
        "Website security",
        "Data backup"
    ],
    answer: 1,
    explanation: "Vishing uses phone calls or voice communication to deceive victims."
},

{
    question: "7. Does HTTPS guarantee that a website is genuine?",
    options: [
        "Yes, always",
        "No",
        "Only on mobile",
        "Only for banking websites"
    ],
    answer: 1,
    explanation: "HTTPS encrypts communication but does not guarantee that a website is genuine."
},

{
    question: "8. What should you do if you receive an unexpected prize message?",
    options: [
        "Click immediately",
        "Share personal details",
        "Verify the offer independently",
        "Forward it to everyone"
    ],
    answer: 2,
    explanation: "Always verify unexpected prize offers through official sources."
},

{
    question: "9. What is Spear Phishing?",
    options: [
        "Random advertising",
        "A targeted phishing attack",
        "An antivirus program",
        "A backup system"
    ],
    answer: 1,
    explanation: "Spear phishing targets specific individuals or organizations."
},

{
    question: "10. What is the best way to protect online accounts?",
    options: [
        "Use the same password everywhere",
        "Share passwords",
        "Use strong passwords and two-factor authentication",
        "Disable security updates"
    ],
    answer: 2,
    explanation: "Strong unique passwords and two-factor authentication improve account security."
}

];

// QUIZ VARIABLES

let currentQuestion = 0;
let score = 0;
let answered = false;


// LOAD QUESTION

function loadQuestion() {

    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("question").textContent =
        q.question;

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) + " / 10";

    document.getElementById("scoreDisplay").textContent =
        "Score: " + score;

    document.getElementById("options").innerHTML = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className = "";

    document.getElementById("progress").textContent =
        "Choose the correct answer.";

    document.getElementById("nextBtn").style.display = "none";

    // DISPLAY FOUR OPTIONS

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        button.onclick = function() {
            checkAnswer(index);
        };

        document.getElementById("options").appendChild(button);

    });

}


// CHECK ANSWER

function checkAnswer(selected) {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll(".option");

    // DISABLE OPTIONS

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
        }

        if (index === selected && selected !== q.answer) {
            button.classList.add("wrong");
        }

    });

    const feedback = document.getElementById("feedback");

    // CORRECT OR WRONG ANSWER

    if (selected === q.answer) {

        score++;

        feedback.className = "feedback-correct";

        feedback.innerHTML =
            "<b>✅ Correct Answer!</b><br>" +
            q.explanation;

    } else {

        feedback.className = "feedback-wrong";

        feedback.innerHTML =
            "<b>❌ Wrong Answer!</b><br>" +
            "<b>Correct Answer:</b> " +
            q.options[q.answer] +
            "<br>" +
            q.explanation;

    }

    // UPDATE SCORE

    document.getElementById("scoreDisplay").textContent =
        "Score: " + score;

    document.getElementById("progress").textContent =
        "Answer submitted successfully.";

    // NEXT BUTTON

    const nextBtn = document.getElementById("nextBtn");

    nextBtn.style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent = "View Final Score";

    } else {

        nextBtn.textContent = "Next Question";

    }

}


// NEXT QUESTION

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

}


// SHOW FINAL RESULT

function showResult() {

    document.getElementById("quizContent").style.display = "none";

    document.getElementById("resultBox").style.display = "block";

    const percentage = (score / questions.length) * 100;

    document.getElementById("finalScore").textContent =
        score + " / " + questions.length;

    document.getElementById("percentage").textContent =
        "Your Percentage: " + percentage + "%";

    let message;

    if (score >= 8) {

        message =
            "🏆 Excellent! You have excellent phishing awareness.";

    } else if (score >= 5) {

        message =
            "👍 Good job! Keep improving your cybersecurity knowledge.";

    } else {

        message =
            "📚 Keep learning! Improve your cybersecurity awareness.";

    }

    document.getElementById("resultMessage").textContent =
        message;

}


// RESTART QUIZ

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("resultBox").style.display = "none";

    document.getElementById("quizContent").style.display = "block";

    loadQuestion();

}


// START QUIZ

loadQuestion();
