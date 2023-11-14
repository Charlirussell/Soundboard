const app = {

  /* Method to initialize the application and start the necessary components */
  init: function() {
    console.log('app.init');
    soundboard.init();
  },

}

/* Event listener that executes the app.init method when the DOM is ready*/
// TODO 1
// Event listener to that executes the app.init method
document.addEventListener("DOMContentLoaded", app.init);