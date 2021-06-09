// Variables.
var girlBuddy = "Kaori";
var boyBuddy = "Shirō";
var buddyName = "Matsuki";
var buddy
var score1 = 0
var score2 = 0
var score3 = 0

// Matsuki stands for Model artifical tester supervised utility coding intellengence. Kaori stands for, Coding artifical operator revised intellengence. Shirō stands for, supervised holder intellengent revised operator. Score 1 is for the bad ending, score2 is the friends ending, score3 is the lover ending.
function code() {
buddymenu();
function buddymenu() {
  var menu = "Choose Your Buddy\n";
  menu+=" 1 - Girl\n";
  menu+=" 2 - Boy\n";
  menu+=" 3 - Neutral\n";
  menu+=" 4 - Default\n";
  menu+=" 5 - Quit\n\n";
  buddy = prompt(menu);
  if (buddy == 1) {
    alert ("You have choosen FEMALE");
    alert ("Story Beginning Now");
    intro();
  }
  else if (buddy == 2) {
    alert ("You have choosen MALE");
    alert ("Story Beginning Now");
    intro();
  }
  else if (buddy == 3) {
    ("You have choosen NEUTRAL");
    alert ("Story Beginning Now");
    intro();
  }
  else if (buddy == 4) {
    alert ("You have choosen DEFAULT");
    alert ("Story Beginning Now");
    intro();
  }
  else alert("Have a great day!");
}
function intro() {
 alert ("???: Hey!");
 alert ("[?, I look up from the book I'm reading. I see a person in the distance calling someone.]");
 alert ("???: YEAH! YOU there!");
 alert ("[Wait they want me?]");

 if (buddy == 1) alert ("[A blonde headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");

  else if (buddy == 2) alert ("[A blonde headed boy runs towards you, with a cheerful smile. Waving like he knows you.]");

  else if (buddy == 3) alert ("[A black headed person runs towards you, with a cheerful smile. Waving like they knows you.]");

  else if (buddy == 4) alert ("[A red headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");

  else if (buddy == "") alert ("[A red headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");

 // thoughts 1 { 
  if (buddy == 1) alert ("[Why does she look familiar?]");

  else if (buddy == 2) alert ("[Why does he look familiar?]");

  else if (buddy == 3) alert ("[Why do they look familiar?]");

  else if (buddy == 4) alert ("[ Why does she look familiar?]");

  else if (buddy == "") alert ("[ Why does she look familiar?]"); 
  question1();
}

function question1() {
 var name = prompt ("???: Uh... umm.. could you... possibly? by any chances... umm tell me your name?");

 // End Code 
  if (name == "Taco's") {
  return;
  }

 // question 1 response 1. -1 points
  if (name == "") {
  alert ("You: ...");

  alert ("???: Thats fine you don't have to tell me! After all I'm just a random stranger aren't I? I bet it a pretty name anyway!");

  alert ("[The once cheerful expression saddens a bit. Then quickly becomes cheerful once again.]"); 
  score1++;
  }

 // question 1 response 2
  else if (name == "default") {
  alert ("You: Taichi..");
  alert ("???: hehe... a pretty name");
  alert ("???: Anyways! Hi Taichi!");
  score2++;
  score3++;
  }
  // question 1 response 3
  else 
  {
  alert ("You: "+name);
  alert ("???: hehe... a pretty name");
  alert ("???: Anyways! Hi "+name+"!");
  score2++;
  score3++; 
  }
}
}