let tab = [12, 67, 34, 23.01, 24, 2, 56, 8, 0*10, 23.02, 78, 34, 45, 67, 98, 1];

function zad(tab){
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab.length; j++) {
            if (tab[i] < tab[j]) {
                let x = tab[j];
                tab[j] = tab[i];
                tab[i] = x;
            }
        }   
    }
    return tab;
}


console.log(zad(tab))