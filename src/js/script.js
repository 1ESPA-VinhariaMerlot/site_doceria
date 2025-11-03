//CRIANDO UM SLIDESHOW

//DECLARANDO UM ARRAY DE IMAGENS

let imagens=[
    'src/assets/imgCar1.jpg',
    'src/assets/imgCar2.jpg',
    'src/assets/imgCar3.jpg',
];
//DECLARANDO AS VARAIVEIS
let i =0;
let tempo =5000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){
    document.getElementById('image').src =imagens[i];
    i++;
    if(i == imagens.length){ i=0;}
    setTimeout("slideShow()",tempo)
}
slideShow();


//Função Toogle que faz o menu Hamburguer funcionar

function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("active");
}





function trocar(cor) {
    document.body.style.background = cor;
  }

