
function requiredFunction1() {
    var p1=prompt("Enter Player1 Name ");
    if (p1 == "") {
      requiredFunction1();
    }
  }
  requiredFunction1();

function requiredFunction2() {
    var p2=prompt("Enter Player2 Name ");
    if (p2 == "") {
      requiredFunction2();
    }
  }
  requiredFunction2();

var p1_dice=document.getElementById('pla_1');
if (p1==null) {p1="Player 1"}
else p1_dice.innerHTML=p1;

var p2_dice=document.getElementById('pla_2');
//console.log(p2_dice);
if (p2==null) {p2="Player 2"}
else p2_dice.innerHTML=p2;

var randomNumber1=Math.floor((Math.random())*6)+1;
// console.log(randomNumber1);
var randomimage='dice'+randomNumber1+'.png';
// console.log(randomimage);
var imagesource="images/"+randomimage;
// console.log(imagesource);
var img1=(document.querySelectorAll('img')[0]);
// console.log(img1);
img1.setAttribute('src',imagesource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var imagesource2='images/dice'+randomNumber2+'.png';
var img2=(document.querySelectorAll('img')[1]);
// console.log(img2)
img2.setAttribute('src',imagesource2);

var win=document.querySelectorAll('h2')[0];
var display;
// console.log(win);
    if(randomNumber1>randomNumber2)
        {
            display=p1+"  wins."
        }
    else if(randomNumber1==randomNumber2)
        {
            display="Draw"
        }    
    else{
        display=p2+" wins."
    }   
    
win.innerHTML=display;    
