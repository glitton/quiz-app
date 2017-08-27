// JavaScript for GS Warriors quiz app
$(document).ready(function(){

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
    answers  : [" San Francisco", " San Jose", " Oakland", " Hypertext Markup Language"],
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
    // assign an id in the dom for each question
    var el = document.getElementById('question' + [i]);

    console.log(question, el);
    // display the question
    el.textContent = [i + 1] + ': ' + question;
  }  



} //end of startQuiz function



//Start quiz
// generate five random s
// Generate five questions
// Display questions based on number
// Count how many are correct
// Count how many are wrong
// Show result when user clicks button
// Show summary of results plus answers
// play again button
// generate five random numbers
// rinse and repeat 

});
