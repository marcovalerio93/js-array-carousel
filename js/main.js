//creo array imgs

const imagesArray = [ 
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',

]; 

let slideAttiva = 0;

const itemsDom = document.querySelector('.items');
for (let i = 0; i < imagesArray.length; i++){
    itemsDom.innerHTML += ` <div class="item"> 
                                <img src="${imagesArray[i]}"/>
                            </div>`;
}

const itemList =  document.getElementsByClassName('item');


itemList[slideAttiva].classList.add('show');


//scooro avanti di una

const next = document.querySelector('.next');

next.addEventListener('click',
    function (){
        itemList[slideAttiva].classList.remove('show');
        slideAttiva++;
        itemList[slideAttiva].classList.add('show'); 
    }
)

//scorro indietro di una
const pre = document.querySelector('.pre');

next.addEventListener('click',
    function (){
        itemList[slideAttiva].classList.remove('show');
        slideAttiva--;
        itemList[slideAttiva].classList.add('show'); 
    }
)