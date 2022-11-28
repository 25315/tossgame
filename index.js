// alert("Jatin");
var a1 = 6*Math.random() + 1;
var n1 = Math.floor(a1);
var a2 = 6*Math.random() + 1;
var n2 = Math.floor(a2);


function functionToExecute(){

  if(n1 > n2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
    // document.getElementsByClassName("flag")[0].classList.add("flag1");
  }else
  if(n1 < n2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
    // document.getElementsByClassName("flag")[0].classList.add("flag1");
  }else
  if(n1 === n2){
    document.querySelector("h1").innerHTML = "The match is Tie";
    document.getElementsByClassName("flag")[0].classList.add("flag1");
  }

  if(n1 === 1){
    document.getElementsByClassName("img1")[0].src = "1.png";
  }else
  if(n1 === 2){
    document.getElementsByClassName("img1")[0].src = "2.png";
  }else
  if(n1 === 3){
    document.getElementsByClassName("img1")[0].src = "3.png";
  }else
  if(n1 === 4){
    document.getElementsByClassName("img1")[0].src = "4.png";
  }else
  if(n1 === 5){
    document.getElementsByClassName("img1")[0].src = "5.png";
  }else
  if(n1 === 6){
    document.getElementsByClassName("img1")[0].src = "6.png";
  }

  if(n2 === 1){
    document.getElementsByClassName("img2")[0].src = "1.png";
  }else
  if(n2 === 2){
    document.getElementsByClassName("img2")[0].src = "2.png";
  }else
  if(n2 === 3){
    document.getElementsByClassName("img2")[0].src = "3.png";
  }else
  if(n2 === 4){
    document.getElementsByClassName("img2")[0].src = "4.png";
  }else
  if(n2 === 5){
    document.getElementsByClassName("img2")[0].src = "5.png";
  }else
  if(n2 === 6){
    document.getElementsByClassName("img2")[0].src = "6.png";
  }

}
function functionToAgain(){

  var a1 = 6*Math.random() + 1;
  var n1 = Math.floor(a1);
  var a2 = 6*Math.random() + 1;
  var n2 = Math.floor(a2);

  if(n1 > n2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
    // document.getElementsByClassName("flag")[0].classList.add("flag1");
  }else
  if(n1 < n2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
    // document.getElementsByClassName("flag")[0].classList.add("flag1");
  }else
  if(n1 === n2){
    document.querySelector("h1").innerHTML = "The match is Tie";
    document.getElementsByClassName("flag")[0].classList.add("flag1");
  }

  if(n1 === 1){
    document.getElementsByClassName("img1")[0].src = "1.png";
  }else
  if(n1 === 2){
    document.getElementsByClassName("img1")[0].src = "2.png";
  }else
  if(n1 === 3){
    document.getElementsByClassName("img1")[0].src = "3.png";
  }else
  if(n1 === 4){
    document.getElementsByClassName("img1")[0].src = "4.png";
  }else
  if(n1 === 5){
    document.getElementsByClassName("img1")[0].src = "5.png";
  }else
  if(n1 === 6){
    document.getElementsByClassName("img1")[0].src = "6.png";
  }

  if(n2 === 1){
    document.getElementsByClassName("img2")[0].src = "1.png";
  }else
  if(n2 === 2){
    document.getElementsByClassName("img2")[0].src = "2.png";
  }else
  if(n2 === 3){
    document.getElementsByClassName("img2")[0].src = "3.png";
  }else
  if(n2 === 4){
    document.getElementsByClassName("img2")[0].src = "4.png";
  }else
  if(n2 === 5){
    document.getElementsByClassName("img2")[0].src = "5.png";
  }else
  if(n2 === 6){
    document.getElementsByClassName("img2")[0].src = "6.png";
  }

  // n1 = undefined;
  // delete(n1);
  // n2 = undefined;
  // delete(n2);
  // a1 = undefined;
  // delete(a1);
  // a2 = undefined;
  // delete(a2);
  n1,n2 = 0;

}
