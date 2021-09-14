const Inputform = document.querySelector(".quiz-input");

const checkButton = document.getElementById("check-button");

const output = document.getElementById("output");

const correctAnwers = ["90deg", "2", "right","180", "59"];
function calculateScore(){
    let score = 0;
    let index=0;
    const formResults = new FormData(Inputform);
    console.log(formResults.entries())
    let userAnswer = [];
    for(let answer of formResults.entries()){
        userAnswer.push(answer[1])
    }
    if(userAnswer.length === 5){
        for(let index=0; index<5; index++){
            if(correctAnwers[index] === userAnswer[index]){
                score++;
            }
        }
        output.innerText = `Score : ${score}`;
    }
    else{
        output.innerText = ("Please answer all questions, ⚠️No -ve Marking");
    }
}

checkButton.addEventListener("click", calculateScore);