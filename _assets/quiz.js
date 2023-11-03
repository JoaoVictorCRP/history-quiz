const questions = [
    {
        question: "What historical event marked the beginning of World War I?",
        options: ["Assassination of Archduke Franz Ferdinand of Austria", "Atomic bomb in Hiroshima and Nagasaki", "German invasion of Italy", "Russian Revolution"],
        correct: "Assassination of Archduke Franz Ferdinand of Austria"
    },
    {
        question: "Which Roman emperor appointed his horse as a senator?",
        options: ["Julius Caesar", "Nero", "Caligula", "Tiberius"],
        correct: "Caligula"
    },
    {
        question: "In what year did the Ottoman Turks took over Constantinople?",
        options: ["1453", "1399", "1578", "1691"],
        correct: "1453"
    },
    {
        question: "Which country financed Christopher Columbus's voyage to America?",
        options: ["Portugal", "France", "Spain", "Netherlands"],
        correct: "Spain"
    },
    {
        question: "Who was the pope when the Protestant Reformation occurred?",
        options: ["Leo X", "Pius XII", "Urban II", "Alexander VI"],
        correct: "Leo X"
    },
    {
        question: "Which was the first European country to have contact with Japan?",
        options: ["Portugal", "Spain", "Netherlands", "Russia"],
        correct: "Portugal"
    },
    {
        question: "After the death of Joseph Stalin, who became the new leader of the USSR?",
        options: ["Mikhail Gorbachev", "Nikita Khrushchev", "Leon Trotsky", "Vladimir Lenin"],
        correct: "Mikhail Gorbachev"
    },
    {
        question: "Which Latin American empire was devastated by Francisco Pizarro?",
        options: ["Inca", "Tupi", "Aztec", "Lakota"],
        correct: "Inca"
    },
    {
        question: "Mesopotamia became the first great civilization due to the two important rivers that flowed through it. Those rivers are:",
        options: ["Nile & Tigris", "Seine & Euphrates", "Thames & Uruk", "Tigris & Euphrates"],
        correct: "Tigris & Euphrates"
    },
    {
        question: "Which explorer was responsible for discovering the maritime route to the Indies?",
        options: ["Vasco da Gama", "Ferdinand Magellan", "Horatio Nelson", "Marco Polo"],
        correct: "Vasco da Gama"
    }
];

let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let buttons = document.getElementsByTagName('button')
let title = document.querySelector('#title');
let img = document.querySelector('#image');
let correctSound = document.getElementById("correctSound");
let wrongSound = document.getElementById("wrongSound");
let i = 0;
let correct = 0;



function next () {   //Função para passar para a próxima pergunta

    if(i < questions.length) {
        title.innerText = `${i+1}. ${questions[i].question}`;
        img.innerHTML = `<img  src="./_assets/_imagens/${i}.jpg">`
        a.innerText = `${questions[i].options[0]}`;
        b.innerText = `${questions[i].options[1]}`;
        c.innerText = `${questions[i].options[2]}`;
        d.innerText = `${questions[i].options[3]}`;
        i++;

        for (let button of buttons){
            button.removeEventListener('click', checkAnswer); //Removendo EventListeners
            button.addEventListener('click', checkAnswer); // Repondo EventListeners
        }
        console.log(correct)
    } else {

        if(correct>7){
            msg='You rock!'
        } else if (correct>3){
            msg='Very good!'
        } else {
            msg='You can do better than this!'
        }
        alert(`You have answered ${correct} questions correctly, ${msg}`)
        document.location.href = 'index.html'

    }
}

function checkAnswer() { // checar resposta e repetir a função next

    let selectedAnswer = this.innerText; // Obtém a resposta selecionada
    let correctAnswer = questions[i-1].correct;

    if (selectedAnswer === correctAnswer) {
        correct++;
        correctSound.play()
    } else {     wrongSound.play() }

    next();
}


for (let button of buttons) {
    button.addEventListener('click', checkAnswer);
}

next()