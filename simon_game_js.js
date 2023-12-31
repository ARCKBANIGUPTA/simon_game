let gameSeq=[];
let userSeq=[];

let btns=["red","orange","purple","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function (){
    if (started==false){
        console.log("game has started");
        started = true;
         
    }
    levelUp();
    
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },150);
}



function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // random button 
    let ranIdx = Math.floor(Math.random() * 3);
    let ranBox = btns[ranIdx];
    let randbtn = document.querySelector(`.${ranBox}`);
    btnflash(randbtn);
    gameSeq.push(ranBox);
    console.log(gameSeq);
    
}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML=`game over! Your score was <b>${level}</b> <br>. Press any key to start`;
        
        reset();
    }
}
function btnpress() {
    let btn = this;
    btnflash(btn);
    
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
    
}
let allbtns = document.querySelectorAll(".btns");
for (bt of allbtns){
    bt.addEventListener("click",btnpress);
}
function reset() {
    gameSeq=[];
    userSeq = [];
    started = 0;
    level=0;
}
