# ssgs-calc

<p align="center">
  <a href="mailto:albymiscy07@outlook.it">
    <img src="https://img.shields.io/badge/Email-albymiscy07%40outlook.it-blue?logo=gmail&logoColor=white&style=flat" alt="Contact Me" />
  </a>
  <a href="https://github.com/AlbyMiscy">
    <img src="https://img.shields.io/badge/GitHub-AlbyMiscy-181717?logo=github&logoColor=white&style=flat" alt="GitHub Profile" />
  </a>
</p>

## 🎯 Scopo del progetto

Il progetto **ssgs-calc** è una semplice applicazione di calcolatrice sviluppata in **Node.js**. Consente di eseguire operazioni matematiche di base (somma, sottrazione, moltiplicazione, divisione e potenza) tramite la riga di comando. Include anche una suite di test automatizzati per garantire il corretto funzionamento delle operazioni.

## 📁 Struttura del progetto
| **File** | **Cartella** | **Descrizione** | 
|----------|--------------|-----------------|
| `index.js` | root | File principale che gestisce l'interazione con l'utente tramite riga di comando. |
| `calculator.js` | src | Modulo che implementa le operazioni matematiche richieste dal progetto |
| `calculator.test.js` | test | Suite di test autmatizzati per verificare il corretto funzionamento delle operazioni | 

## 🧠 Funzionalità      
    - Somma
    - Sottrazione
    - Moltiplicazione
    - Divisione
    - Potenza

- **Validazione degli input**: Il programma verifica che i parametri inseriti siano numeri validi.
- **Test automatizzati**: Utilizza **Jest** per testare tutte le operazioni matematiche.


## 🛠 Requisiti necessari
> **Requisito**: Assicurati di avere installato **Node.js >= 16.0.0**.

1. **Clona la repository**: 
    ```bash
    git clone https://github.com/AlbyMiscy/ssgs-calc.git
    cd ssgs-calc
    ```
2. **Installa le dipendenze**:
    ```bash
    npm install
    ```

> **Nota**: Le cartelle `node_modules` e `coverage` non sono presenti nel repository. Verranno generate rispettivamente con `npm install` e `npm test`.

## ✅​ Esecuzione del progetto 

Per avviare il programma, esegui il seguente comando dalla directory principale del progetto:
```bash
npm start
```

Segui le istruzioni mostrate nel terminale per selezionare l'operazione desiderata e inserire i numeri richiesti.

## 🧪 Test

### Esecuzione dei test
Per eseguire i test:
```bash
npm test
```
Questo comando eseguirà tutti i test definiti utilizzando Jest e genererà automaticamente un report di coverage nella cartella coverage. La cartella coverage verrà creata nella directory principale del progetto, se non esiste già.

## 🔑 Parole chiave
Il progetto è ottimizzato per la ricerca con le seguenti parole chiave:
- `calculator`
- `arithmetic`
- `nodejs`
- `ssgs`
