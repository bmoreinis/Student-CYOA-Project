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
  }
  else if (buddy == 2) {
    alert ("You have choosen MALE");
  }
  else if (buddy == 3) {
    ("You have choosen NEUTRAL");
  }
  else if (buddy == 4) {
    alert ("You have choosen DEFAULT");
  }
  else alert("Have a great day!");
}