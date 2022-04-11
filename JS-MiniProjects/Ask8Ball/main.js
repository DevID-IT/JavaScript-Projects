const ballImg = document.querySelector('img');
const inputQuestion = document.querySelector('input');
const answerPlace = document.querySelector('.answer');
const errorPlace = document.querySelector('.error');

const answersArr = ['Yes!', 'No.', 'Maybe.', 'Hard to say...', 'You must think about it!', 'Trust your intuition!', "Chill out, it will be ok!"];

// add class to the input which start a animation
const ballMove = () => {
    ballImg.classList.add('shake-animaton');
    setTimeout(checkInput, 2000);
}

// check what user input into it, conditions
const checkInput = () => {
    if(inputQuestion.value !== '' && inputQuestion.value.slice(-1) === '?'){
        generateAnswer();
        errorPlace.textContent = '';
    }else if(inputQuestion.value !== '' && inputQuestion.value.slice(-1) !== '?'){
        errorPlace.textContent = "A question must be ended with '?'"
        answerPlace.textContent = '';
    }else{
        errorPlace.textContent = "Write a question into the input!"
        answerPlace.textContent = '';
    }
    ballImg.classList.remove('shake-animaton');    
}

//generate answer
const generateAnswer = () => {
    const number = Math.floor(Math.random() * answersArr.length);
    answerPlace.innerHTML = `<span>Answer:</span> ${answersArr[number]}`;
}

ballImg.addEventListener('click', ballMove);
