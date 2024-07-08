class Ksiazka {
    constructor(tytul, autor, przeczytana) {
      this.tytul = tytul;
      this.autor = autor;
      this.przeczytana = przeczytana;
      
    }

    opiszKsiazke() {
        if (true) {
            let prze = 'została przeczytana'
        }
        else{
            let prze = 'została nieprzeczytana'
        }
        return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${prze}.`;
    }
  }

  let wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true)

  console.log(wiedzmin.opiszKsiazke());