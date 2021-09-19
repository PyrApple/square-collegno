const config = {

  environment: {
    // forward informations to max patch
    // set to false if no external max patch
    osc: false,
    // hack to keep devices awake
    // `true` for creations, `false` for production
    // update home instructions accordingly
    wakeLock: true,
  },

  txt: {
    home: {
      // title: 'SQUARE COLLEGNO',
      // subtitle: 'by Lorenzo Bianchi Hoesch',
      // useHeadphones: 'Esperienza da fare in cuffia.',
      instructionsHeader: 'Perfavore:',
      instructions: {
        wakeLock: 'Disattivare il blocco automatico del telefono <br/> <br/> Disattivare il wifi <br/> <br/> Verificare di non essere in modalità privata <br/> <br/> Dopo ritornare su questa pagina e cliccare sullo schermo',
        // headphones: 'brancher vos écouteurs',
        // volume: 'ajuster le volume',
      },
      touchToStart: 'Disable sleep mode, wifi connection, and private browsing. <br/> Touch the screen to start.',
    },
    soundCheck: {
      question: 'Senti distintamente la mia voce? <br/> O ti sembra ci sia un problema?',
      yes: 'SI',
      no: 'PROBLEMA',
      testFile: 'sounds/check/00-ISTRUZIONI.mp3',
      // testTouchFile: 'sounds/check/sound_check.mp3',
    },
    restartPage: {
      restart: 'Ricominciare dall&#39;inizio',
      continue: 'Continuare la visita',
    },
  },

  common: {
    fallbackStream: {
      id: 'Sq-Col-infinit-Loop',
      file: 'streams/Sq-Col-infinit-Loop.wav',
      loop: true,
    },
    enableSubtitles: true
  },


  states: [

    // ----------------------------------------------------------------------
    // STATE intro
    // ----------------------------------------------------------------------

    {
      title: '01-NERO',

      stream: {
        id: '01-NERO',
        file: 'streams/01-NERO.wav',
        loop: false,
      },

      events: [
        {
          time: 0,
          type: 'fade-out',
          placeholder: 'background-color',
          duration: 0.1,
        },
        {
          time: 0.1,
          type: 'background-color',
          placeholder: 'background-color',
          color: '#282828',
        },
        {
          time: 0.1,
          type: 'fade-in',
          placeholder: 'background-color',
          duration: 1,
        },
        {
          time: 7,
          type: 'checkpoint'
        },
        {
          time: 6,
          type: 'text-subtitle',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `Riceverai delle immagini sul tuo telefono, dovrai trovare il punto dal quale quelle immagini sono state scattate, solo a quel punto potrai cliccare e seguire il suo racconto`
        },
        {
          time: 35,
          type: 'text-subtitle',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `Ascolta`
        },
        {
          time: 55,
          type: 'text-subtitle',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `In another dimension, with voyeuristic intentions`
        },
        {
          time: 62,
          type: 'text-subtitle',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `Ascolta`
        },
        {
          time: 72,
          type: 'background-image',
          placeholder: 'background-image',
          url: './images/02-Image.JPG',
        },
        {
          time: 77,
          type: 'text-subtitle',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: ``
        },
        {
          time: 77,
          type: 'fade-out',
          placeholder: 'background-color',
          duration: 1,
        },
        {
          time: 117,
          type: 'text',
          placeholder: 'center',
          classes: ['banner', 'large', 'bold'],
          content: `Toccare lo schermo una volta raggiunta la posizione`
        },
        {
          time: 117,
          type: 'trigger-next-state',
          placeholder: 'screen',
          triggerAudio: {
            id: '02-touch',
            file: 'sounds/touch/02-touch.mp3',
          }
        },
      ]
    },

    // ----------------------------------------------------------------------
    // STATE end
    // ----------------------------------------------------------------------

    {
      title: '29-END',

      stream: {
        id: '29-END',
        file: 'streams/29-END.wav',
        loop: false,
      },
      // list of events
      events: [
        {
          time: 0,
          type: 'fade-in',
          placeholder: 'background-color',
          duration: 1,
        },
        {
          time: 1,
          type: 'text-subtitle',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `Ascolta`
        },
        {
          time: 76+0.3,
          type: 'text-subtitle',
          placeholder: 'center',
          content: `
            There's no synagogue
          `,
        },
        {
          time: 76+2.7,
          type: 'text-subtitle',
          placeholder: 'center',
          content: `
            church
          `,
        },
        {
          time: 76+4,
          type: 'text-subtitle',
          placeholder: 'center',
          content: `
            polis
          `,
        },
        {
          time: 76+5.5,
          type: 'text-subtitle',
          placeholder: 'center',
          content: `
            ethnic community
          `,
        },
        {
          time: 76+7.0,
          type: 'text-subtitle',
          placeholder: 'center',
          content: `
            that does not deserve
          `,
        },
        {
          time: 76+8.9,
          type: 'text-subtitle',
          placeholder: 'center',
          content: `
            to be abandoned.
          `,
        },
        {
          time: 76+10.8,
          type: 'text-subtitle',
          placeholder: 'center',
          content: ``,
        },
        {
          time: 76+10.8,
          type: 'text',
          placeholder: 'top',
          classes: ['large', 'bold'],
          content: `Square Collegno`,
        },
        {
          time: 76+10.8,
          type: 'text',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `
            <dl>
              <dt class="first">Concezione e realizzazione:</dt>
              <dd class="first">Lorenzo Bianchi Hoesch</dd>

              <dt>Voce guida:</dt>
              <dd>Michele di Mauro</dd>

              <dt>Ricerca e sviluppo:</dt>
              <dd>David Poirier-Quinot, Benjamin Matuszewski</dd>

            </dl>
          `,
        },
        {
          time: 76+15.8,
          type: 'text',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `
            <dl>
              <dt>Contributi:</dt>
              <dd>Valentina Picello, Mirella Violato, Barbara Altissimo, Doriana Crema, Tommaso Monza, Alessandro Tollari, Rosa Trolese, Viola Scaglione, Daniele Ninarello, Massimiliano Iachini, Paola Chiadò Caponet, Adriana Rinaldi, Piercarlo Miletto, Roberta Borello, Anna Gramaglia, Romeo Pitton, Domenico Canale, Giorgio Tebaldi, Silvano Calzi, Sergio Bertolotto, Lillo Baglio, Fiorenza Menni, Benno Steinegger, Deborah Lopatin, Amir ElSaffar e Szuhwa Wu</dd>
            </dl>
          `,
        },
        {
          time: 76+20.8,
          type: 'text',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `
            <dl>
              <dt>In collaborazione con:</dt>
              <dd>Olivier Warusfel (Espaces acoustiques et cognitifs, IRCAM-STMS), Norbert Schnell, Frederic Bevilacqua, Benjamin Matuszewski (Interaction son musique mouvement, IRCAM-STMS), consulenti scientifici IRCAM. Produzione IRCAM-Center Pompidou , Lavanderie a Vapore, Ornithology Productions, Produttore esecutivo PLATÔ</dd>
            </dl>
          `,
        },
        {
          time: 76+20.8,
          type: 'text',
          placeholder: 'bottom',
          classes: ['banner'],
          content: `<a href="https://www.lavanderiaavapore.eu/square/">www.lavanderiaavapore.eu/square</a>`,
        },
      ]
    },

  ],
};

// ----------------------------------------------------------------------
// Procedural states
// ----------------------------------------------------------------------

var templateState =
{
  title: '02-STIRERIA',

  stream: {
    id: '02-STIRERIA',
    file: 'streams/02-STIRERIA.wav',
    loop: false,
  },

  events: [
    {
      time: 0.0,
      type: 'background-color',
      placeholder: 'background-color',
      color: '#282828',
    },
    {
      time: 0.1,
      type: 'fade-in',
      placeholder: 'background-color',
      duration: 1,
    },
    {
      time: 1,
      type: 'text-subtitle',
      placeholder: 'center',
      classes: ['white', 'align-center'],
      content: `Ascolta`
    },
    {
      time: 25,
      type: 'text-subtitle',
      placeholder: 'center',
      classes: ['white', 'align-center'],
      content: ``
    },
    {
      time: 26,
      type: 'background-image',
      placeholder: 'background-image',
      url: './images/03-Image.JPG',
    },
    {
      time: 31,
      type: 'fade-out',
      placeholder: 'background-color',
      duration: 1,
    },
    {
      time: 48,
      type: 'text',
      placeholder: 'center',
      classes: ['banner', 'large', 'bold'],
      content: `Toccare lo schermo una volta raggiunta la posizione`
    },
    {
      time: 48,
      type: 'trigger-next-state',
      placeholder: 'screen',
      triggerAudio: {
        id: '03-touch',
        file: 'sounds/touch/03-touch.mp3',
      }
    },
  ]
}

var subStates = [
{'stream': '02-STIRERIA.wav', 'timeImage': 31, 'timeTouch': 48},
{'stream': '03-ASCENSORE.wav', 'timeImage': 6, 'timeTouch': 7},
{'stream': '04-ASCENSORE-TASTI.wav', 'timeImage': 37, 'timeTouch': 46},
{'stream': '05-SALA_PROVE.wav', 'timeImage': 62, 'timeTouch': 83},
{'stream': '06-FINESTRA.wav', 'timeImage': 95, 'timeTouch': 136},
{'stream': '07-USCITA.wav', 'timeImage': 18, 'timeTouch': 91},
{'stream': '08-CORTILE-LAVANDERIA.wav', 'timeImage': 35, 'timeTouch': 443},
{'stream': '09-PIAZZA.wav', 'timeImage': 75, 'timeTouch': 154},
{'stream': '10-INGRESSO-CERTOSA.wav', 'timeImage': 16, 'timeTouch': 36},
{'stream': '11-CORTILE-INTERNO.wav', 'timeImage': 35, 'timeTouch': 39},
{'stream': '12-CORTILE-INTERNO-USCITA.wav', 'timeImage': 45, 'timeTouch': 89},
{'stream': '13-CROCE-PORTICI.wav', 'timeImage': 25, 'timeTouch': 37},
{'stream': '14-PANCHINA.wav', 'timeImage': 121, 'timeTouch': 122},
{'stream': '15-TELEFONO.wav', 'timeImage': 30, 'timeTouch': 69},
{'stream': '16-PORTICI-DESTRA.wav', 'timeImage': 34, 'timeTouch': 52},
{'stream': '17-RAMPA.wav', 'timeImage': 25, 'timeTouch': 44},
{'stream': '18-CORTILE-PADIGLIONE.wav', 'timeImage': 66, 'timeTouch': 88},
{'stream': '19-INGRESSO2.wav', 'timeImage': 11, 'timeTouch': 22},
{'stream': '20-PROSPETTIVA.wav', 'timeImage': 2, 'timeTouch': 76},
{'stream': '21-POZZO-LONTANO.wav', 'timeImage': 18, 'timeTouch': 91},
{'stream': '22-POZZO-VICINO.wav', 'timeImage': 64, 'timeTouch': 135},
{'stream': '23-POST-POZZO.wav', 'timeImage': 3, 'timeTouch': 97},
{'stream': '24-USCITA-CHIOSTRO.wav', 'timeImage': 45, 'timeTouch': 52},
{'stream': '25-CROCICCHIO.wav', 'timeImage': 30, 'timeTouch': 91},
{'stream': '26-PARTE-DISMESSA.wav', 'timeImage': 5, 'timeTouch': 27},
{'stream': '27-FORESTA.wav', 'timeImage': 91, 'timeTouch': 171},
{'stream': '28-SOGLIA.wav', 'timeImage': 25, 'timeTouch': 29},
]

var index = 1;
subStates.forEach(subState => {

  // local copy
  var state = JSON.parse(JSON.stringify(templateState));
  // var state = templateState;

  // update
  var fileId = subState.stream.replace(/\.[^/.]+$/, ""); // remove extension
  state.title = fileId;
  state.stream.id = fileId;
  state.stream.file = 'streams/' + subState.stream; // todo: remove .wav extension

  // update text before image
  state.events[3].time = Math.max(subState.timeImage, 1.1);

  // update image
  var fileName = (index+2).toString().padStart(2, '0') + '-Image.JPG'
  // fileName = '02-Image.JPG';
  state.events[4].url = './images/' + fileName
  state.events[4].time = Math.max(subState.timeImage - 5, 1); // load image (doesn't load before fade in of previous screen)
  state.events[5].time = subState.timeImage; // fade in image

  // update touch
  state.events[6].time = subState.timeTouch; // click text
  state.events[7].time = subState.timeTouch; // touch enable
  fileName = (index+2).toString().padStart(2, '0') + '-touch.mp3'
  state.events[7].triggerAudio.file = './sounds/touch/' + fileName
  fileId = fileName.replace(/\.[^/.]+$/, "")
  state.events[7].triggerAudio.id = fileId; // remove extension

  // insert
  config.states.splice(index, 0, state);

  // incr.
  index += 1;
});


// ----------------------------------------------------------------------
// Add dummy events, used as checkpoints to avoid restart whole state
// (when true events are too spaced out)
// ----------------------------------------------------------------------

// loop over states
config.states.forEach(state => {

  // get last event time
  var lastEventTime = 0.0;
  state.events.forEach(event => {
    lastEventTime = Math.max(event.time, lastEventTime);
  });

  // add checkpoint states
  var checkpointInterval = 10.0; // in sec
  var numCheckpoint = Math.floor(lastEventTime / checkpointInterval);
  for (var iCheckpoint = 1; iCheckpoint <= numCheckpoint; iCheckpoint++) {
    state.events.splice(0, 0, { time: iCheckpoint * checkpointInterval, type: 'checkpoint'});
  }

  // sort state events by increasing time
  state.events.sort((a, b) => (a.time > b.time) ? 1 : -1);

});


// // debug: remove some states
// config.states = config.states.splice(14, config.states.length);
// console.log(config.states);

// ----------------------------------------------------------------------
// Expot module
// ----------------------------------------------------------------------

module.exports = config;