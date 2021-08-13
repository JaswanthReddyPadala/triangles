const Inputform = document.querySelector(".quiz-input");

const checkButton = document.getElementById("check-button");

const output = document.getElementById("output");

const correctAnwers = ["90deg", "2", "right","180", "59"];
function calculateScore(){
    let score = 0;
    let index=0;
    const formResults = new FormData(Inputform);
    for(let answer of formResults.entries()){
        if(answer[1] == correctAnwers[index]){
            score++;
        }
        index++;
    }
    output.innerText = `Score : ${score}`;
}

checkButton.addEventListener("click", calculateScore);