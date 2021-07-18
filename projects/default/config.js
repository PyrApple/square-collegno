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
      // title: 'SQUARE MILANO',
      // subtitle: 'by Lorenzo Bianchi Hoesch',
      // useHeadphones: 'Expérience à faire au casque<br />Use headphones',
      // instructionsHeader: 'Merci de (Please):',
      instructions: {
        wakeLock: 'Disattivare il blocco automatico del telefono e la connessione wifi <br/> <br/> dopo ritornare su questa pagina e toccare lo schermo per iniziare',
        // headphones: 'brancher vos écouteurs',
        // volume: 'ajuster le volume',
      },
      touchToStart: 'Clicca per iniziare',
    },
    soundCheck: {
      question: 'Senti distintamente la mia voce? o ti sembra ci sia un problema ?',
      yes: 'SI',
      no: 'PROBLEMA',
      testFile: 'sounds/check/00-ISTRUZIONI.mp3',
      testTouchFile: 'sounds/check/sound_check.mp3',
    },
    restartPage: {
      restart: 'Ricominciare dall&#39;inizio',
      continue: 'Continuare la visita',
    },
  },

  common: {
    fallbackStream: {
      id: 'streaming_loop',
      file: 'streams/streaming_loop.wav',
      loop: true,
    },
    enableSubtitles: true
  },

  states: [
    // ----------------------------------------------------------------------
    // INTRO
    // ----------------------------------------------------------------------
    {
      title: 'Intro',

      stream: {
        id: 'streaming_1',
        file: 'streams/streaming_1.wav',
        loop: false,
      },
      // list of events
      events: [
        {
          time: 0,
          type: 'fade-out',
          placeholder: 'background-color',
          duration: 0,
        },
        {
          time: 0,
          type: 'background-color',
          placeholder: 'background-color',
          color: '#000000',
        },
        {
          time: 0,
          type: 'fade-in',
          placeholder: 'background-color',
          duration: 0.1,
        },
        {
          time: 0,
          type: 'text',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `
                  <span class="title">SQUARE Collegno</span> <br />
                  <span class="subtitle">by Lorenzo Bianchi Hoesch</span>
            `,
        },
        {
          time: 2,
          type: 'text-subtitle',
          placeholder: 'center',
          // classes: ['color-red'],
          content: `
            <p class="use-headphones"> Esperienza da fare in cuffia </p>
            <p class="fa fa-headphones" aria-hidden="true"></p>
          `,
        },
        {
          time: 4,
          type: 'text-subtitle',
          placeholder: 'center',
          // classes: ['white', 'align-center'],
          content: `
            lorem ipsum dolor
            <br /><br />
            lorem ipsum dolor
          `,
        },
        {
          time: 6,
          type: 'text',
          placeholder: 'center',
          content: '',
        },
        {
          time: 8,
          type: 'background-image',
          placeholder: 'background-image',
          url: './images/image_1.jpg',
        },
        {
          time: 10,
          type: 'fade-out',
          placeholder: 'background-color',
          duration: 2,
        },
        {
          time: 12,
          type: 'text-subtitle',
          placeholder: 'top',
          classes: ['gradient'],
          content: `The first photo just showed up.`
        },
        {
          time: 14,
          type: 'text-subtitle',
          placeholder: 'top',
          classes: ['gradient'],
          content: ``
        },
        {
          time: 16,
          type: 'text',
          placeholder: 'bottom',
          classes: ['banner'],
          content: `Cliccare solo quando si é raggiunta la posizione`
        },
        {
          time: 18,
          type: 'trigger-next-state',
          placeholder: 'screen',
          triggerAudio: {
            id: 'touch-0',
            file: 'sounds/touch/touch_1.mp3',
          }
        },
      ]
    },

    // ----------------------------------------------------------------------
    // STATE 1
    // ----------------------------------------------------------------------
    {
      title: 'Discours Lorenzo',

      stream: {
        id: 'streaming_2',
        file: 'streams/streaming_2.wav',
        loop: false,
      },
      // list of events
      events: [
        {
          time: 0,
          type: 'background-color',
          placeholder: 'background-color',
          color: '#272727',
        },
        {
          time: 0,
          type: 'fade-in',
          placeholder: 'background-color',
          duration: 1,
        },
        {
          time: 2,
          type: 'text',
          placeholder: 'top',
          content: `Ascolta`,
        },
        {
          time: 4,
          type: 'background-image',
          placeholder: 'background-image',
          url: './images/image_2.jpg',
        },
        {
          time: 6,
          type: 'fade-out',
          placeholder: 'background-color',
          duration: 5,
        },
        {
          time: 8,
          type: 'text',
          placeholder: 'top',
          content: ``,
        },
        {
          time: 10,
          type: 'text-subtitle',
          classes: ['gradient'],
          placeholder: 'top',
          content: `Another photo`,
        },
        {
          time: 12,
          type: 'text',
          placeholder: 'bottom',
          classes: ['banner'],
          content: `Cliccare solo quando si é raggiunta la posizione.`,
        },
        {
          time: 12,
          type: 'trigger-next-state',
          placeholder: 'screen',
          triggerAudio: {
            id: 'touch-1',
            file: 'sounds/touch/touch_2.mp3',
          }
        },
      ]
    },

    // ----------------------------------------------------------------------
    // STATE end
    // ----------------------------------------------------------------------

    {
      title: 'end',

      stream: {
        id: 'streaming_loop',
        file: 'streams/streaming_loop.wav',
        loop: false,
      },
      // list of events
      events: [
        {
          time: 0,
          type: 'background-color',
          placeholder: 'background-color',
          color: '#272727',
        },
        {
          time: 0,
          type: 'fade-in',
          placeholder: 'background-color',
          duration: 1,
        },
        {
          time: 2,
          type: 'text',
          placeholder: 'top',
          classes: ['large', 'bold'],
          content: `SQUARE #2`,
        },
        {
          time: 4,
          type: 'text',
          placeholder: 'center',
          classes: ['white', 'align-center'],
          content: `
            <dl>
              <dt class="first">Concept et Création :</dt>
              <dd class="first">Lorenzo Bianchi Hoesch</dd>

              <dt>Développement :</dt>
              <dd>
                David Poirier-Quinot<br />
                Benjamin Matuszewski
              </dd>

              <dt>Voix principale :</dt>
              <dd>Deborah Lopatin</dd>

              <dt>Violon :</dt>
              <dd>Szuhwa Wu</dd>

              <dt>Trompette et voix :</dt>
              <dd>Amir el Saffar</dd>

            </dl>
          `,
        },
        {
          time: 6,
          type: 'text',
          placeholder: 'bottom',
          classes: ['banner'],
          content: `<a href="http://forumnet.ircam.fr/event/square-installation-interactive-lorenzo-bianchi-hoesch/">Plus d'informations</a>`,
        },
      ]
    },
  ],
};

module.exports = config;
