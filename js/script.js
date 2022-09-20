(function() {
  let names = ["Yaakov","john","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"]

  for (let i=0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0).toLocaleLowerCase();
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[i]) 
      
    }else{
      helloSpeaker.speak(names[i])
    }

    
  }
})();