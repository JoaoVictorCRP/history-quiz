const questions = [
    {
        question: "Quem foi o 3º Presidente do Brasil?",
        options: ["Getúlio Vargas","Prudente de Moraes", "Juscelino Kubitschek", "Deodoro da Fonseca"],
        correct: "Prudente de Moraes"
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
let i = 0;
let correct = 0;

function next () {   

    //Removendo ouvintes de evento anteriores(para que não some mais corretas que o necessário)
    for (let button in buttons) {
        button.removeEventListener('click', checkAnswer)
    }


    if(i < questions.length) {
        title.innerText = questions[i].question;
        img.innerHTML = `<img  src="./_assets/_imagens/${i}.jpg">`
        a.innerText = questions[i].options[0];
        b.innerText = questions[i].options[1];
        c.innerText = questions[i].options[2];
        d.innerText = questions[i].options[3];
        i++;
    } else {
        alert(`Você acertou um total de ${correct} Perguntas, Muito bem!`)
        //Questionário terminou kkkk
    }
    for (let button of buttons){
        button.addEventListener('click', checkAnswer) 
    }
}


for (let button of buttons){
    button.addEventListener('click',next)
}

 /// AINDA NÃO TESTEI... TÁ DANDO CERTO?
function checkAnswer() {
    let selectedAnswer = this.innerText //Obtendo a resposta selecionada
    let correctAnswer = questions[i - 1].correct;

    if (selectedAnswer === correctAnswer) {
        correct++; //Está dando 11??
    }
}


next()