// creating two variables to track userscore and compscore 
let userscore=0;
let computerscore=0;
// we have to also know that whether user is pressing which button , either presing rock,paper or scissors
const choice=document.querySelectorAll(".choice");

//accessing message 
let msg=document.querySelector("#msg");

//accessing userscore and computerscore
const userScore=document.querySelector("#userscore");
const compScore=document.querySelector("#computerscore")


// foreach loop will give me how many times which choice is clicked
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //stores the id in this , thereby letting us know user option
        let userchoiceid=choice.getAttribute("id");
        playGame(userchoiceid);
    })
})

//creating new function to create computer response 
const playGame=(userchoiceid) =>
{
    console.log("user choice = "+userchoiceid);
    //generate computer choice : we will create new function so that our code is modular as well as we can reuse whenever necessary
    const computerchoice=generatecomputerchoice();
    console.log("computer choice = "+computerchoice);


    //jab dono same kare
    if(userchoiceid===computerchoice)
    {
        //draw game
        drawgame();
    }

    else {
        let userwin=true;
        if(userchoiceid=="rock")
        {
            //either computer can play paper or scissors ; if it was rock ;it will give if-statement
            userwin=computerchoice=="paper"?false:true;

        }
        else if(userchoiceid=="paper")
        {
            userwin=computerchoice=="scissors"?false:true;
        }
        else{
            userwin=computerchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoiceid,computerchoice);
    }
}
const generatecomputerchoice=()=>{
    //either computer must return rock,paper or scissors 
    const options=["rock","paper","scissors"];
    //logic : to generate random comp values , we are going to take help of class Math , and inside that we are going to use random method
    const random=Math.floor(Math.random()*3);
    //it is use to generate random number from zero to one
    //ab hamare array ka index 0 se 2 hai , so by math.random()*3 , considering whole numbers only ie. 2.98 treated as 2 only ; we can generate random indexes in this array
    //to remove digits after decimal , use Math.floor method
    return options[random];
}

//draw game function
const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

//creating new function to display winner
const showwinner=(userwin,userchoiceid,computerchoice)=>{
    //backend console display here
    if(userwin)
    {
        userscore++;
        userScore.innerText=userscore;
        console.log("You win");
        msg.innerText="You win .Your "+userchoiceid+" beats "+computerchoice;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        if(userscore>2)
        {
            alert("You won the game !");
            compScore.innerText=0;
            userScore.innerText=0;
            msg.innerText="Play move";
            msg.style.backgroundColor="blue";
            computerscore=0;
            userscore=0;
        }
    }
    else{
        computerscore++;
        compScore.innerText=computerscore;
        console.log("You lose");
        msg.innerText="You lose "+computerchoice+" beats your "+userchoiceid;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        if(computerscore>2)
        {
            alert("Computer won the game !");
            compScore.innerText=0;
            userScore.innerText=0;
            msg.innerText="Play move";
            msg.style.backgroundColor="blue";
            computerscore=0;
            userscore=0;
        }
    }
    //displaying on screen ke liye check line 8 
}