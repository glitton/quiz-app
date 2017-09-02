// JavaScript for GS Warriors quiz app
// Start quiz
// generate five random numbers which correspond to five questions
// Choose the five questions based on its index and display them
// Render answers via radio buttons
// Count how many users got the correct and wrong ones 
// Show results including right answers when user clicks results button
// Allow user to play again 
// rinse and repeat   

"use strict"

$(document).ready(function(){

// Event listener triggered when start quiz button is clicked
document.getElementById("start-quiz").addEventListener("click", startQuiz);

// question and answer array of objects 
// from https://www.jetpunk.com/user-quizzes/23532/golden-state-warriors-trivia
var questions = [
  { 
    question : " What Golden State Warrior entered a hospital in December 1987 for treatment for an alcohol problem?",
    answers  : [" Winston Garland",  " Chris Washburn", " Chris Mullin", " Phil Ford"],
    correct  : "Chris Mullin",
    image: "url"
  },
  { 
    question : " What are Steph Curry and Klay Thompson known as?",
    answers  : [" The Swish Brothers", " The Blues Brothers", 
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
    question : "What city is the Warriors arena located in?",
    answers  : [" San Francisco", " San Jose", " Oakland", " Silicon Valley"],
    correct  : " Oakland",
    image: "url"
  },
  { 
    question : "Who is the current coach of the Warriors?",
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
    question : "Who wasn't on the 2006-07 'We Believe' team?",
    answers  : [" Baron Davis", " Gilbert Arenas", " Jason Richardson", " Monta Ellis"],
    correct  : " Gilbert Arenas",
    image: "url"
  },
  { 
    question : "Which team did the Warriors play in the NBA finals for three years in a row?",
    answers  : [" Boston Celtics", " LA Lakers", " Cleveland Cavaliers", " San Antonio Spurs"],
    correct  : " Cleveland Cavaliers",
    image: "url"
  },
  { 
    question : "Which team did the Warriors 'We Believe' team upset in the first round of the playoffs?",
    answers  : [" Dallas Mavericks", " LA Lakers", " San Antonio Spurs", " Chicago Bulls"],
    correct  : " Dallas Maverics",
    image: "url"
  },
  { 
    question : "Who has the record for most points in a quarter? ",
    answers  : [" Steph Curry", " Zaza Pachulia", " Klay Thompson", " Draymond Green"],
    correct  : " Klay Thompson",
    image: "url"
  },
  { 
    question : "Who was the player that the Warriors traded Robert Parish for in 1980? ",
    answers  : [" Kevin McHale", " Joe Barry Carrol", " Ralph Sampson", " Draymond Green"],
    correct  : " Joe Barry Carrol",
    image: "url"
  },
  { 
    question : "During the 06-07 season, Don Nelson replaced which Golden State Warriors coach? ",
    answers  : [" Dave Cowens", " Brian Winters", " Mike Montgomery", " Eric Musselman"],
    correct  : " Mike Montgomery",
    image: "url"
  }, 
  { 
    question : "Which bridge is prominently displayed in the Warriors logo? ",
    answers  : [" Bay Bridge", " Golden Gate Bridge", " Carquinez Bridge", " London Bridge"],
    correct  : " Bay Bridge",
    image: "url"
  }, 
  { 
    question : "Who is the player that was born in the same hospital and delivered by the same doctor as Steph Curry? ",
    answers  : [" Charles Barkley", " Isiah Thomas", " Chris Paul", " LeBron James"],
    correct  : " LeBron James",
    image: "url"
  },
  { 
    question : "In 1994, the Golden State Warriors traded Chris Webber to the Bullets for 3 draft picks and whom? ",
    answers  : [" Tom Gugliotta", " Clifford Rozier", " Rony Seikaly", " Carlos Rogers"],
    correct  : " Tom Gugliotta",
    image: "url"
  }, 
  { 
    question : "In 1991, who did the Golden State Warriors trade to the Sacramento Kings for Billy Owens? ",
    answers  : [" Mitch Richmond", " Tim Hardaway", " Kenny Battle", " Chris Mullin"],
    correct  : " Mitch Richmond",
    image: "url"
  },    
  { 
    question : "Who was not one of four the Golden State Warriors acquired from the Indiana Pacers in January 2007? ",
    answers  : [" Sarunas Jasikevicius", " Al Harrington", " Matt Barnes", " Stephen Jackson"],
    correct  : " Matt Barnes",
    image: "url"
  }, 
  { 
    question : "Who did the Golden State Warriors beat in the 1974-75 NBA Championship? ",
    answers  : [" St. Louis Hawks", " Seattle Supersonics", " Los Angeles Lakers", " Washington Bullets"],
    correct  : " Washington Bullets",
    image: "url"
  }, 
  { 
    question : "What do the Golden State Warriors call their mascot?",
    answers  : [" Force", " Storm", " Thunder", " Lightning"],
    correct  : " Thunder",
    image: "url"
  }    
]; //end of questions object

  // Random number generator to generate 5 questions
  // Each number corresponds to a specific question

    // Initiate an empty array
    var fiveNums = [];
    // Want to generate 5 unique numbers to get 5 different questions
    // Do a while loop and keep going while the length of 
    //the array is less than 5
    while(fiveNums.length < 5) {
      var randomNum = Math.floor(Math.random() * 30);
      // if the number is not in the array, keep generating random nums
      if(fiveNums.indexOf(randomNum) > -1 ) continue; //revisit this, I think if -1, means number isn't in the array
      // add the unique number to the array
      fiveNums[fiveNums.length] = randomNum;
    }
    console.log(fiveNums);

  function startQuiz() {
    // loop over array and get question corresponding to number
    for(var i = 0; i < fiveNums.length; i++) {
      // set variable for the question  
      var question = questions[fiveNums[i]].question;
        // console.log(question);

      // assign an id in the dom for each question
      var ques = document.getElementById('question' + i);
      // display the question, preface with 
      // number 1 and colon, 2 colon, etc ... this is what [i + 1] is for
      ques.textContent = [i + 1] + '. ' + question;
      // Get id to display question in the results area
      var showQues = document.getElementById('ques' + i);
      showQues.textContent = [i + 1] + '. ' + question;

      //Display the answers as multiple radio buttons
      //set variable for the answers, which is an array of 4 elements
      var answers = questions[fiveNums[i]].answers;
        // console.log(answers + ' this is the answers array'); 

      // create a loop within the other for loop in line 190
      // and assign the answers to radio buttons
      for(var j = 0; j < questions[fiveNums[i]].answers.length; j++){
        // assign a variable to each answer in the array
        var ans = document.getElementById('answer' + i + j);
        var radio = document.getElementById('radio' + i + j); 
        // console.log(i + ' this is index i ' + j + ' this is index j');
        // console.log(ans + ' answer goes here');  
        // console.log(radio + ' radio buttons');
        radio.value = answers[j];
        // console.log(answers[j]);
        ans.appendChild(document.createTextNode(answers[j]));    
      } //end of j for loop
    } //end of i for loop
  }//end of startQuiz function

  // When user clicks on Check Results button, the function below happens  
document.getElementById("see-results").addEventListener("click", quizResult);
  function quizResult() {
    console.log('quiz result invoked');
    var correctAnswer = 0;
    var wrongAnswer = 0;

//     // Want to use the answers for the loop condition
//     // var radio = document.getElementById('radio' + [i] + [j]); 
    for(var i = 0; i < fiveNums.length; i++){
//     // Capture user's answer based on the radio button checked
// //     //Based on https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
    // Assign correct answer from the object to a variable
        var correct = questions[fiveNums[i]].correct;
        document.getElementById('correct' + i ).textContent = 'Correct Answer: ' + correct;
        console.log(correct);
        var userAnswer = $("input[name='answer" + i + "']:checked").val();
        console.log(userAnswer);
        document.getElementById('userAns' + i).textContent = 'Your Answer: ' + userAnswer;
        // var ansClass = document.getElementsByClassName('show-answers');
        // console.log(ansClass);

      if(correct == userAnswer) {
        $('.show-answers').addClass('correct').removeClass('wrong');
        correctAnswer++;
      } else {
        $('.show-answers').addClass('wrong').removeClass('correct');
        wrongAnswer++
      }
    } //end of i for loop
  document.getElementById('correct').textContent = correctAnswer;
  document.getElementById('wrong').textContent = wrongAnswer;
  var total = document.getElementById('total');
  total.textContent = correctAnswer / (fiveNums.length) * 100 + '%';
  var totalNum = total.textContent;
  console.log(totalNum);
  var message = document.getElementById('message');  

    // Display a message based on total score
    if(totalNum >= '90%'){
      message.textContent = "You live and breathe Dub Nation!";
    } else if (totalNum >= '60%') {
      message.textContent = "Admit it, you're a bandwaggoner!"; 
    } else {
      message.textContent = "Where you've been? Get out from under your rock!"
    }

    // Show questions with user answers and correct answers


  } //end of quizResult 

  // Play again function which scrolls to the top
  document.getElementById("play-again").addEventListener("click", playAgain);

  function playAgain(){
    document.location.reload(true);
    console.log('play new game');
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }

});//end of document ready function
