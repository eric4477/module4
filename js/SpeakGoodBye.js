(function(window) {

  let byeSpeaker = {}
  let speakWord = "GoodBye";
  byeSpeaker.speak = function(names) {
    console.log(speakWord + " " + names)
  }
  window.byeSpeaker = byeSpeaker
})(window);
