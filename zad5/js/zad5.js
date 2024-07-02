let n = 10;
let lastElement = 1;
let currentElement = 1;
let nextElement = 1;
function fibbo(n) {
    if (n < 1) {
        let error = "n musi być większe od 0";
        return error;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        for (let index = 0; index < n; index++) {
            nextElement = lastElement + currentElement;
            lastElement = currentElement;
            currentElement = nextElement;
        }
    }
    return currentElement;
}

console.log(fibbo(n));