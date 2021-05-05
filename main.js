//DEFINE OPTIONS AND CHOISES
let choices = ['piedra', 'papel', 'tijera'];
let index_user, index_computer;
let result_label = document.getElementById('result_label');
let show_selections = document.getElementById('show_selections');
let options = document.getElementById('options');

let option_user_display = document.getElementById('user-choise');
let option_computer_display = document.getElementById('computer-choise');


// CHOOSE AN OPTION
const getOption = (selectedOption) => {
    let userChoise = selectedOption;
    index_user = choices.indexOf(userChoise);
    index_computer = Math.floor(Math.random() * 3);
    option_user_display.src = setImage(index_user);
    option_computer_display.src = setImage(index_computer);
    showSelections(index_user, index_computer);
    gameLogic();
}
// CHOOSE AN IMAGE
const setImage = (index) => {
    let imgSrc;
    switch (index) {
        case 0:
            imgSrc = 'img/piedra.svg';
            break;
        case 1:
            imgSrc = 'img/papel.svg';
            break;
        default:
            imgSrc = 'img/tijera.svg';
    }
    return imgSrc;
}


//SET THE RESULT DISPLAY
const showSelections = (user_option_index, computer_option_index) => {
    //SELECT BUTTONS FROM THE HTML
    let option_user_display = document.getElementById('user-choise');
    let option_computer_display = document.getElementById('computer-choise');
    let selections_div = document.createElement('div');
    //ADD SRC STYLES
    option_user_display.src = createButton(user_option_index);
    option_computer_display.src = createButton(computer_option_index);
    //ADD INPUTS TO THE SHOW SECTION
    selections_div.appendChild(option_user_display);
    selections_div.appendChild(option_computer_display);
    show_selections.appendChild(selections_div);
    //ADDING STYLES
    selections_div.style.display = 'flex';
    selections_div.style.justifyContent = 'space-between';
    selections_div.style.flexDirection = 'row';
    selections_div.style.flexWrap = 'wrap';
    selections_div.style.justifyContent = 'center';
    show_selections.style.display = 'flex';
    show_selections.style.flexDirection = 'column';
    options.style.display = "none";
}
//RETURNS THE SOURCE FOR A INPUT IMAGE
const createButton = (index_choice) => {
    let src_image;
    if (index_choice === 0) {
        src_image = "img/piedra.svg";
    } else if (index_choice === 1) {
        src_image = "img/papel.svg";
    } else {
        src_image = "img/tijera.svg";
    };
    return src_image;
}

//GAME LOGIC
const gameLogic = () => {
    console.log(index_computer, index_user);
    if (index_computer === index_user){
        console.log('empate!');
        result_label.innerText = "Es un empate!"
    } else {
        switch (index_user){
            case 0:
                checkResult(index_computer);
                break;
            case 1:
                if(index_computer > index_user){
                    console.log('perdiste');
                    result_label.innerText = "Perdiste!";
                    } else {
                    console.log('ganaste!');
                    result_label.innerText = "Ganaste!";
                }
                break;
            case 2:
                if(index_computer === 1){
                    index_computer = 2;
                    checkResult(index_computer);
                }else{
                    checkResult(index_computer);
                }
                break;
        }
    }
}
//CHECKING RESULT
const checkResult = (index) => {
    if (index === 2) {
        console.log('ganaste!');
        result_label.innerText = "Ganaste!";
    } else {
        console.log('perdiste!');
        result_label.innerText = "Perdiste!";
    }
}
//RESET OPTIONS
const resetGame = () => {
    options.style.display = "flex";
    show_selections.style.display = 'none';
}