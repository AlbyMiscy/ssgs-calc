# ssgs-calc

<p align="center">
  <a href="mailto:albymiscy07@outlook.it">
    <img src="https://img.shields.io/badge/Email-albymiscy07%40outlook.it-blue?logo=gmail&logoColor=white&style=flat" alt="Contact Me" />
  </a>
  <a href="https://github.com/AlbyMiscy">
    <img src="https://img.shields.io/badge/GitHub-AlbyMiscy-181717?logo=github&logoColor=white&style=flat" alt="GitHub Profile" />
  </a>
</p>

## 📁 Struttura del progetto
| **File** | **Cartella** | **Descrizione** | 
|----------|--------------|-----------------|
| `index.js` | root | File principale che gestisce l'interazione con l'utente tramite riga di comando. |
| `calculator.js` | src | Modulo che implementa le operazioni matematiche richieste dal progetto |
| `calculator.test.js` | test | Suite di test autmatizzati per verificare il corretto funzionamento delle operazioni | 

## 🎯 Scopo del progetto

Il progetto **ssgs-calc** è una semplice applicazione di calcolatrice sviluppata in **Node.js**. Consente di eseguire operazioni matematiche di base (somma, sottrazione, moltiplicazione, divisione e potenza) tramite la riga di comando. Include anche una suite di test automatizzati per garantire il corretto funzionamento delle operazioni.


## 🧠 Funzionalità      
    - Somma
    - Sottrazione
    - Moltiplicazione
    - Divisione
    - Potenza

- **Validazione degli input**: Il programma verifica che i parametri inseriti siano numeri validi.
- **Test automatizzati**: Utilizza **Jest** per testare tutte le operazioni matematiche.


## 🛠 Requisiti necessari
1. **Clona la repository**: 
    ```bash
    git clone https://github.com/<AlbyMiscy>/ssgs-calc.git
    cd ssgs-calc
    ```
2. **Installa le dipendenze**:
    ```bash
    npm install
    ```

> **Nota**: La cartella `node_modules` non è inclusa nel repository. Verrà generata automaticamente eseguendo il comando `npm install`.

> **Nota**: La cartella `coverage` non è inclusa nel repository. Verrà generata automaticamente eseguendo i test con Jest utilizzando l'opzione `--coverage`.

## ✅​ Esecuzione del progetto 

Per avviare il programma, esegui il seguente comando dalla directory principale del progetto:
```bash
node index.js
```

Segui le istruzioni mostrate nel terminale per selezionare l'operazione desiderata e inserire i numeri richiesti.

## 🧪 Test
### Installazione Jest
Se Jest non è già installato, puoi aggiungerlo come dipendenza di sviluppo:
```bash
npm install --save-dev jest
```

### Esecuzione dei test
Per eseguire i test e verificare il corretto funzionamento del progetto:
```bash
npm test
```


