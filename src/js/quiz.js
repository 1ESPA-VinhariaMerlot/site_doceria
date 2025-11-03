document.addEventListener('DOMContentLoaded', () => {
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById('proximo');
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');

    const questions = [
        "Qual seu nível favorito de doçura? De: 1-5 (Sendo 1-pouco doce; 5-extremamente doce)",
        "Você prefere doces com fruta ou sem fruta? (Se preferir com, diga-nos qual!)",
        "Você prefere doces cremosos, crocantes ou macios??",
        "Tem alguma restrição alimentar (ex: sem lactose, sem glúten, vegano)??",
        "Você gosta de experimentar novos sabores sempre que lança algo novo?(Deixe seu email e telefone para conseguirmos lhe contactar para eventos da casa!",
    ];

    let pertuntas = 0;
    const respostas = [];

    function mostrarPergunta() {
        if (pertuntas < questions.length) {
            pergunta.textContent = questions[pertuntas];
            resposta.value = ''; // Limpa a resposta anterior
            mensagem.textContent = '';
        } else {
            mostrarResultado();
        }
    }

    function nextQuestion() {
        const respstaAtual = resposta.value.trim();
        if (respstaAtual === '') {
            mensagem.textContent = 'Por favor, digite sua resposta.';
            return;
        }
        respostas.push(respstaAtual);
        pertuntas++;
        mostrarPergunta();
    }

    function  mostrarResultado() {
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML = '';

        questions.forEach((question, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${question}</strong><br>
                                  Sua resposta: <span>${respostas[index]}</span>`;
            listaResultado.appendChild(listItem);
        });
    }

    function reiniciartQuiz() {
        pertuntas = 0;
        respostas.length = 0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    proximaPergunta.addEventListener('click', nextQuestion);
    reiniciarBotao.addEventListener('click', reiniciartQuiz);

    mostrarPergunta(); // Inicia o quiz na primeira pergunta
});