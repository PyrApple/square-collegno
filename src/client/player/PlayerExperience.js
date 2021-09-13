import * as soundworks from 'soundworks/client';
import slugify from 'slugify';
import SimplePlayer from './audio/SimplePlayer';
import State from './State';
import PlayerView from './PlayerView';
import path from 'path';

const audioContext = soundworks.audioContext;
const client = soundworks.client;
const audio = soundworks.audio;
// should be somewhere else, even if not a big deal
const localStorageId = 'lbh-square';

class PlayerExperience extends soundworks.Experience {

  // constructor
  constructor(envConfig, projectConfig) {

    // parent constructor
    super();

    // save locals
    this.envConfig = envConfig;
    this.projectConfig = projectConfig;

    // init paths
    const assetsPath = `${this.envConfig.assetsDomain}assets/`;

    // services: init
    const features = ['web-audio', 'vibrate'];
    if (projectConfig.environment.wakeLock) {
      features.push('wake-lock');
    }

    // services: misc
    this.platform = this.require('platform', { features: features });
    this.sync = this.require('sync');
    this.checkin = this.require('checkin', { showDialog: false });
    this.sharedParams = this.require('shared-params');
    this.motionInput = this.require('motion-input', {
      descriptors: ['deviceorientation'],
    });
    this.audioStreamManager = this.require('audio-stream-manager', {
      assetsDomain: assetsPath,
      monitorInterval: 1,
      requiredAdvanceThreshold: 10,
    });

    // init locals
    const triggerAudioBuffers = {};
    const backgroundImages = [];

    // loop over states
    this.projectConfig.states.forEach(state => {

      // loop over state events
      state.events.forEach(event => {

        // store event audio
        if (event.triggerAudio) {
          triggerAudioBuffers[event.triggerAudio.id] = event.triggerAudio.file;
        }

        // store event image
        if (event.type === 'background-image') {
          event.url = assetsPath + event.url;
          backgroundImages.push(event.url);
        }

      });

      // // debug: reduce times
      // console.log('contracted time for debug');
      // var offset = 0;
      // state.events.forEach(event => {
      //   // event.time = Math.min(event.time/10.0, 3.0);
      //   event.time = offset;
      //   offset += 0.1;
      //   // event.time /= 10.0;
      // });

    });

    // add extra audio events
    triggerAudioBuffers.testFile = this.projectConfig.txt.soundCheck.testFile;
    triggerAudioBuffers.soundcheckTouch = this.projectConfig.txt.soundCheck.testTouchFile;

    // service: load local audio files
    this.audioBufferManager = this.require('audio-buffer-manager', {
      assetsDomain: assetsPath,
      files: triggerAudioBuffers,
    });

    // service: load local images
    this.imagesLoader = this.require('images-loader', {
      // assetsDomain: assetsPath, // is already overriden...
      files: backgroundImages,
    });

    this.soundCheck = this.require('sound-check');
  }

  // on startup
  start() {

    // parent start
    super.start();

    // init audio player
    this.simplePlayer = new SimplePlayer(this.audioBufferManager.data);

    // init view
    this.view = new PlayerView({
      state: 'experience',
      txt: this.projectConfig.txt.restartPage,
    });

    // upon loading first page
    this.show().then(() => {

      // init locals
      this.transport = new audio.Transport();
      this.playControl = new audio.PlayControl(this.transport);

      // init state maching
      this.currentStateIndex = null;
      this.state = null;

      // init debug (listen for controller for debugging / test)
      this.debugMode = false;
      this.sharedParams.addParamListener('debug-mode', value => {
        this.debugMode = value;
      });

      // debug: add callback to load specific state/event upon server message
      this.projectConfig.states.forEach((state, stateIndex) => {
        const name = slugify(state.title);

        this.sharedParams.addParamListener(name, (value) => {

          // discard
          if (!this.debugMode || !value){ return; }

          // get event index from value
          const getPrefix = /^\[[0-9]+\]/;
          const cleanPrefix = /\[|\]/g;
          const prefix = getPrefix.exec(value)[0];
          const eventIndex = parseInt(prefix.replace(cleanPrefix, ''));

          this.setState(stateIndex, eventIndex);
        });
      });

      // chose to restart / continue experience if not debug mode
      const progression = this.retrieveProgression();
      if (!this.debugMode) {

        // if user already experienced the square
        if (progression !== null) {

          // present choice gui
          this.view.model.state = 'choice';
          this.view.render();

          // button callbacks
          this.view.installEvents({

            // restart experiment
            'click #restart': () => {
              this.view.installEvents({}, true);
              this.view.model.state = 'experience';
              this.view.render();
              this.setState(0);
            },

            // continue experiment
            'click #continue': () => {
              this.view.installEvents({}, true);
              this.view.model.state = 'experience';
              this.view.render();
              this.setState(progression.stateIndex, progression.eventIndex);
            },
          }, true);
        }
        // if it's user first time here, start from scratch
        else {
          this.setState(0);
        }
      }

    });
  }

  // setup and start introduction (text + reading voice)
  setState(stateIndex, eventIndex = 0) {
    this.currentStateIndex = stateIndex;
    const config = this.projectConfig;

    if (this.state) {
      this.state.exit();
      this.view.clear();
    }

    const stateConfig = config.states[stateIndex];
    const commonConfig = config.common;
    const isLast = (stateIndex === config.states.length - 1);

    this.state = new State(stateIndex, this, stateConfig, commonConfig, isLast);
    this.state.enter();

    if (eventIndex !== 0)
      this.state.seek(eventIndex);
  }

  saveProgression(stateIndex, eventIndex) {
    const store = JSON.stringify({ stateIndex, eventIndex });
    window.localStorage.setItem(localStorageId, store);
  }

  retrieveProgression() {
    let store = null;

    try {
      store = JSON.parse(window.localStorage.getItem(localStorageId));
    } catch(err) {}

    return store;
  }

  deleteProgression() {
    window.localStorage.removeItem(localStorageId);
  }
}

export default PlayerExperience;


