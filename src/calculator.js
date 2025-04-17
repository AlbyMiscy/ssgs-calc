module.exports = {
    add: (a, b) => a + b,
    diff: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if(b === 0){
            throw new Error("Cannot divide by zero");
        }
        return a/b;
    },
    pow: (a, b) => Math.pow(a, b),
}