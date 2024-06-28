function makeWord(wordMax) {
    let text = ''
    const possible='bcdfghjklmnpqrstvwxyz'
    const possibleVowels='aeiou'
    
      for(let i=0; i<wordMax; i=i+3){
        text += possible[Math.floor(Math.random()*possible.length)]
        text += possibleVowels[Math.floor(Math.random()*possibleVowels.length)]
        text += possible[Math.floor(Math.random()*possible.length)]
      }
    return text
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.addEventListener("DOMContentLoaded", function() {
    var word = " ";
    for(var i = 0; i < 1000; i++){
        word = word + makeWord(4);
        word = word + " ";
    }
    document.getElementById("scroll").innerHTML = word;
}, false);