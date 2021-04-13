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
// let norepetArrnew = [];
// let norepetArrold = [];
let votesArr = [];
let namesArr = [];
let seenArr = [];
let allOfimages = [];



Busmall.holeoFbusmall = [];

function Busmall(name, img) {
    this.name = name;
    this.img = img;
    this.votes = 0;
    this.seen = 0;
    Busmall.holeoFbusmall.push(this);
    namesArr.push(this.name);
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

function renderThreeimage() {


    leftImageindex = generatRandomindex();
    middleImageindex = generatRandomindex();
    rightImageindex = generatRandomindex();


    while (leftImageindex === middleImageindex || leftImageindex === rightImageindex || middleImageindex === rightImageindex || allOfimages.includes(leftImageindex) || allOfimages.includes(middleImageindex || allOfimages.includes(rightImageindex))) {
        leftImageindex = generatRandomindex();
        rightImageindex = generatRandomindex();
    }
    // norepetArrold = [];
    // norepetArrold.push(leftImageindex);
    // norepetArrold.push(middleImageindex);
    // norepetArrold.push(rightImageindex);
    // console.log('old', norepetArrold);
    allOfimages = [];
    // for(let i=0;i<norepetArrnew.length;i++){

    // }

    leftImageelement.src = Busmall.holeoFbusmall[leftImageindex].img;
    middleImageelement.src = Busmall.holeoFbusmall[middleImageindex].img;
    rightImageelement.src = Busmall.holeoFbusmall[rightImageindex].img;
    allOfimages.push(leftImageindex);
    allOfimages.push(middleImageindex);
    allOfimages.push(rightImageindex);
    console.log(allOfimages);


}
renderThreeimage();




continer.addEventListener('click', userClick);

// leftImageelement.addEventListener('click', userClick);
// middleImageelement.addEventListener('click', userClick);
// rightImageelement.addEventListener('click', userClick);


function userClick(event) {
    console.log(event.target.id);


    // for (let i = 0; i < norepetArrnew.length; i++) {
    //     for (let j = 0; j < norepetArrold.length; j++) {
    //         if (norepetArrnew[i] === norepetArrold[j]) {
    //             norepetArrold = [];
    //             generatRandomindex();

    //             // norepetArrnew = [];

    //         }
    //     }
    // }
    // norepetArrnew = [];


    if (voting < maxVoting) {
        if (event.target.id === 'left-image') {
            voting++;
            console.log(voting);
            Busmall.holeoFbusmall[leftImageindex].votes++;
            Busmall.holeoFbusmall[leftImageindex].seen++;
            Busmall.holeoFbusmall[middleImageindex].seen++;
            Busmall.holeoFbusmall[rightImageindex].seen++;
        } else if (event.target.id === 'middle-image') {
            voting++;
            console.log(voting);
            Busmall.holeoFbusmall[leftImageindex].seen++;
            Busmall.holeoFbusmall[middleImageindex].votes++;
            Busmall.holeoFbusmall[middleImageindex].seen++;
            Busmall.holeoFbusmall[rightImageindex].seen++;
        }
        else if (event.target.id === 'right-image') {
            voting++;
            console.log(voting);
            Busmall.holeoFbusmall[leftImageindex].seen++;
            Busmall.holeoFbusmall[middleImageindex].seen++;
            Busmall.holeoFbusmall[rightImageindex].votes++;
            Busmall.holeoFbusmall[rightImageindex].seen++;
        } else {
            console.log('containr votes', voting);
        }

        // norepetArrnew.push(leftImageindex);
        // norepetArrnew.push(middleImageindex);
        // norepetArrnew.push(rightImageindex);
        // console.log('new', norepetArrnew);
        renderThreeimage();


    } else {
        let listOfall = document.getElementById('list');
        listOfall.addEventListener('click', userClickbotton);

        function userClickbotton(event) {

            let list = document.getElementById('finalList');
            let lsitOfbusmall;
            for (let i = 0; i < Busmall.holeoFbusmall.length; i++) {
                votesArr.push(Busmall.holeoFbusmall[i].votes);
                seenArr.push(Busmall.holeoFbusmall[i].seen);

                // Busmall.holeoFbusmall[i].votesArr;
                let lsitOfbusmall = document.createElement('li');
                list.appendChild(lsitOfbusmall);
                lsitOfbusmall.textContent = `${Busmall.holeoFbusmall[i].name} had ${Busmall.holeoFbusmall[i].votes} votes, and was seen ${Busmall.holeoFbusmall[i].seen} times`;

            }


            listOfall.textContent = lsitOfbusmall;
            listOfall.removeEventListener('click', userClickbotton);
            chart();
        }
        continer.removeEventListener('click', userClick);

    }
}



function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: namesArr,

            datasets: [
                {
                    label: 'busmall-votes',
                    data: votesArr,
                    backgroundColor: [
                        'rgb(251, 93, 76)',
                    ],

                    borderWidth: 1
                },

                {
                    label: 'busmall-seen',
                    data: seenArr,
                    backgroundColor: [
                        'black',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {}
    });

}


