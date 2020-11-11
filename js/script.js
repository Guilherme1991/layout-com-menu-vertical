let sand = document.querySelector('.soci');
let change = document.querySelector('.slider');
let click = document.querySelector('.sp-one');
let clickTwo = document.querySelector('.sp-two');
let clickThree = document.querySelector('.sp-three');

let ant = document.querySelector('.ant');
let prev = document.querySelector('.prev');

//Funcão na janela que inicializa o motor da iteração!
window.onload = ()=> mudaUm();

//Troca texto dentro de cada banner!
let changeText = document.querySelectorAll('.change');

//Temporizador!
let count = 6000;

click.addEventListener('click', () =>{
    change.style.background="url(./img/doctor-01.jpg)";
    click.setAttribute('style', 'color: #ec0928');
    clickTwo.setAttribute('style', 'color: #f1f1f1');
    clickThree.setAttribute('style', 'color: #f1f1f1');
    changeText[0].style.display="block";
    changeText[1].style.display="none";
    changeText[2].style.display="none";
})
clickTwo.addEventListener('click', ()=>{
    change.style.background="url(./img/doctor-02.jpg)";
    click.setAttribute('style', 'color: #f1f1f1');
    clickTwo.setAttribute('style', 'color: #ec0928');
    clickThree.setAttribute('style', 'color: #f1f1f1');
    changeText[0].style.display="none";
    changeText[1].style.display="block";
    changeText[2].style.display="none";
})
clickThree.addEventListener('click', ()=>{
    change.style.background="url(./img/doctor-03.jpg)";
    click.setAttribute('style', 'color: #f1f1f1');
    clickTwo.setAttribute('style', 'color: #f1f1f1');
    clickThree.setAttribute('style', 'color: #ec0928');
    changeText[0].style.display="none";
    changeText[1].style.display="none";
    changeText[2].style.display="block";
})
sand.addEventListener('click', ()=>{
    document.querySelector('.czo').classList.toggle('cruze');
    document.querySelector('.ocult').classList.toggle('non');
    document.querySelector('.cztw').classList.toggle('cruzetwo');

    document.querySelector('.nav').classList.toggle('large');
});
function mudaUm(){
    change.style.background="url(./img/doctor-01.jpg)";
    change.style.transition="all .3s";
    changeText[0].style.display="block";
    changeText[1].style.display="none";
    changeText[2].style.display="none";
    click.setAttribute('style', 'color: #ec0928');
    clickTwo.setAttribute('style', 'color: #f1f1f1');
    clickThree.setAttribute('style', 'color: #f1f1f1');

    setTimeout(mudaDois, count);
}

function mudaDois(){
    change.style.background="url(./img/doctor-02.jpg)";
    change.style.transition="all .3s";
    changeText[0].style.display="none";
    changeText[1].style.display="block";
    changeText[2].style.display="none";
    click.setAttribute('style', 'color: #f1f1f1');
    clickTwo.setAttribute('style', 'color: #ec0928');
    clickThree.setAttribute('style', 'color: #f1f1f1');

    setTimeout(mudaTres, count);
}
function mudaTres(){
    change.style.background="url(./img/doctor-03.jpg)";
    change.style.transition="all .3s";
    changeText[0].style.display="none";
    changeText[1].style.display="none";
    changeText[2].style.display="block";
    click.setAttribute('style', 'color: #f1f1f1');
    clickTwo.setAttribute('style', 'color: #f1f1f1');
    clickThree.setAttribute('style', 'color: #ec0928');

    setTimeout(mudaUm, count);
}
//Increment and decrement at buttons slider in global level!
let decrement = 2;
let increment = 2;
ant.addEventListener('click', ()=> {
    change.style.background=`url(./img/doctor-0${decrement--}.jpg)`;
    if(decrement === 1) {
    changeText[0].style.display="block";
    changeText[1].style.display="none";
    changeText[2].style.display="none";
    }
    else if(decrement === 2) {
        changeText[0].style.display="none";
        changeText[1].style.display="block";
        changeText[2].style.display="none";
    }
    else if(decrement === 3) {
        changeText[0].style.display="none";
        changeText[1].style.display="none";
        changeText[2].style.display="block";
    }
    else if(decrement < 1){
        decrement = 3;
    }
    
  })
prev.addEventListener('click', ()=> {
    change.style.background=`url(./img/doctor-0${decrement++}.jpg)`;
    changeText[increment-1].style.display="block";
    if(decrement > 3){
        decrement = 1;
    }
})
//Foi aplicado todo o meu conhecimento em JS de maneira funcional nesse slide e nos demais também!