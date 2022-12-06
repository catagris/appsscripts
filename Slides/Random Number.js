function onOpen() {
SlidesApp.getUi() // Or DocumentApp or FormApp.
    .createMenu('Choose Winner')
    .addItem('Run Random Winner Selection', 'winner')
    .addToUi();
}

function winner() {
  var winnerArray = []
  var numbersNeeded = 6
  var startingSlide = 18
  for (var numberofWinner = 0; numberofWinner < numbersNeeded;) {
    let randomNumber = (Math.floor(Math.random() * (120) + 1))
    var randomNumberString = randomNumber.toString()
    if(!winnerArray.includes(randomNumberString)) {
        winnerArray.push(randomNumberString);
        console.log(randomNumberString)
        numberofWinner = numberofWinner +1
    } else {
    }
  }
  console.log(winnerArray)
  startingSlide = startingSlide - 1
  winnerArray.forEach(function(value){
    const WINNER = value
    const s = SlidesApp.getActivePresentation(); // or SlidesApp.openById("id")
    const pageElementId = s.getSlides()[startingSlide].getObjectId(); // pageElementId of counter.
    // console.log(pageElementId)
    const resource = {
      requests: [{
        replaceAllText: {
          pageObjectIds: [pageElementId],
          replaceText: WINNER,
          containsText: { matchCase: true, text: "{{WINNER}}" }
        }
      }]
    };
    Slides.Presentations.batchUpdate(resource, s.getId());
    startingSlide = startingSlide + 1
  });
}
