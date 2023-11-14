const soundboard = {

  /* DOM properties. The appropriate values ​​will be given by the "definePads" method */
  themeElement: null,
  leviosaElement: null,
  dobyElement: null,
  griffindorElement: null,
  trollElement: null,
  silenceElement: null,
  
  /*Audio properties. The appropriate values ​​will be given by the "preloadSamples" method */
  themeAudio: null,
  leviosaAudio: null,
  dobyAudio: null,
  griffindorAudio: null,
  trollAudio: null,
  silenceAudio: null,

  /*Method to initilise the soundboard*/
  init: function() {
    console.log('soundboard.init');
    soundboard.definePads();
    soundboard.preloadSamples();
    soundboard.attachEvents();
    document.addEventListener('keydown', soundboard.handleKeyboard); 
  },

  /** Method for selecting the different pad elements in the DOM*/
  definePads: function() {
    // TODO 2
    // Query selectors that link the properties to their elements
    soundboard.themeElement = document.querySelector('.pad-1');
    soundboard.leviosaElement = document.querySelector('.pad-2');
    soundboard.dobyElement = document.querySelector('.pad-3');
    soundboard.griffindorElement = document.querySelector('.pad-4');
    soundboard.trollElement = document.querySelector('.pad-5');
    soundboard.silenceElement = document.querySelector('.pad-6');
  },

  /* Method to initialize and preload the different audio samples to play */
  preloadSamples: function() {
    soundboard.themeAudio = new Audio('assets/audio/theme.mp3');
    soundboard.leviosaAudio = new Audio('assets/audio/leviosa.mp3');
    soundboard.dobyAudio = new Audio('assets/audio/doby.mp3');
    soundboard.griffindorAudio = new Audio('assets/audio/griffindor.mp3');
    soundboard.trollAudio = new Audio('assets/audio/troll.mp3');
    soundboard.silenceAudio = new Audio('assets/audio/silence.mp3');
  },

  /* Method/Handler to execute when the pad "Hedwig's Theme" is pressed*/
  handleThemeClick: function() {
    soundboard.themeAudio.currentTime = 0; // This puts the current time back to 0 so that it plays from the start
    soundboard.themeAudio.play();
  },

  /* Method/Handler to execute when the pad "leviosa" is pressed*/
  handleLeviosarClick: function() {
    soundboard.leviosaAudio.currentTime = 0;
    soundboard.leviosaAudio.play();
  },

  /* Method/Handler to execute when the pad "doby" is pressed*/
  handleDobyClick: function() {
    soundboard.dobyAudio.currentTime = 0;
    soundboard.dobyAudio.play();
  },

  /* Method/Handler to execute when the pad "griffindor" is pressed*/
  handleGriffindorClick: function() {
    soundboard.griffindorAudio.currentTime = 0;
    soundboard.griffindorAudio.play();
  },

  /* Method/Handler to execute when the pad "troll" is pressed*/
  handleTrollClick: function() {
    soundboard.trollAudio.currentTime = 0;
    soundboard.trollAudio.play();
  },

  /* Method/Handler to execute when the pad "silence" is pressed*/
  handleSilenceClick: function() {
    soundboard.silenceAudio.currentTime = 0;
    soundboard.silenceAudio.play();
  },

  /* Method allowing you to add an event listener per pad */
  attachEvents: function() {
    // TODO 3
    // Event listeners for each element 
    soundboard.themeElement.addEventListener('click', soundboard.handleThemeClick);
    soundboard.leviosaElement.addEventListener('click', soundboard.handleLeviosarClick);
    soundboard.dobyElement.addEventListener('click', soundboard.handleDobyClick);
    soundboard.griffindorElement.addEventListener('click', soundboard.handleGriffindorClick);
    soundboard.trollElement.addEventListener('click', soundboard.handleTrollClick); 
    soundboard.silenceElement.addEventListener('click', soundboard.handleSilenceClick);
    //Global event listener for the keyboard function
    document.addEventListener('keydown', soundboard.handleKeyboard);
  },
  // Handle executed when any key is pressed
  handleKeyboard: function(event) {
    //if (event.key === 'a') { console.log('a key')}
    if (event.key === 'q') { soundboard.themeElement.click(); }
    if (event.key === 'w') { soundboard.leviosaElement.click(); }
    if (event.key === 'e') { soundboard.dobyElement.click(); }
    if (event.key === 'r') { soundboard.griffindorElement.click(); }
    if (event.key === 't') { soundboard.trollElement.click(); }
    if (event.key === 'y') { soundboard.silenceElement.click(); }
  },
};

