const questions = [
    {
        question: "Qual evento histórico marcou o início da Primeira Guerra Mundial?",
        options: ["Assassinato do Arquiduque Francisco Ferdinando da Áustria","Bomba atômica em Hiroshima e Nagasaki", "Invasão Alemã na Itália", "Revolução Russa"],
        correct: "Assassinato do Arquiduque Francisco Ferdinando da Áustria"
    },
    {
        question: "Qual imperador romano nomeou o próprio cavalo ao senado?",
        options: ["Júlio César", "Nero", "Calígula", "Tibério"],
        correct: "Calígula"
    },
    {
        question: "Em que ano se deu a tomada de Constantinopla pelos Turcos-Otomanos?",
        options: ["1453", "1399", "1578", "1691"],
        correct: "1453"
    },
    {
        question: "Qual país financiou a viagem de Cristóvão Colombo a América?",
        options: ["Portugal", "França", "Espanha", "Holanda"],
        correct: "Espanha"
    },
    {
        question: "Quem era o papa quando ocorreu a reforma protestante?",
        options: ["Leão X", "Pio XII", "Urbano II", "Alexandre VI"],
        correct: "Leão X"
    },
    {
        question: "Qual foi o primeiro país europeu a ter contato com o Japão?",
        options: ["Portugal", "Espanha", "Holanda", "Rússia"],
        correct: "Portugal"
    },
    {
        question: "Após a morte de Joseph Stalin, quem assumiu o poder na URSS?",
        options: ["Mikhail Gorbachev", "Nikita Kruschev", "Vladmir Khozov", "Viatscheslav Molotov"],
        correct: "Mikhail Gorbachev"
    },
    {
        question: "Qual império latino-americano foi arrasado por Francisco Pizarro?",
        options: ["Inca", "Tupi", "Asteca", "Lakota"],
        correct: "Inca"
    },
    {
        question: "A mesopotâmia se desenvolveu graças aos importantes rios que a banhavam, Quais eram estes rios?",
        options: ["Nilo & Tigre", "Senna & Eufrates", "Tâmisa & Uruk", "Tigres & Eufrates"],
        correct: "Tigres & Eufrates"
    },
    {
        question: "Qual explorador foi responsável pela descoberta da rota marítima que levava ás Índias?",
        options: ["Vasco da Gama", "Fernão de Magalhães", "Horatio Nelson", "Eusébio de Queirós"],
        correct: "Vasco da Gama"
    },
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
        title.innerText = questions[i].question;
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
        alert(`Você acertou um total de ${correct} Perguntas, Muito bem!`)
        //Fim do questionário
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