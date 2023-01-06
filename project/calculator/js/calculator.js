// let screen = document.getElementById('screen');
// let buttons = document.querySelectorAll('button');
// let screenValue = "";
// for (item of buttons) {
//     item.addEventListener('click', (f) => {
//         buttonText = f.target.innerText;
//         console.log('button text is', buttonText);
//         if (buttonText == 'X') {
//             buttonText = "*";
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screen.value = '';
//             screenValue = '';
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else{
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })


// }













// // f= arrow fuction
// // buttonText(all buttons text) = f.target(this for target to the buttons).innerText;


let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (f) => {
        buttonText = f.target.innerText;
        console.log('button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screen.value = '';
            screenValue = '';
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })


}

// for (item of buttons) {
//     item.addEventListener('click', (f) => {
//         buttonText = f.target.innerText;
//         console.log("button text is", buttonText);
//         if (buttonText == 'X') {
//             buttonText = "*";
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screen.value = '';
//                screenValue = '';
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     })
// }