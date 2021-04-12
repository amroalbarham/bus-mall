'use strict';


let continer = document.getElementById('container');
let leftImageelement = document.getElementById('left-image');
let middleImageelement = document.getElementById('middle-image');
let rightImageelement = document.getElementById('right-image');


let leftImageindex;
let rightImageindex;
let middleImageindex;

let voting = 0;
let maxVoting = 25;



Busmall.holeoFbusmall = [];

function Busmall(name, img) {
    this.name = name;
    this.img = img;
    this.votes = 0;
    this.seen = 0;
    Busmall.holeoFbusmall.push(this);
}

new Busmall('bag', 'img/bag.jpg');//0
new Busmall('banana', 'img/banana.jpg');//1
new Busmall('bathroom', 'img/bathroom.jpg');//2
new Busmall('boots', 'img/boots.jpg');//3
new Busmall('breakfast', 'img/breakfast.jpg');//4
new Busmall('bubblegum', 'img/bubblegum.jpg');//5
new Busmall('chair', 'img/chair.jpg');//6
new Busmall('cthulhu', 'img/cthulhu.jpg');//7
new Busmall('dog-duck', 'img/dog-duck.jpg');//8
new Busmall('dragon', 'img/dragon.jpg');//9
new Busmall('pen', 'img/pen.jpg');//10
new Busmall('pet-sweep', 'img/pet-sweep.jpg');//11
new Busmall('scissors', 'img/scissors.jpg');//12
new Busmall('shark', 'img/shark.jpg');//13
new Busmall('sweep', 'img/sweep.png');//14
new Busmall('tauntaun', 'img/tauntaun.jpg');//15
new Busmall('unicorn', 'img/unicorn.jpg');//16
new Busmall('usb', 'img/usb.gif');//17
new Busmall('water-can', 'img/water-can.jpg');//18
new Busmall('wine-glass', 'img/wine-glass.jpg');//19

console.log(Busmall.holeoFbusmall);


function generatRandomindex() {
    return Math.floor(Math.random() * Busmall.holeoFbusmall.length);
}
// let x=generatRandomindex();
// console.log(x);

function renderThreeimage(){

    leftImageindex = generatRandomindex();
    middleImageindex = generatRandomindex();
    rightImageindex = generatRandomindex();
    
    
    while (leftImageindex === middleImageindex || leftImageindex === rightImageindex || middleImageindex === rightImageindex) {
        leftImageindex = generatRandomindex();
        rightImageindex = generatRandomindex();
    }
    
    leftImageelement.src = Busmall.holeoFbusmall[leftImageindex].img;
    middleImageelement.src = Busmall.holeoFbusmall[middleImageindex].img;
    rightImageelement.src = Busmall.holeoFbusmall[rightImageindex].img;
}
renderThreeimage();


continer.addEventListener('click',userClick);

// leftImageelement.addEventListener('click', userClick);
// middleImageelement.addEventListener('click', userClick);
// rightImageelement.addEventListener('click', userClick);

function userClick(event) {
    console.log(event.target.id);

    voting++;
    console.log(voting);


    if (voting < maxVoting) {
        if (event.target.id === 'left-image') {

            Busmall.holeoFbusmall[leftImageindex].votes++;
            Busmall.holeoFbusmall[leftImageindex].seen++;
            Busmall.holeoFbusmall[middleImageindex].seen++;
            Busmall.holeoFbusmall[rightImageindex].seen++;
        } else if (event.target.id === 'middle-image') {

            Busmall.holeoFbusmall[leftImageindex].seen++;
            Busmall.holeoFbusmall[middleImageindex].votes++;
            Busmall.holeoFbusmall[middleImageindex].seen++;
            Busmall.holeoFbusmall[rightImageindex].seen++;
        }
        else if (event.target.id === 'right-image'){
            Busmall.holeoFbusmall[leftImageindex].seen++;
            Busmall.holeoFbusmall[middleImageindex].seen++;
            Busmall.holeoFbusmall[rightImageindex].votes++;
            Busmall.holeoFbusmall[rightImageindex].seen++;
        }else{
            
        }
        renderThreeimage();
    } else {
        let  listOfall = document.getElementById('list');
        listOfall.addEventListener('click',userClickbotton);

        function userClickbotton(event){

            let list = document.getElementById('finalList');
            let lsitOfbusmall;
            for (let i = 0; i < Busmall.holeoFbusmall.length; i++) {
                let lsitOfbusmall = document.createElement('li');
                list.appendChild(lsitOfbusmall);
                lsitOfbusmall.textContent = `${Busmall.holeoFbusmall[i].name} had ${Busmall.holeoFbusmall[i].votes} votes, and was seen ${Busmall.holeoFbusmall[i].seen} times`;
    
            }
            
            
            listOfall.textContent=lsitOfbusmall;
        }
        continer.removeEventListener('click',userClick);
        // leftImageelement.removeEventListener('click',userClick);
        // rightImageelement.removeEventListener('click',userClick);
        // middleImageelement.removeEventListener('click',userClick);

    }
}






