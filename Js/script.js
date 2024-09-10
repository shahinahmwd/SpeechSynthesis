// let teams = ["Shahin", "Sabbir", "Shakib", "Mridul", "Milon", "Dipu"]
// console.log(teams[2]);

// function gratings(memberName) {
//     let utterance = new SpeechSynthesisUtterance(`Wellcome ${memberName}`);
//     speechSynthesis.speak(utterance);

// }
// for (let i = 0; i < teams.length; i++) {
//     gratings(teams[i]);
// }

// let {name, age, area} = {
//     name: "Shahin",
//     age : 20,
//     area: "Dhaka",
// }
// console.log(age);

// let quastion = "What is your location?"

// function gratingsAns() {
//     if (quastion == "What is your Name?") {
//         let utterance = new SpeechSynthesisUtterance(`My Name Is Shahin`);
//         speechSynthesis.speak(utterance);
//     }
//     else if (quastion == "What is your age?") {
//         let utterance = new SpeechSynthesisUtterance(`My age Is 21`);
//         speechSynthesis.speak(utterance);
//     }
//     else if (quastion == "What is your location?") {
//         let utterance = new SpeechSynthesisUtterance(`My location Is Mymensingh`);
//         speechSynthesis.speak(utterance);
//     }
// }
// gratingsAns()


// document 
let input = document.querySelector("input")

let button = document.querySelector("button")
let result = document.querySelector("h3")
button.addEventListener('click',function () {
    if (input.value>=18 ){
        result.innerHTML = "Sabbir biya kora falo"
        result.style.color ="green"
        result.style.background ="#0fa968"
        result.style.fontSize = "50px"
    }
    else{
        result.innerHTML = "Sabbir valo hoya jaw.."
        result.style.color ="red"
        result.style.background ="#0fa968"
        result.style.fontSize = "50px"
    }
})

