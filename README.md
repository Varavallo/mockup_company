# Giuseppe Varavallo · Consulenza

Pagina dei servizi di consulenza: sviluppo territoriale, sostenibilità e reputazione online.
Sito statico, senza dipendenze: HTML, un foglio di stile e un piccolo script.

## Vederlo in locale

Doppio clic su `index.html`.

## Pubblicarlo su GitHub Pages

Consiglio di usarlo come **pagina principale** del tuo account, così l'indirizzo è
semplicemente `https://varavallo.github.io/` e da lì si arriva al CV e allo studio delle valli.

1. Su GitHub crea un repository chiamato esattamente **`Varavallo.github.io`**.
2. Carica tutti i file di questa cartella (compreso `.nojekyll`, che è nascosto).
3. Settings → Pages → Source: *Deploy from a branch*, branch `main`, cartella `/ (root)`.
4. Dopo un paio di minuti la pagina è online su `https://varavallo.github.io/`.

Il CV (`/cv/`) e lo studio delle valli (`/valli-chisone-germanasca/`) restano nei loro
repository e continuano a funzionare agli stessi indirizzi.

Se preferisci non usare la pagina principale, crea un repository qualsiasi (per esempio
`consulenza`): l'indirizzo sarà `https://varavallo.github.io/consulenza/`.

## Prima di pubblicare

- **Email**: si cambia in cima ad `assets/main.js` (`EMAIL_USER` ed `EMAIL_DOMAIN`).
  Ora c'è l'indirizzo dell'Università di Torino; per la consulenza è meglio un indirizzo
  dedicato.
- **Link al CV**: punta a `https://varavallo.github.io/cv/`. Se hai pubblicato il CV con
  un altro nome di repository, correggi i due link in `index.html` (cerca `/cv/`).
- **Partita IVA**: quando la apri, aggiungila nel piè di pagina di `index.html`
  (sezione `site-foot`).
- **Descrizioni dei progetti**: controlla che ruoli e dettagli siano esatti.

## Modificare i contenuti

Tutto il testo è in `index.html`, diviso per sezioni con commenti
(`<!-- ============ SERVIZI ============ -->` e così via).

- Nuovo progetto: copia un blocco `<article class="project">…</article>` nella sezione
  Progetti. La classe `featured` lo mette a tutta larghezza in cima.
- Nuova pubblicazione: copia una riga `<li>` nel gruppo giusto (riviste, capitoli, atti).
  Se ha un DOI, usa `<a class="pt" href="https://doi.org/…">`, altrimenti `<span class="pt">`.

## File

```
index.html        contenuti e struttura
assets/style.css  colori, caratteri, impaginazione, versione mobile
assets/main.js    indirizzo email
.nojekyll         dice a GitHub di pubblicare i file così come sono
```
