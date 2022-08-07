function player1(){
    swal("Player 1 Keys!", "Forward = Right Key \n Back = Left Key \n  Punch = Up Key");
}
function player2(){
    swal("Player 2 Keys!", "Forward = A \n Back = D \n  Punch = W \n Kick = S");
}
count = 50
amount = 50
document.getElementById("character1")
document.getElementById("character2")
window.onkeydown=function(){
    console.log(event.keyCode);
    if(event.keyCode===39){    
     document.getElementById("character1").src="./images/p1-run.gif"
     amount  = amount  + 50
      character1.style.left = amount  + "px";
     setTimeout(function () {
            character1.src = "./images/p1-stand.gif";
          }, 1000);    
        }
        if(event.keyCode===37){   
             document.getElementById("character1").src="./images/p1-run.gif"
             amount  = amount  -50
              character1.style.left = amount  + "px";
             setTimeout(function () {
                    character1.src = "./images/p1-stand.gif";
                  }, 1000);    
        
    }
    if(event.keyCode===38){
        document.getElementById("character1").src = "./images/p1-punch.gif"
      setInterval(function(){
        character1.src="./images/p1-stand.gif"
      },2000);
    }
    // window.onkeydown=function(){
        if(event.keyCode===65){    
            document.getElementById("character2").src="./images/p2-run.gif"
            count = count + 50
            character2.style.right = count + "px";
            setTimeout(function () {
                character2.src = "./images/p2-stand.gif";
            }, 1000);    
        }
        else if(event.keyCode===68){   
            document.getElementById("character2").src="./images/p2-run.gif"
            count = count -50
            character2.style.right = count + "px";
            setTimeout(function () {
                character2.src = "./images/p2-stand.gif";
            }, 1000);    
            
        }
        else if(event.keyCode===87){
            document.getElementById("character2").src = "./images/p2-power.gif"
            setInterval(function(){
                character2.src="./images/p2-stand.gif"
            },2000);
        }
        else if(event.keyCode===83){
            document.getElementById("character2").src = "./images/p2-kick.gif"
            setInterval(function(){
                character2.src="./images/p2-stand.gif"
            },1000);
        }
        
    }
// }


