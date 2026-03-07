const questions = [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyperlinks Text Management Language"
],
answer:0
},

{
question:"Which language is used for styling?",
options:["HTML","CSS","Java","Python"],
answer:1
},

{
question:"Which language runs in browser?",
options:["Java","C","JavaScript","Python"],
answer:2
},

{
question:"Who developed JavaScript?",
options:["Google","Microsoft","Netscape","Apple"],
answer:2
},

{
question:"Which tag creates hyperlink?",
options:["<link>","<a>","<href>","<url>"],
answer:1
}

];

function shuffleQuestions(array){

for(let i = array.length - 1; i > 0; i--){

let j = Math.floor(Math.random() * (i + 1));

[array[i], array[j]] = [array[j], array[i]];

}

}

let currentQuestion = 0;
let score = 0;
let selected = null;

let timer;
let timeLeft = 60;

const startBtn = document.getElementById("startBtn");
const quizBox = document.getElementById("quizBox");
const startScreen = document.getElementById("startScreen");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");
const resultBox = document.getElementById("resultBox");

const darkBtn = document.getElementById("darkBtn");

startBtn.onclick = () => {

shuffleQuestions(questions);

startScreen.style.display="none";
quizBox.style.display="block";

startTimer();
loadQuestion();

};

function loadQuestion(){

selected = null;

const q = questions[currentQuestion];

progress.innerText =
"Question " + (currentQuestion+1) + " / " + questions.length;

let progressPercent =
(currentQuestion/questions.length)*100;

document.getElementById("progressFill").style.width =
progressPercent + "%";

questionEl.innerText = q.question;

optionsEl.innerHTML="";

q.options.forEach((option,index)=>{

const div = document.createElement("div");
div.classList.add("option");
div.innerText = option;

div.onclick = ()=>{

selected = index;

document.querySelectorAll(".option")
.forEach(o => o.classList.remove("correct","wrong"));

if(index === q.answer){
div.classList.add("correct");
}
else{
div.classList.add("wrong");
}

};

optionsEl.appendChild(div);

});

}

function startTimer(){

clearInterval(timer);

timer = setInterval(()=>{

timeLeft--;

document.getElementById("timer").innerText = timeLeft;

if(timeLeft <= 0){

clearInterval(timer);
showResult();

}

},1000);

}

nextBtn.onclick = ()=>{

if(selected === null){
alert("Please select an option");
return;
}

if(selected === questions[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}
else{
clearInterval(timer);
showResult();
}

};

function showResult(){

quizBox.style.display="none";

let percentage = (score/questions.length)*100;

let highScore = localStorage.getItem("highScore");

if(highScore === null || score > highScore){
localStorage.setItem("highScore", score);
highScore = score;
}

resultBox.innerHTML =
"<h2>Your Score: "+score+" / "+questions.length+"</h2>"+
"<h3>"+percentage+"%</h3>"+
"<p>High Score: "+highScore+"</p>"+
"<button onclick='location.reload()'>Restart Quiz</button>";

}

if(darkBtn){

darkBtn.onclick = ()=>{

document.body.classList.toggle("dark-mode");

};

}