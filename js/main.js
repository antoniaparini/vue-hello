/** VUE-HELLO
 * Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)
 */

 /**
  * ISTANZIO VUE
  */

  const app = new Vue ({
      el: '#app',

      //variabile

      data: {
          title: 'Lago Trasimeno - Perugia (PG)',
          img: './img/lago_trasimeno.JPG',

      },
      methods: {
          info: function(){
              console.log(`Il lago Trasimeno è un lago della provincia di Perugia, nella regione Umbria e,
              con una superficie di 128 km², il più esteso lago dell'Italia centrale, quarto tra i laghi italiani subito dopo il lago di Como; tale estensione
              si affianca pero' ad una scarsa profondità (media 4,3 m, massima 6 m[2]), che lo fa classificare come un lago di tipo laminare. `);
          }
      }

  });