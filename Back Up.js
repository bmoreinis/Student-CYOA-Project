// Variables.
 var girlBuddy = "Kaori";
 var boyBuddy = "Shirō";
 var buddyName = "Matsuki";
 var score1 = 0
 var score2 = 0
 var score3 = 0

 // Matsuki stands for Model artifical tester supervised utility coding intellengence. Kaori stands for, Coding artifical operator revised intellengence. Shirō stands for, supervised holder intellengent revised operator. Score 1 is for the bad ending, score2 is the friends ending, score3 is the lover ending.

code();
function code () {
// Notice.
 alert ("[There are 4 different endings. Not typing a answer and pressing ok is equal to no response. In some cases it is equal to default. If you type in default the computer will automatically choose for you!!]");

alert ("[Testing Story Beginning Now.(Beta Mode)]");

// choose testing buddy.
var buddy = prompt ("Would you like your testing buddy's gender to be? Girl, Boy, Neutral, or default?");
// End Code 
if (buddy == "Taco's") {
 return;
}

// female buddy
 if (buddy == "Girl") alert ("You have choosen FEMALE");
 else if (buddy == "girl") alert ("You have choosen FEMALE");

// male buddy
 else if (buddy == "Boy") alert ("You have choosen MALE");
 else if (buddy == "boy") alert ("You have choosen MALE");

// neutral buddy
 else if (buddy == "Neutral") alert ("You have choosen NEUTRAL");
 else if (buddy == "neutral") alert ("You have choosen NEUTRAL");

// default buddy aka female 
 else if (buddy == "default") alert ("You have choosen DEFAULT");
 else if (buddy == "Default") alert ("You have choosen DEFAULT");
 else if (buddy == "") alert ("You have choosen DEFAULT");


// Intro.
 alert ("???: Hey!");
 alert ("[?, I look up from the book I'm reading. I see a person in the distance calling someone.]");
 alert ("???: YEAH! YOU there!");
 alert ("[Wait they want me?]");

 if (buddy == "girl") alert ("[A blonde headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");
 else if (buddy == "Girl") alert ("[A blonde headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");

 else if (buddy == "boy") alert ("[A blonde headed boy runs towards you, with a cheerful smile. Waving like he knows you.]");
 else if (buddy == "Boy") alert ("[A blonde headed boy runs towards you, with a cheerful smile. Waving like he knows you.]");

 else if (buddy == "neutral") alert ("[A black headed person runs towards you, with a cheerful smile. Waving like they knows you.]");
 else if (buddy == "Neutral") alert ("[A black headed person runs towards you, with a cheerful smile. Waving like they knows you.]");

 else if (buddy == "default") alert ("[A red headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");
 else if (buddy == "Default") alert ("[A red headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");

 else if (buddy == "") alert ("[A red headed girl runs towards you, with a cheerful smile. Waving like she knows you.]");

// thoughts 1 { 
 if (buddy == "girl") alert ("[Why does she look familiar?]");
 else if (buddy == "Girl") alert ("[Why does she look familiar?]");

 else if (buddy == "boy") alert ("[Why does he look familiar?]");
 else if (buddy == "Boy") alert ("[Why does he look familiar?]");

 else if (buddy == "neutral") alert ("[Why do they look familiar?]");
 else if (buddy == "Neutral") alert ("[Why do they look familiar?]");

 else if (buddy == "default") alert ("[ Why does she look familiar?]");
 else if (buddy == "Default") alert ("[ Why does she look familiar?]");

 else if (buddy == "") alert ("[ Why does she look familiar?]"); 

// question 1
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
// story progess 1
alert ("[Why is this random person approaching me?]");
alert ("???: Oh sorry about that! My names "+buddyName+"!");

//// Thoughts 2 
{
 if (buddy == "girl") alert ("[Wait.. THE matsuki? What does she want with me?]")

 else if (buddy == "boy") alert ("[Wait.. THE matsuki? What does he want with me?]");

 else if (buddy == "neutral") alert ("[Wait.. THE matsuki? What do they want with me?]");

 else if (buddy == "default") alert ("[Wait.. THE matsuki? What does she want with me?]");

 else if (buddy == "defualt") alert ("[Wait.. THE matsuki? What does she want with me?]");

 else if (buddy == "") alert ("[Wait.. THE matsuki? What does she want with me?]");
}
// Story progess 1.5
alert (buddyName+": ...");
alert ("You: ...");

alert (buddyName+": Oh right! Why I'm here");
alert (buddyName+": Well I saw you all by yourself so... I came over here to ask how your day was!");

// Thoughts 3
 if (buddy == "girl") alert ("[Why is THE matsuki, the most popular girl in school want to know how my day went?]");
 else if (buddy == "boy") alert ("[Why is THE matsuki, the most popular guy in school want to know how my day went?]");
 else if (buddy == "neutral") alert ("[Why is THE matsuki, the most popular person in school want to know how my day went?]");
 else if (buddy == "default") alert ("[Why is THE matsuki, the most popular girl in school want to know how my day went?]");
 else if (buddy == "defualt") alert ("[Why is THE matsuki, the most popular girl in school want to know how my day went?]");
 else if (buddy == "") alert ("[Why is THE matsuki, the most popular girl in school want to know how my day went?]"); 


// Question 2.
var day = prompt (buddyName+": So, how was your day?");
// End Code 
if (day == "Taco's") {
 return;
}
// Question 2 response 1
if (score1 == 1 && day == "" ) {
 alert (buddyName+": Oh sorry for bothering you... I'll leave you alone...");
 alert ("[You Got 'The Bad Ending' ...]");
 alert ("[3 More Endings Left]");
 return;
}

// Question 2 response 2 
else if (day == "") {
  alert ("You: ...");
  alert (buddyName+": not much of a talker are you?");
  alert (buddyName+": Thats fine..! But urmm..");
   
}

// Alert Day
else alert ("You: "+day);

// Question 2 response 0. + 1 points.
if (day == "you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 2
else if (day == "fine you") {
 alert (buddyName+": Wait you care about how my day went?!"); 
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}

// you response 3
else if (day == "fine and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 4
else if (day == "great and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 5
else if (day == "good and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 6
else if (day == " eh and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 7
else if (day == "so so and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 8
else if (day == "awsome and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 9
else if (day == "amazing and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 10
else if (day == "cool and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 11
else if (day == "could be better and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}
// you response 12
else if (day == "lovely and you") {
 alert (buddyName+": Wait you care about how my day went?!");
 alert (buddyName+" Whispers: eeeeeeee! senpai's finally noticed me!");
 alert ("[Mitsuki's words were whispers in the wind. However I could still hear it all. But if so, is she really whispering? The face of matsuki was filled by nothing but joy. Seeing Matsuki all happy, made my heart feel warm inside. But as quickly as it comes, and the way its always been... That warmth vanished, cold and emptness filled that space once again.");
}


// Question 2 response 2
if (day == "Fine") alert (buddyName+":Well, I wish I could make it better... but mines was awsome!");
if (day == "fine") alert (buddyName+": Well, I wish I could make it better... but mines was awsome!");

// Question 2 response 3
else if (day == "Great") alert (buddyName+": Mines was also great too!");

else if (day == "great") alert (": Mines was also great too!");

// Question 2 response 4
else if (day == "Eh") alert (buddyName+": Awe... wish I were there to make it better../");

else if (day == "eh") alert (buddyName+": Awe... wish I were there to make it better..");

// Question 2 response 5
else if (day == "so-so") alert (buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

else if (day == "So-So") alert (buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

else if (day == "so and so") alert (buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

else if (day == "So and So") alert (buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

else if (day == "So And So") alert(buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

// Question 2 response 6
else if (day == "good") alert (buddyName+": My day went well too!!");

else if (day == "Good") alert (buddyName+": My day went well too!!");

// Question 2 response 7
else if (day == "Could be better") alert (buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

else if (day == "could be better") alert (buddyName+": Well your own personal super hero has arrived! Cause I'm here to make it better!!");

// Question 2 response 8
else if (day == "Amazing") alert (buddyName+": My day was awsome too!!");

else if (day == "amazing") alert (buddyName+": My day was awsome too!!");

// Question 2 response 9
else if (day == "Awsome") alert (buddyName+": My day was awsome too!!");

else if (day == "awsome") alert (buddyName+": My day was awsome too!!");

// Question 2 response 10
else if (day == "Awsome Sauce") alert (buddyName+": My day was awsome too!!");

else if (day == "Awsome sauce") alert (buddyName+": My day was awsome too!!");

else if (day == "awsome sauce") alert (buddyName+": My day was awsome too!!");

// Question 2 response 11
else if (day == "cool") alert (buddyName+": Well guess what! My day was cool as well, were the cool kids now!");

else if (day == "Cool") alert (buddyName+": Well guess what! My day was cool as well, were the cool kids now!");

// Question 2 response 12
else if (day == "Cool Beans") alert (buddyName+": Uhh.... Yeah! My day was cool beans as well!!");

else if (day == "Cool beans") alert (buddyName+": Uhh.... Yeah! My day was cool beans as well!!");

else if (day == "cool beans") alert (buddyName+": Uhh.... Yeah! My day was cool beans as well!!");

// Question 2 response 13
else if (day == "bad") alert (buddyName+": awe... I- Uh- I'm- I'm sorry... if theres anything I can do to make you feel better... I'll gladly do so!!");

else if (day == "Bad") alert (buddyName+": awe... I- Uh- I'm- I'm sorry... if theres anything I can do to make you feel better... I'll gladly do so!!");

// Question 2 response 14
else if (day == "Horrible") alert (buddyName+": awe... I- Uh- I'm- I'm sorry... if theres anything I can do to make you feel better... I'll gladly do so!!");

else if (day == "horrible") alert (buddyName+": awe... I- Uh- I'm- I'm sorry... if theres anything I can do to make you feel better... I'll gladly do so!!");

// Question 2 response 15.
else if (day == "Lovely") alert (buddyName+": I find you lovely-- I- Uh sorry forget I said that!! You heard nothing!!");

else if (day == "lovely") alert (buddyName+": I find you lovely-- I- Uh sorry forget I said that!! You heard nothing!!");

// Question 3.
alert (buddyName+": Random question");
alert (buddyName+": Like really, really, really random question...");
alert (buddyName+": So how old are you?");
var age = prompt ("[Enter age]");
// End Code
if (age == "Taco's") {
 return;
}
// question 3 response 0
if (age == "") alert (buddyName+": You really don't talk much do you?");
if (age == "") alert (buddyName+" Whispers: I knew the answer anyways...");
if (age == "") alert ("[Wait what? I look up from my book to Matsuki]");
if (age == "") alert ("You: hmm?")
if (age == "") { 
 alert (buddyName+": Oh! Nothing!");
 var speakUp = prompt ("[That was odd? Do you choose to say something about it? Yes or No]"); }

// question 3 response 1
if (age == "why" || "Why" || "why?" || "Why?") {
 alert ("You: Why do you wanna know?");
 alert (buddyName+": Oh no reason at all, just want to confirm something...");
}
// question 3 response 2
else if (age > "16") alert ("You: 16.. why?");
else if (age < "16") alert ("You: 16.. why?");
else if (age == "16") alert ("You: 16.. why?");
if (age == "16") alert (buddyName+": Nothing really, just want to confirm something... But your the same age as me!! What a coincidence!!");

// story progess
alert (buddyName+": ...");
alert (buddyName+": hey... umm");
alert (buddyName+": I have a question for you");
alert (buddyName+": Please just answer it honestly, I won't get mad at you if you do...");
alert (buddyName+": do you- do-.... am?- Am i... both-bothering you?... do... do I come off... annoying to you?");

if (buddy == "girl") alert ("[I look up from my book at Matsuki. In which I see Matsuki's with a gloomy expression. But starts to smiling as soon as she notices I'm looking . However its clear that her smile its forced. Her vibes are not the same]");

if (buddy == "boy") alert ("[I look up from my book at Matsuki. In which I see Matsuki's with a gloomy expression. But starts to smiling as soon as he notices I'm looking . However its clear that his smile its forced. His vibes are not the same]");

if (buddy == "neutral") alert ("[I look up from my book at Matsuki. In which I see Matsuki's with a gloomy expression. But starts to smiling as soon as they notices I'm looking . However its clear that their smile its forced. Their vibes are not the same]");

if (buddy == "default") alert ("[I look up from my book at Matsuki. In which I see Matsuki's with a gloomy expression. But starts to smiling as soon as she notices I'm looking . However its clear that her smile its forced. Her vibes are not the same]");

if (buddy == "defualt") alert ("[I look up from my book at Matsuki. In which I see Matsuki's with a gloomy expression. But starts to smiling as soon as she notices I'm looking . However its clear that her smile its forced. Her vibes are not the same]");

if (buddy == "") alert ("[I look up from my book at Matsuki. In which I see Matsuki's with a gloomy expression. But starts to smiling as soon as she notices I'm looking . However its clear that her smile its forced. Her vibes are not the same]");

// question 4
var importantAnswer = prompt ("[What is you answer?]");
// End Code
if (importantAnswer == "Taco's") {
 return;
}

// Say answer
if (importantAnswer = "") alert ("You: ...");
else alert ("You: "+importantAnswer);

// question 4 response 1
if (importantAnswer == "no", "nah", "not really", "no not really", "you're good", "nope", "not at all") { 
 alert (buddyName+": really?");
 // question 6
 var lieAnswer = prompt (buddyName+": wait are you lying?");
 // End Code
 if (lieAnswer == "Taco's") {
 return;
}
}

// say answer
alert ("You: "+lieAnswer);

if (lieAnswer == "no" || "nah" || "nope" || "not at all") alert ("You: Why?");

if (lieAnswer == "no" || "nah" || "nope" || "not at all") alert (buddy+": I thought-");

if (lieAnswer == "no" || "nah" || "nope" || "not at all") alert ("You: ")

if (lieAnswer == "yeah" || "yes" || "yup" || "yea" || "definitely") alert (buddyName+": At least you were honest...");

if (lieAnswer == "yeah" || "yes" || "yup" || "yea" || "definitely");

// question 4 response 0 
 if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") { 
   if (buddy == "girl") alert ("[I look off to the side and into the distance. Then back at Matsuki. Her face filled with nothing but sorrow. Her lips were tighten together, and her hands clenched into fists. I looked at Matsuki with the same blank expression I had from the very beginning when she walked up to me. Then back at the book I've been reading.]");

   if (buddy == "boy") alert ("[I look off to the side and into the distance. Then back at Matsuki. His face filled with nothing but sorrow. His lips were tighten together, and his hands clenched into fists. I looked at Matsuki with the same blank expression I had from the very beginning when she walked up to me. Then back at the book I've been reading.]");

   if (buddy == "neutral") alert ("[I look off to the side and into the distance. Then back at Matsuki. Their face filled with nothing but sorrow. Their lips were tighten together, and their hands clenched into fists. I looked at Matsuki with the same blank expression I had from the very beginning when she walked up to me. Then back at the book I've been reading.]");

   if (buddy == "default") alert ("[I look off to the side and into the distance. Then back at Matsuki. Her face filled with nothing but sorrow. Her lips were tighten together, and her hands clenched into fists. I looked at Matsuki with the same blank expression I had from the very beginning when she walked up to me. Then back at the book I've been reading.]");

   if (buddy == "defualt") alert ("[I look off to the side and into the distance. Then back at Matsuki. Her face filled with nothing but sorrow. Her lips were tighten together, and her hands clenched into fists. I looked at Matsuki with the same blank expression I had from the very beginning when she walked up to me. Then back at the book I've been reading.]");

   if (buddy == "") alert ("[I look off to the side and into the distance. Then back at Matsuki. Her face filled with nothing but sorrow. Her lips were tighten together, and her hands clenched into fists. I looked at Matsuki with the same blank expression I had from the very beginning when she walked up to me. Then back at the book I've been reading.]");
}

if (importantAnswer == "") alert (buddyName+": ... you won't even answer that question....");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") alert (buddyName+": you really don't want me here... ");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") alert ("[I glance over to Matsuki. Matsuki's face is dark. She has a pitful expression, as if she had just gotten stabbed in the heart by someone she trusted. Matsuki then turns away, and starts walking away with her head down.]");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") alert ("[I look up at the sky and sigh]");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") alert ("You: wait...");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") alert ("[Matsuki stops]");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") alert ("Matsuki: yeah?");
if (importantAnswer == "", "yes", "yeah", "sure", "very", "very much", "yes alot", "yeah alot", "alot") {
 if (buddy == "girl") alert ("[Her voice trembling. It sounded like it was on the verge of breaking, she was trying to hide it. But she failed doing so.]");

 if (buddy == "boy") alert ("[His voice trembling. It sounded like it was on the verge of breaking, she was trying to hide it. But she failed doing so.]");
 
 if (buddy == "neutral") alert ("[They're voice trembling. It sounded like it was on the verge of breaking, she was trying to hide it. But she failed doing so.]");
 
 if (buddy == "default") alert ("[Her voice trembling. It sounded like it was on the verge of breaking, she was trying to hide it. But she failed doing so.]");
 
 if (buddy == "defualt") alert ("[Her voice trembling. It sounded like it was on the verge of breaking, she was trying to hide it. But she failed doing so.]");
 
 if (buddy == "") alert ("[Her voice trembling. It sounded like it was on the verge of breaking, she was trying to hide it. But she failed doing so.]");
}

if (importantAnswer == "") {
 // question 5
 var importantAnswer2 = prompt ("[Do you say something?]");
 
 // question 5 response 0
 if (importantAnswer2 == "") alert (buddyName+": I thought so...");
 if (importantAnswer2 == "") {
     var confirm1 = prompt ("[Confirm?]");

     // No
     if (confirm1 == "no", "nope", "nah", "don't", "wait", "go back", "back") alert ("You: *sigh*,why do you have to be so difficult? I never said to leave. I just said you were annoying.");
     if (confirm1 == "no", "nope", "nah", "don't", "wait", "go back", "back") alert (buddyName+": ");

     // Yes
     if (confirm1 == "yes", "yeah", "yea", "yup", "yep", "sure", "definitely", "of course", "totally", "why not?", "why not") {
       alert ("You: Never mind"); 

       alert (buddyName+" Whispers: to think I liked you");
     
       alert (buddyName+" Whispers: to think I liked you");
     
       alert ("[I quickly look up as soon as I hear that. But Matsuki already gone. After that I haven't seen Matsuki since, even if I did. I probaly didn't realize or notice. I don't know. However I always wonder if I said the right thing. And what would have happened if I said something different. Who knows...]"); 
       alert ("[You Got 'The Bad Ending' ...]");
       alert ("[3 More Endings Left]");
       return;
     }

   }

 // question 5 response 1
   if (importantAnswer2 == "yes") alert ("You: I never said that...");
   else if (importantAnswer2 == "Yes") alert ("You: I never said that...");

 // question 5 response 2
   if (importantAnswer2 == "no") alert ("You: I never said that...");
   else if (importantAnswer2 == "No") alert ("You: I never said that...");
}
alert ("1: "+score1+" 2: "+score2+" 3: "+score3);
}