//Question bank
var questionBank= [ 
    {
        question : 'Neptunian planets are of the same size as _________?',
        option : ['Neptune or Uranus','Jupiter or Saturn','Mercury or Venus','Earth or Mars'],
        answer : 'Neptune or Uranus'
    },
    {
        question : 'What is teh composition of the core of the Neptunian Planets?',
        option : ['rock and minerals','minerals and non-metals','rock and heavier metals','none of the above'],
        answer : 'rock and heavier metals'
    },
    {
        question: 'Which is the region close to stars where we should find Neptunian Planets?',
        option : ['cold Neptune desert','hot Neptune desert','hot Jupiter desert','hot Saturn desert'],
        answer : 'hot Neptune desert'
    },
    {
        question : 'When the planet passes in front of its star, what filters some of the starlight?',
        option : ['hydrogen cloud','helium cloud','lithium cloud','sulphur cloud'],
        answer : 'hydrogen cloud'
    },
    {
        question : 'GJ 3470b has already lost up to how much of its atmosphere?',
        option : ['35%','20%','99%','85%'],
        answer : '35%'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();