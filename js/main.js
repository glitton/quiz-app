// JavaScript for GS Warriors quiz app

$(document).ready(function(){
// Start quiz
// generate five random numbers which correspond to five questions
// Choose the five questions based on its index and display them
// Render answers via radio buttons
// Count how many users got the correct and wrong ones 
// Show results including right answers when user clicks results button
// Allow user to play again 
// rinse and repeat   

// Event listener triggered when start quiz button is clicked
document.getElementById("start-quiz").addEventListener("click", startQuiz);

// question and answer array of objects 
// from https://www.jetpunk.com/user-quizzes/23532/golden-state-warriors-trivia
var questions = [
  { 
    question : " Who are the two leading three-point shooter in Warriors history?",
    answers  : ["Steph Curry, Monta Ellis",  "Steph Curry, Klay Thompson",          "Chris Mullin, Mitch Richmond", "Steph Curry, Kevin Durant"],
    correct  : "Steph Curry, Klay Thompson",
    image: "url"
  },
  { 
    question : " What are Steph Curry and Klay Thompson known as?",
    answers  : [" The Terrible Two", " The Millenials", 
                " Brothers in Arms", " The Splash Brothers"],
    correct  : " The Splash Brothers",
    image: "url"
  },
  { 
    question : "What player left Oklahoma City to start his 'next chapter' with Golden State?",
    answers  :  [" Andre Iguodala", " Kevin Durant", " Rick Barry", " Rod Strickland"],
    correct  : " Kevin Durant",
    image: "url"
  },
  { 
    question : "What current Warriors player has 19 career triple-doubles?",
    answers  : [" Draymond Green", " Shaun Livingston", " Klay Thompson", " Kevin Durant"],
    correct  : " Draymond Green",
    image: "url"
  },
  { 
    question : "What city did the Warriors play in from 1946-1962?",
    answers  : [" San Francisco", " New York", " Philadelphia", " Oakland"],
    correct  : " Philadelphia",
    image: "url"
  },
  {  
    question : "What is the name of the Warriors' arena?",
    answers  : [" Dub Nation", " At&T Park", " Oracle Arena", " HP Pavilion"],
    correct  :  " Oracle Arena",
    image: "url"
  },
  {  
    question : "What city is that arena located in?",
    answers  : [" San Francisco", " San Jose", " Oakland", " Silicon Valley"],
    correct  : " Oakland",
    image: "url"
  },
  { 
    question : "Who is the current coach of the Warriors (as of 2017)?",
    answers  : [" Steve Kerr", " Mike Brown", " Don Nelson", " P.J. Carlisimo"],
    correct  : " Steve Kerr",
    image: "url"
  },  
  { 
    question : "Who filled in as interim coach during the 2015-16 season?",
    answers  : [" Mike Brown", " Luke Walton", " Don Nelson", " Eric Musselman"],
    correct  : " Luke Walton",
    image: "url"
  },
  { 
    question : "Who filled in as interim coach during the 2016-17 season?",
    answers  : [" Mike Brown", " Luke Walton", " Don Nelson", " Gary St. Jean"],
    correct  : " Mike Brown",
    image: "url"
  },  
  {  
    question : "Who has the most points in Warriors history?",
    answers  : [" Chris Mullin", " Rick Barry", " Wilt Chamberlain", " Steph Curry"],
    correct  : " Wilt Chamberlain",
    image: "url"
  },
  {  
    question : "Who was named NBA Finals MVP in 1975?",
    answers  : [" K.C. Jones", " Rick Barry", " Wilt Chamberlain", " Bob McAdoo"],
    correct  : " Rick Barry",
    image: "url"
  },
  {  
    question : "Who was named NBA Finals MVP in 2015?",
    answers  : [" Andre Iguodala", " Steph Curry", " LeBron James", " Kevin Durant"],
    correct  : " Andre Iguodala",
    image: "url"
  },
  {
    question : "How many games did the Warriors win in 2015-16?",
    answers  : [" 68", " 72", " 73", " 55"],
    correct  : " 73",
    image: "url"
  }, 
  {  
    question : "What player choked coach P. J. Carlesimo during a 1997 practice?",
    answers  : [" Mitch Richmond", " Latrell Sprewell", " Monta Ellis", " Chris Mullin"],
    correct  : " Latrell Sprewell",
    image: "url"
  },
  { 
    question : "What 1990s point guard was famous for his crossover?",
    answers  : [" Mitch Richmond", " Speedy Claxton", " Tim Hardaway", " Bimbo Coles"],
    correct  : " Tim Hardaway",
    image: "url"
  },       
  {  
    question : "What Warriors star won the NBA dunk contest in 2002 and 2003?",
    answers  : [" Eric Dampier", " Popeye Jones", " Jason Richardson", " Adonal Foyle"],
    correct  : " Jason Richardson",
    image: "url"
  },
  { 
    question : "Who wasn't on the 'We Believe' team?",
    answers  : [" Baron Davis", " Popeye Jones", " Jason Richardson", " Monta Ellis"],
    correct  : " Popeye Jones",
    image: "url"
  },
  { 
    question : "Which team did the Warriors play in the NBA finals for three years in a row?",
    answers  : [" Boston Celtics", " LA Lakers", " Cleveland Cavaliers", " San Antonio Spurs"],
    correct  : " Cleveland Cavaliers",
    image: "url"
  },
  { 
    question : "Which team did the 06-07 Warriors 'We Believe' team upset in the first round of the playoffs?",
    answers  : [" Dallas Mavericks", " LA Lakers", " San Antonio Spurs", " Chicago Bulls"],
    correct  : " Dallas Maverics",
    image: "url"
  },
  { 
    question : "Who scored a record-breaking xx points in one quarter against the Sacrmento Kings in the 2016-17 season? ",
    answers  : [" Steph Curry", " Zaza Pachulia", " Klay Thompson", " Draymond Green"],
    correct  : " Klay Thompson",
    image: "url"
  },
  { 
    question : "Who did the Warriors draft the year xx was the number one pick? ",
    answers  : [" XX", " XX", " Klay Thompson", " Draymond Green"],
    correct  : " Chris Webber",
    image: "url"
  },
  { 
    question : "Who did the Warriors draft the year xx was the number one pick? ",
    answers  : [" XX", " XX", " Klay Thompson", " Draymond Green"],
    correct  : " Chris Webber",
    image: "url"
  }, 
  { 
    question : "Who did the Warriors draft the year xx was the number one pick? ",
    answers  : [" XX", " XX", " Klay Thompson", " Draymond Green"],
    correct  : " Chris Webber",
    image: "url"
  }, 
  { 
    question : "What team did Steph Curry play for in the final four of the NCAA ...? ",
    answers  : [" Kentucky", " Davidson", " Duke", " Stanford"],
    correct  : " Davidson",
    image: "url"
  }        
];
  
  
  // Random number generator to generate 5 questions
  // Each number corresponds to a specific question
function startQuiz() {
  // Initiate an empty array
  var fiveNums = [];
  // Want to generate 5 unique numbers to get 5 different questions
  // Do a while loop and keep going while the length of 
  //the array is less than 5
  while(fiveNums.length < 5) {
    var randomNum = Math.floor(Math.random() * 20);
    // if the number is not in the array, keep generating random nums
    if(fiveNums.indexOf(randomNum) > -1 ) continue; //revisit this, I think if -1, means number isn't in the array
    // add the unique number to the array
    fiveNums[fiveNums.length] = randomNum;
  }
  console.log(fiveNums);

  // loop over array and get question corresponding to number
  for(var i = 0; i < fiveNums.length; i++) {
    // set variable for the question  
    var question = questions[fiveNums[i]].question;
      console.log(question);
    // assign an id in the dom for each question
    var ques = document.getElementById('question' + [i]);
    // display the question, preface with 
    // number 1 and colon, 2 colon, etc ... this is what [i + 1] is for
    ques.textContent = [i + 1] + ': ' + question;

    //Display the answers as multiple radio buttons
    //set variable for the answers, which is an array of 4 elements
    var answers = questions[fiveNums[i]].answers
      console.log(answers + ' this is the answers array'); 

    // create a loop and assign the answers to radio buttons
    for(var j = 0; j < 4; j++){
      // assign a variable to each answer in the array
      var ans = document.getElementById('answer' + [i] + [j]);
      var radio = document.getElementById('radio' + [i] + [j]) 
      console.log(i + ' this is index i ' + j + ' this is index j');
      console.log(ans + ' answer goes here');  
      console.log(radio + ' radio buttons');
      radio.value = answers[j];
      console.log(answers[j]);
      ans.appendChild(document.createTextNode(answers[j]));
    }  

    // http://jsfiddle.net/cmatskas/csQ5R/6/
    // https://stackoverflow.com/questions/21174147/javascript-attempting-to-dynamically-add-radio-buttons-from-an-array
    
      // var ans; 
      //   ans + [i] = document.getElementById('answer0' + [i]); 
      //   console.log(ans+[i]);
      // ans0.innerHTML = answers[0]; 
    
  }  

// function quizResult() {
  // var correctAnswer = 0;
  // var incorrectAnswer = 0;

  // for(var i = 0; i < fiveNums.length; i++) {
  //   var correct = questions[i].correct;
  //   var userAnswer = document.getElementById('answer' + [i]).value;
  //   var questionSpot = document.getElementById('question' + [i]);

  //   if(answer == guess) {
  //     questionSpot.className = 'correct';
  //     correct++;
  //   } else {
  //     questionSpot.className = 'incorrect';
  //     incorrect++;
  //     };  
  // };

//   document.getElementById('correct').textContent = correct;
//   document.getElementById('incorrect').textContent = incorrect;
// }


} //end of startQuiz function




});
