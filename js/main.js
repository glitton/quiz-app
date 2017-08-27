// JavaScript for GS Warriors quiz app
$(document).ready(function(){
  
  // Random number generator to generate 5 questions
function generateFiveNumbers() {
  // Initiate an empty array
  var fiveNums = [];
  // Want to generate 5 unique numbers
  // Do a while loop and keep going while the length of 
  //the array is less than 5
  while(fiveNums.length < 5) {
  var randomNum = Math.floor(Math.random() * 21);
  // if the number is not in the array, keep generating random nums
  if(fiveNums.indexOf(randomNum) > -1 ) continue;
  // add the unique number to the array
  fiveNums[fiveNums.length] = randomNum;
  }
}  

function chooseQuestions(){ 
// question and answer array of objects 
// from https://www.jetpunk.com/user-quizzes/23532/golden-state-warriors-trivia

var questions = [
  { //1
    question : " Who are the two leading three-point shooter in Warriors history?",
    answers  : ["Steph Curry, Monta Ellis",  "Steph Curry, Klay Thompson",          "Chris Mullin, Mitch Richmond", "Steph Curry, Kevin Durant"],
    correct  : "Steph Curry, Klay Thompson",
    image: "url"
  },
  { //2
    question : " What are Steph Curry and Klay Thompson known as?",
    answers  : [" The Terrible Two", " The Millenials", 
                " Brothers in Arms", " The Splash Brothers"],
    correct  : " The Splash Brothers",
    image: "url"
  },
  { //3
    question : "What player left Oklahoma City to start his 'next chapter' with Golden State?",
    answers  :  [" Andre Iguodala", " Kevin Durant", " Rick Barry", " Rod Strickland"],
    correct  : " Kevin Durant",
    image: "url"
  },
  { //4
    question : "What current Warriors player has 19 career triple-doubles?",
    answers  : [" Draymond Green", " Shaun Livingston", " Klay Thompson", " Kevin Durant"],
    correct  : " Draymond Green",
    image: "url"
  },
  { //5
    question : "What city did the Warriors play in from 1946-1962?",
    answers  : [" San Francisco", " New York", " Philadelphia", " Oakland"],
    correct  : " Philadelphia",
    image: "url"
  },
  {  //6
    question : "What is the name of the Warriors' arena?",
    answers  : [" Dub Nation", " At&T Park", " Oracle Arena", " HP Pavilion"],
    correct  :  " Oracle Arena",
    image: "url"
  },
  {  //7
    question : "What city is that arena located in?",
    answers  : [" San Francisco", " San Jose", " Oakland", " Hypertext Markup Language"],
    correct  : " Oakland",
    image: "url"
  },
  { //8
    question : "Who is the current coach of the Warriors (as of 2017)?",
    answers  : [" Steve Kerr", " Mike Brown", " Don Nelson", " P.J. Carlisimo"],
    correct  : " Steve Kerr",
    image: "url"
  },  
  { //9
    question : "Who filled in as interim coach during the 2015-16 season?",
    answers  : [" Mike Brown", " Luke Walton", " Don Nelson", " Eric Musselman"],
    correct  : " Luke Walton",
    image: "url"
  },
  { //10
    question : "Who filled in as interim coach during the 2016-17 season?",
    answers  : [" Mike Brown", " Luke Walton", " Don Nelson", " Gary St. Jean"],
    correct  : " Mike Brown",
    image: "url"
  },     
  { //11
    question : "Who has the most points in Warriors history?",
    answers  : [" Chris Mullin", " Rick Barry", " Wilt Chamberlain", " Steph Curry"],
    correct  : " Wilt Chamberlain",
    image: "url"
  }, 
  { //12
    question : "Who was named NBA Finals MVP in 1975?",
    answers  : [" K.C. Jones", " Rick Barry", " Wilt Chamberlain", " Bob McAdoo"],
    correct  : " Rick Barry",
    image: "url"
  }, 
  { //13
    question : "Who was named NBA Finals MVP in 2015?",
    answers  : [" Andre Iguodala", " Steph Curry", " LeBron James", " Kevin Durant"],
    correct  : " Andre Iguodala",
    image: "url"
  },
  {  //14  
    question : "How many games did the Warriors win in 2015-16?",
    answers  : [" 68", " 72", " 73", " 55"],
    correct  : " 73",
    image: "url"
  },   
  { //15
    question : "What player choked coach P. J. Carlesimo during a 1997 practice?",
    answers  : [" Mitch Richmond", " Latrell Sprewell", " Monta Ellis", " Chris Mullin"],
    correct  : " Latrell Sprewell",
    image: "url"
  }, 
  { //16  
    question : "What 1990s point guard was famous for his crossover?",
    answers  : [" Mitch Richmond", " Speedy Claxton", " Tim Hardaway", " Bimbo Coles"],
    correct  : " Tim Hardaway",
    image: "url"
  },       
  { //17  
    question : "What Warriors star won the NBA dunk contest in 2002 and 2003?",
    answers  : [" Eric Dampier", " Popeye Jones", " Jason Richardson", " Adonal Foyle"],
    correct  : " Jason Richardson",
    image: "url"
  },
  { //18  
    question : "Who wasn't on the 'We Believe' team?",
    answers  : [" Baron Davis", " Popeye Jones", " Jason Richardson", " Monta Ellis"],
    correct  : " Popeye Jones",
    image: "url"
  },
  { //19  
    question : "Which team did the Warriors play in the NBA finals for three years in a row?",
    answers  : [" Boston Celtics", " LA Lakers", " Cleveland Cavaliers", " San Antonio Spurs"],
    correct  : " Cleveland Cavaliers",
    image: "url"
  },
  { //20 
    question : "Which team did the 06-07 Warriors 'We Believe' team upset in the first round of the playoffs?",
    answers  : [" Dallas Mavericks", " LA Lakers", " San Antonio Spurs", " Chicago Bulls"],
    correct  : " Dallas Maverics",
    image: "url"
  },  
];

} //end of startQuiz function


//Start game
// Generate five questions
// Display questions on the page
// Count how many are correct
// Count how many are wrong
// Show result when user clicks button
// Show answers

});
