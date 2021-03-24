let options = ['piedra', 'papel', 'tijera'];
let index_user, index_computer;
let option_user_display = document.getElementById('user-choise');
let option_computer_display = document.getElementById('computer-choise');

/*CHOISES*/
const getOption = (selectedOption) => {
    let userChoise = selectedOption;
    index_user = options.indexOf(userChoise);
    index_computer = Math.floor(Math.random() * 3);
    option_user_display.src = setImage(index_user);
    option_computer_display.src = setImage(index_computer);

    gameLogic();
}
/*CHOISE IMAGE*/
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

/*GAME LOGIC*/
const checkResult = (index) => {
    if (index === 2) {
        console.log('ganaste!');
    } else {
        console.log('perdiste!');
    }
}

const gameLogic = () => {
    console.log(index_computer, index_user);
    if (index_computer === index_user){
        console.log('empate!');
    } else {
        switch (index_user){
            case 0:
                checkResult(index_computer);
                break;
            case 1:
                if(index_computer > index_user){
                    console.log('perdiste');
                    } else {
                    console.log('ganaste!');
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