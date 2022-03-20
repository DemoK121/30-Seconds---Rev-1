
// declaration of variables

var teamak = "Andre & Karlien";
var teamdk = "Demetri & Kelly";
var teamad = "Andre & Demetrius";
var teamkk = "Kelly & Karlien";
var teamka = "Kelly & Andre";
var teamkd = "Karlien & Demetri"

var activeteam1 = "";
var activeteam2 = "";

var randomholder = "";
// all button 1 clicks
function clickfunc1ak() {
  console.log(teamak);

  if (activeteam2 === teamak){
  alert("Already Selected");
  }
  else {
  activeteam1 = teamak;
  $("#team1btn").html(activeteam1);

}
}

function clickfunc1dk() {
  console.log(teamdk);

  if (activeteam2 === teamdk){
  alert("Already Selected");
  }
  else {
  activeteam1 = teamdk;
  $("#team1btn").html(activeteam1);
}
}

function clickfunc1ad() {
  console.log(teamad);

  if (activeteam2 === teamad){
  alert("Already Selected");
  }
  else {
  activeteam1 = teamad;
  $("#team1btn").html(activeteam1);
}
}

function clickfunc1kk() {
  console.log(teamkk);

  if (activeteam2 === teamkk){
  alert("Already Selected");
  }
  else {
  activeteam1 = teamkk;
  $("#team1btn").html(activeteam1);
}
}

function clickfunc1ka() {
  console.log(teamka);

  if (activeteam2 === teamka){
  alert("Already Selected");
  }
  else {
  activeteam1 = teamka;
  $("#team1btn").html(activeteam1);
}
}

function clickfunc1kd() {
  console.log(teamkd);

  if (activeteam2 === teamkd){
  alert("Already Selected");
  }
  else {
  activeteam1 = teamkd;
  $("#team1btn").html(activeteam1);
}
}






// all button 2 clicks


function clickfunc2ak() {
  console.log(teamak);

  if (activeteam1 === teamak){
  alert("Already Selected");
}
else {
activeteam2 = teamak;
$("#team2btn").html(activeteam2);

}



}

function clickfunc2dk() {
  console.log(teamdk);
  if (activeteam1 === teamdk){
  alert("Already Selected");
}
else {
  activeteam2 = teamdk;
  $("#team2btn").html(activeteam2);
}
}

function clickfunc2ad() {
  console.log(teamad);
  if (activeteam1 === teamad){
  alert("Already Selected");
}
else {
  activeteam2 = teamad;
  $("#team2btn").html(activeteam2);
}
}

function clickfunc2kk() {
  console.log(teamkk);
  if (activeteam1 === teamkk){
  alert("Already Selected");
}
else {
  activeteam2 = teamkk;
  $("#team2btn").html(activeteam2);
}
}

function clickfunc2ka() {
  console.log(teamka);
  if (activeteam1 === teamka){
  alert("Already Selected");
}
else {
  activeteam2 = teamka;
  $("#team2btn").html(activeteam2);
}
}

function clickfunc2kd() {
  console.log(teamkd);
  if (activeteam1 === teamkd){
  alert("Already Selected");
}
else {
  activeteam2 = teamkd;
  $("#team2btn").html(activeteam2);
}
}



// document.getElementById("2option1").setAttribute("class", "");
  // var btnelim = document.getElementById("2option1");
  //
  // btnelim.onclick = false;
