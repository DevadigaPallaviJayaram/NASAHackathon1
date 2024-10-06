//Question bank
var questionBank= [ 
    {
        question : 'Which of the following are Terrestrial Exoplanets?',
        option : ['OGLE-2013-BLG-0341b','Trappist-1','Kepler-11 b','All'],
        answer : 'All'
    },
    {
        question : 'Which planet orbits a binary star system which is 3000 light-years away in the direction of Saggitarius Constellation?',
        option : ['OGLE-2013-BLG-0341b','Trappist-1','Kepler-11 b','None of the above'],
        answer : 'OGLE-2013-BLG-0341b'
    },
    {
        question: 'Which is one of the crowned jewels of recent exoplanet discoveries?',
        option : ['OGLE-2013-BLG-0341b','Trappist-1','Kepler-11 b','None of the above'],
        answer : 'Trappist-1'
    },
    {
        question : 'Trappist is found in which constellation?',
        option : ['Aquarius','Capricorn','Aries','Saggitarius'],
        answer : 'Aquarius'
    },
    {
        question : 'Which Terrestrial Exoplanet has a denser iron core and possibly liquid water?',
        option : ['Trappist-1e','Trappist-1b','Trappist-1f','Trappist-1g'],
        answer : 'Trappist-1e'
    },
    {
        question : 'Which system was the first to show us that multiple planets could form and exist in close orbits around a single star?',
        option : ['Keppler-11','Kepler-11b','Trappist-1f','Trappist-1g'],
        answer : 'Kepler-11'
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