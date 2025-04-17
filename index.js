const readline = require('readline');
const calculator = require('./src/calculator'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nel programma di calcolo!");
console.log("Operazioni supportate:");
console.log("\t1. add (somma)");
console.log("\t2. diff (sottrazione)");
console.log("\t3. multiply (moltiplicazione)");
console.log("\t4. divide (divisione)");
console.log("\t5. pow (potenza)");

rl.question("Seleziona un'operazione (es. add, diff, multiply, divide, pow): ", (operation) => {
    if (!['add', 'diff', 'multiply', 'divide', 'pow'].includes(operation)) {
        console.error("Operazione non valida. Programma terminato.");
        rl.close();
        return;
    }

    rl.question("Inserisci il primo numero: ", (num1) => {
        if (isNaN(num1)) {
            console.error("Parametro invalido. Programma terminato.");
            rl.close();
            return;
        }

        rl.question("Inserisci il secondo numero: ", (num2) => {
            if (isNaN(num2)) {
                console.error("Parametro invalido. Programma terminato.");
                rl.close();
                return;
            }

            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            try {
                switch (operation) {
                    case 'add':
                        result = calculator.add(a, b);
                        break;
                    case 'diff':
                        result = calculator.diff(a, b);
                        break;
                    case 'multiply':
                        result = calculator.multiply(a, b);
                        break;
                    case 'divide':
                        result = calculator.divide(a, b);
                        break;
                    case 'pow':
                        result = calculator.pow(a, b);
                        break;
                }
                console.log(`Risultato: ${result}`);
            } catch (error) {
                console.error(`Errore: ${error.message}`);
            }

            console.log("Grazie per aver usato il programma. Arrivederci!");
            rl.close();
        });
    });
});