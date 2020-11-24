var readlineSync=require("readline-sync");

const log = console.log;

log('Hello! Welcome to Do You Know Sahil?\n')
var intro= readlineSync.question('Please enter your name\n');
log("Hi "+intro+", get ready for the quiz!")

var score=0;
var flag=0;

var highscores=[{
  name:"Rit",
  highScore: 5
},
{
  name:"Dev",
  highScore: 4
}]


function play (question,answer){
  var answerOne=readlineSync.question(question)
  if(answerOne.toUpperCase()==answer.toUpperCase()){
    score=score+1;
    log("Correct answer!"+"\nYour current score is : "+score+"\n---------------------------")
  }else{
    log("Wrong answer!"+"\nYour current score is : "+score+"\n---------------------------")
  }
}

questionOne="\nWhere am I from?"+"\n a.Delhi\n b.Mumbai\n c.Navi Mumbai\n d.Bangalore\n";
answerOne="c";
play(questionOne,answerOne);

questionTwo="What is my favorite sport?"+"\n a.Badminton\n b.Football\n c.Cricket\n d.Tennis\n";
answerTwo="b";
play(questionTwo,answerTwo);

questionThree="Which one of these is my favorite comic book?"+"\n a.Asterix\n b.Archie's\n c.Spiderman\n d.TinTin\n";
answerThree="d";
play(questionThree,answerThree);


questionFour="When is my birthday?"+"\n a.12th March\n b.13th March\n c.13th April\n d.10thMarch\n";
answerFour="b";
play(questionFour,answerFour);

questionFive="What is my favorite food?"+"\n a.Sushi\n b.Chickn Tikka\n c.Burger\n d.Dosa\n";
answerFive="b";
play(questionFive,answerFive);

  for(var a=0;a < highscores.length;a++){
    if(score >= highscores[a].highScore){
      flag=1;    
   }
  }
  log("\nYour final score is"+" : "+score)
  if(flag==1){
    log("CONGRATULATIONS! This is a high score!\n")
  }
  log("The high scores are"+" :\n"+ highscores[0].name+" - "+highscores[0].highScore+"\n"+highscores[1].name+" - "+highscores[1].highScore);
