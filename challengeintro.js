let johnweight = 92
let johnheight = 1.95
let markweight = 78
let markheight = 1.69

 let johnbmi = 92 / 1.95 **2;
 let markbmi = 78 / 1.69 **2;
 console.log(johnbmi, markbmi)


 let markHigherBMI = markbmi > johnbmi
 console.log(markbmi > johnbmi)

if(markbmi>johnbmi) {
    console.log ('markbmi is greater than johnbmi')
}else if(johnbmi>markbmi){
console.log ('johnbmi is greater than markbmi')
}else{ 
    console.log ('they have equal bmi')
}

if(markbmi>johnbmi) {
    console.log (`markbmi ${markbmi} is greater than johnbmi ${johnbmi}`)
}else if(johnbmi>markbmi) {
    console.log (`johnbmi ${johnbmi} is greater than markbmi ${markbmi}`)
}else{
    console.log (`they have equal bmi`)
}

let occupation= 'Agbero'
switch (occupation) {
    case 'footballer';
    console.log('ball like kross');
    break;
    case 'musician';
    console.log('sing like wizkid')
    break;
    case 'teacher';
    console.log ('be like Young')
    break;
    default;
    console.log('no future ambition')
    break;
}

let num = 0
while (num < 5) {
    console.log(num)
    num++;
}
let num2= 6
do {
    console.log(num2)
    num2++;
    while (num2 <= 10)
}
for (let i = 1, i <= 15, i +=2){
    console.log(index)
}



let univelstaffAges = [12, 39, 40, 17, 5, 69, 81, 34, 23, 20]

function averageAgeCaculator(ages) {
    let sum =0 
    let numOfAges = ages.length
    console.log(numOfAges)

    for(let i = 0; 1 < ages.length; 1++){
        let sum = 0
        sum += ages[1];
    }
}

