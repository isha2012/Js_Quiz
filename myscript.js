function submitAnswers() {
   
   var total = 10;
   var score = 0;

   //Get user input
   var q1 = document.forms["quizForm"]["q1"].value;
   var q2 = document.forms["quizForm"]["q2"].value;
   var q3 = document.forms["quizForm"]["q3"].value;
   var q4 = document.forms["quizForm"]["q4"].value;
   var q5 = document.forms["quizForm"]["q5"].value;
   var q6 = document.forms["quizForm"]["q6"].value;
   var q7 = document.forms["quizForm"]["q7"].value;
   var q8 = document.forms["quizForm"]["q8"].value;
   var q9 = document.forms["quizForm"]["q9"].value;
   var q10 = document.forms["quizForm"]["q10"].value;

   //validation
   for(i=1; i<=total; i++) {
      if(eval('q'+i) == null  || eval('q'+i) == '') {
          alert('You missed a question'+i);
          return false;
      }
   }


   //settig the Correct Answers.
   var answers = ["a","c","d","b","a","c","b","a","d","a"];
   for(i=1; i<=total; i++) {
       if(eval('q'+i) == answers[i-1]) {
          score++
       }
   }
   
    alert('You scored '+score+' out of '+total);

}
