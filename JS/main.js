let container = document.querySelector('.cardcontainer');
let queryCards = document.querySelectorAll('.cards');
let shadow = document.querySelector('.cardcontainer_shadow');
let existingCards = Array.from(queryCards);
let win = document.querySelector('.win');
let resetGame = document.querySelector('.reset');
let compareUs = [];
let divsOfData = [];
let pairCounter = 0;

//High score
let totalClicks = 0;
let highScoreCount = [
  '56',
  '48',
  '72',
].sort();

let highScore = document.querySelector('.highScore').querySelector('ol');
for (highScores of highScoreCount) {
  highScore.innerHTML += `<li> ${highScores} clicks </li>`;
}

shuffleBoard(container);

//Loop through cards and carddata
for (card of existingCards) {
  let queryCardsData = card.dataset.card;

  //card animation
  card.addEventListener('mouseover', function(e) {
    e.target.classList.add('cards_hover');
  })
  card.addEventListener('mouseout', function(e) {
    e.target.classList.remove('cards_hover');
  })

  // Listen for click and send card data to comparisonFunc, within loop.
  card.addEventListener('click', function(e){
    let currentTarget = e.target.dataset.card;
    let compare = compareUs.push(currentTarget);
    let currentDiv = e.target;
    let storeDivs = divsOfData.push(currentDiv);
    e.target.classList.remove('cards_hover');
    setTimeout(function() {
      currentDiv.classList.toggle('clicked');
      let currentImg = currentDiv.querySelector('img');
      let currentPin = currentDiv.querySelector('.pin');
      currentImg.classList.add('images_clicked');
      currentPin.classList.add('pin_clicked');
    }, 50 );
    return comparisonFunc(e.target.dataset.card);
  })
}

//reset game. returns shuffleboard, totallyrandom and clearround function.
resetGame.addEventListener('click', () => {
  setTimeout(function() {
    queryCards.forEach(totallyRandom);
  }, 100 );
  return shuffleBoard();
  return clearRound();
});
