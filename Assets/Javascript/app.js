var config = {
    apiKey: "AIzaSyDvDVt_C5eJo5lp26Xmoax2nqkHtdElW10",
    authDomain: "rps-multiplayer-12a24.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-12a24.firebaseio.com",
    projectId: "rps-multiplayer-12a24",
    storageBucket: "rps-multiplayer-12a24.appspot.com",
    messagingSenderId: "56835355614"
  };

firebase.initializeApp(config);
var database = firebase.database();

//Below are my initial values
var p1Selection = []; 
var p2Selection = [];
//Under here I will set the p1S & p2S vars to take the value of 
//the corresponding key/value pairs in the Snapshot
//p1Selection = 
//p2Selection = 

$(document).ready(function(){
    $(".playerBoxes").append($("<button>").text("Rock").attr("type", "click").addClass("rpsBtns"))
    $(".playerBoxes").append($("<button>").text("Paper").attr("type", "click").addClass("rpsBtns"))
    $(".playerBoxes").append($("<button>").text("Scissors").attr("type", "click").addClass("rpsBtns"))
   
})

database.ref().on("value", function(snapshot) {

//if the vales of p1S & p2S don't exist in firebase then lets grab these values 
//from the website and then send them to the firebase database
// if (snapshot.child("p1SelectionFB").val() === "" && snapshot.child("p1SelectionFB").val() === ""){

$(".playerBoxes").on("click", ".rpsBtns", function (){
    var term = this.innerHTML
   console.log(term)
    fillingAnswerArrs(term)
    ;
})

function fillingAnswerArrs(term){
        if (p1Selection.length === 0){
        p1Selection.pop()
        p1Selection.push(term)
        console.log("this is p1Selection: " + p1Selection)
        //setting the p1Selection value in Firebase
        database.ref().update({
            p1SelectionFB: p1Selection
          })
       
        } 
        else {
                p2Selection.pop()
                p2Selection.push(term)
                database.ref().update({
                    p2SelectionFB: p2Selection
          })
          console.log("this is p2Selection: " + p2Selection)
        }
compareSelections();
};
//The p2Selection need to be 'locked' (ei make sure it's value
//cant be changed) until the game has been reset.... need to write code for this

//}

function compareSelections(){
if (p1Selection == "Rock" && p2Selection == "Scissors"){
    console.log("players have selected their options!")
    console.log("p1 has selected rock! p1 wins!")

    }  else {
        console.log("this is the last line of the compareSelections() function")
    }
    
      // here I would write the code to compare the values in the arrary





}
})