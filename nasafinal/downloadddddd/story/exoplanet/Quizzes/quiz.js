//Question bank
var questionBank= [ 
    {
        question : 'Exoplanets fall into how many broad categories?',
        option : ['2','4','3','5'],
        answer : '4'
    },
    {
        question : 'A gas giant is a large planet mostly composed of ________',
        option : ['Helium','Hydrogen','Both','Oxygen'],
        answer : 'Both'
    },
    {
        question: 'Which is the first Exoplanet discovered?',
        option : ['51 Pegasi b','KELT-9 b','Jupiter','HIP 67522 b'],
        answer : '51 Pegasi b'
    },
    {
        question : 'Which is called "ultra-hot Jupiter", and is the hottest known Exoplanet?',
        option : ['51 Pegasi b','Sun','KELT-9b','Saturn'],
        answer : 'KELT-9b'
    },
    {
        question : 'Which Exoplanet is about the same age as our Sun?',
        option : ['51 Pegasi b','KELT-9b','Jupiter','HIP 11915'],
        answer : 'HIP 11915'
    },
    {
        question : 'Which Exoplanet is also called as Dimidium?',
        option : ['51 Pegasi b','KELT-9b','Jupiter','HIP 11915'],
        answer : '51 Pegasi b'
    },
    {
        question : 'What is the surface temperature of Dimidium?',
        option : ['1000-1800 celcius','538-982 celcius','500-1000 celcius','100-500 celcius'],
        answer : '538-982 celcius'
    },
    {
        question : 'Whichplanet is the youngest known hot Jupiter?',
        option : ['51 Pegasi b','KELT-9b','Jupiter','HIP 67522b'],
        answer : 'HIP 67522b'
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