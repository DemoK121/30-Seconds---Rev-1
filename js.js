var teamak = "Andre & Karlien";
var teamdk = "Demetri & Kelly";
var teamad = "Andre & Demetrius";
var teamkk = "Kelly & Karlien";
var teamka = "Kelly & Andre";
var teamkd = "Karlien & Demetri"




// all button 1 clicks
function clickfunc1ak() {
  console.log(teamak);

$("#team1btn").html(teamak);

var team1sel = teamak;
}



// all button 2 clicks

function clickfunc2ak() {
  console.log(teamak);

if (team1sel = teamak) {
  console.log("error");
  alert("Already Selected");
}
else {
$("#team2btn").html(teamak);
}
}

function clickfunc2dk() {
  console.log(teamdk);

// if (team1sel == teamak) {
//
// }
// else {
$("#team2btn").html(teamdk);
// }
}
