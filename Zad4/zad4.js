let tab = [0,1,2,3,4,5];
let sum = 0;

function sumOfPowers(tab){
    for (let index = 0; index < tab.length; index++) {
        let power = Math.pow(tab[index], 2);
        sum += power;
    }
    return sum;
}

console.log(sumOfPowers(tab));