// alert("Bem-vindo ao Jogo de Perguntas")

// const perguntas =[
//     {
//         pergunta: "Pergunta numero 1\n 1)Opcao A \n 2)Opcao B \n 3)Opcao C",
//         resposta:"a"
//     },
//     {
//         pergunta: "Pergunta numero 2\n 1)Opcao A \n 2)Opcao B \n 3)Opcao C",
//         resposta:"b"
//     },
//     {
//         pergunta: "Pergunta numero 3\n 1)Opcao A \n 2)Opcao B \n 3)Opcao C",
//         resposta:"c"
//     },
//     {
//         pergunta: "Pergunta numero 4\n 1)Opcao A \n 2)Opcao B \n 3)Opcao C",
//         resposta:"a"
//     },
//     {
//         pergunta: "Pergunta numero 5\n 1)Opcao A \n 2)Opcao B \n 3)Opcao C",
//         resposta:"b"
//     }
// ];

// let acertos=0;

// for(let i=0;i<perguntas.length;i++){
//     const resposta =prompt(perguntas[i].pergunta);

//     if(resposta.toLowerCase() === perguntas[i].resposta.toLowerCase()){
//         acertos++;
//     }
// }

// document.getElementById("msg").innerHTML =(`Você Acertou ${acertos}de ${perguntas.length} Perguntas`);


// const perguntas = [
//     {
//         pergunta: "Pergunta número 1:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
//         resposta: "a"
//     },
//     {
//         pergunta: "Pergunta número 2:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
//         resposta: "b"
//     },
//     {
//         pergunta: "Pergunta número 3:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
//         resposta: "c"
//     },
//     {
//         pergunta: "Pergunta número 4:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
//         resposta: "a"
//     },
//     {
//         pergunta: "Pergunta número 5:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
//         resposta: "b"
//     }
// ];

// let acertos = 0;
// const totalPerguntas = perguntas.length;

// console.log("Bem-vindo ao Jogo de Perguntas!");

// for (let i = 0; i < totalPerguntas; i++) {
//     let respostaUsuario;
//     let entradaValida = false;

//     while (!entradaValida) {
//         respostaUsuario = prompt(perguntas[i].pergunta).toLowerCase();
//         if (respostaUsuario === 'a' || respostaUsuario === 'b' || respostaUsuario === 'c') {
//             entradaValida = true;
//         } else {
//             alert("Por favor, digite uma opção válida (a, b ou c).");
//         }
//     }

//     if (respostaUsuario === perguntas[i].resposta) {
//         alert("Você acertou!");
//         acertos++;
//     } else {
//         alert(`Você errou. A resposta correta era: ${perguntas[i].resposta.toUpperCase()}.`);
//     }
// }

// document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${totalPerguntas} perguntas.`;

/* O QUE FOI APRENDIDO
  -DECLARAÇÃO
  -VARIAVEIS
  -TIPOS DE DADOS(TRUE,FALSE) 
  -ARRAY
  -METODOS(LENGTH,toLowerCase,toUpperCase,Alert,console)
  -PROPRIEDADES (pergunta,resposta)
  -REPETIÇÃO COM FOR E WHILE
  -CONDICIONAL COM IF/ELSE
  -OPERADORES || (ou) === (comparação)
  -STRING LITERAIS
  -DOM 

*/



/* COM FUNÇÃO */

function Quiz() {
    const perguntas = [
        {
            pergunta: "Pergunta número 1:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
            resposta: "a"
        },
        {
            pergunta: "Pergunta número 2:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
            resposta: "b"
        },
        {
            pergunta: "Pergunta número 3:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
            resposta: "c"
        },
        {
            pergunta: "Pergunta número 4:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
            resposta: "a"
        },
        {
            pergunta: "Pergunta número 5:\n(a) Opção A\n(b) Opção B\n(c) Opção C",
            resposta: "b"
        }
    ];

    let acertos = 0;
    const totalPerguntas = perguntas.length;

    console.log("Bem-vindo ao Jogo de Perguntas!");

    for (let i = 0; i < totalPerguntas; i++) {
        let respostaUsuario;
        let entradaValida = false;

        while (!entradaValida) {
            respostaUsuario = prompt(perguntas[i].pergunta).toLowerCase();
            if (respostaUsuario === 'a' || respostaUsuario === 'b' || respostaUsuario === 'c') {
                entradaValida = true;
            } else {
                alert("Por favor, digite uma opção válida (a, b ou c).");
            }
        }

        if (respostaUsuario === perguntas[i].resposta) {
            alert("Você acertou!");
            acertos++;
        } else {
            alert(`Você errou. A resposta correta era: ${perguntas[i].resposta.toUpperCase()}.`);
        }
    }

    document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${totalPerguntas} perguntas.`;
}

// Para executar o quiz, você chamaria a função assim:
Quiz();




/* O QUE FOI APRENDIDO
  -DECLARAÇÃO
  -VARIAVEIS
  -TIPOS DE DADOS(TRUE,FALSE) 
  -ARRAY
  -METODOS(LENGTH,toLowerCase,toUpperCase,Alert,console)
  -PROPRIEDADES (pergunta,resposta)
  -REPETIÇÃO COM FOR E WHILE
  -CONDICIONAL COM IF/ELSE
  -OPERADORES || (ou) === (comparação)
  -STRING LITERAIS
  -DOM 
  -FUNÇÃO

*/