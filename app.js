let gameSeq = [] ;
let userSeq = [] ;

let btns = ["red", "yellow", "green", "purple"] ;

let h2 = document.querySelector("h2") ;

let started = false ;
let level = 0 ;

//step 1
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started") ;
        started = true ;
    }
    levelUp() ;
})

//step 2
function gameFlash(btn){
    btn.classList.add("flash") ;
    setTimeout(function(){
        btn.classList.remove("flash") ;
    },250) ;
}

function userFlash(btn){
    btn.classList.add("userflash") ;
    setTimeout(function(){
        btn.classList.remove("userflash") ;
    },250) ;
}

function levelUp(){
    userSeq = [] ;
    level ++ ;
    h2.innerText = `Level ${level}` ;

    let ranInd = Math.floor(Math.random()*3) ;
    let randColor = btns[ranInd] ;
    let randbtn = document.querySelector(`.${randColor}`) ;
    gameSeq.push(randColor) ;
    console.log(gameSeq)
    gameFlash(randbtn) ;
}

//step 3
function btnPress(){
    let btn = this ;
    userFlash(btn) ;

    let userColor = btn.getAttribute("id") ;
    console.log(userColor) ;
    userSeq.push(userColor) ;

    checkAns(userSeq.length-1) ;
}

let allBtns = document.querySelectorAll(".btn") ;
for(btn of allBtns){
    btn.addEventListener("click",btnPress) ;
}

//step 4 
function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000) ;
        }
        console.log("Same value") ;
    }else{
        h2.innerHTML = `Game Over! Your score was<b>${level}</b> <br>Press any key to start` ;
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white" ;
        },250) ;
        reset() ;
    }
}

//step 5 
function reset()
{
    started = false ;
    userSeq = [] ;
    gameSeq = [] ;
    level = 0;
}