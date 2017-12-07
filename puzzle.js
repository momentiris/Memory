let container = document.querySelector('.cardcontainer');
let queryCards = document.querySelectorAll('.cards');

let existingCards = Array.from(queryCards);
let shadow = document.querySelectorAll('.shadow');
let win = document.querySelector('.win');

let resetGame = document.querySelector('.reset');
let compareUs = [];
let divsOfData = [];
let divsIndex = [];
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

function totallyRandom(element, index, array) {
  let random = Math.random() * -10  + 'px';
  let random2 = Math.random() * 900 + 'px';
  let random3 = Math.random() / -10 * -100 + 'px';
  let randomDeg = Math.random() * 700 + 'deg';
  let randomShadow = Math.random() * 100 + 'px';

  setTimeout(function() {
    element.style.transform = `translateZ(${random3, random, random2}) translateX(${random3, random2, random}) translateY(${random3, random2, random}) rotate(${randomDeg})`;
  }, 100 * index);
    card.style.transition = "all 1s ease";
  setTimeout(function() {
    setTimeout(function () {
      element.style.cssText = "";
    }, 100 * index)
 }, 2500)
};

let clearRound = (cards) => {
  setTimeout(function() {
    for (divs of divsOfData) {
      divs.classList.remove('clicked');
      divs.querySelector('.images').classList.remove('images_clicked');
      divs.querySelector('.pin').classList.remove('pin_clicked');
    }
    divsOfData = [];
    compareUs = [];
  }, 700);
}

  let shuffleBoard = () => {
    divsIndex = [];
    compareUs = [];
    divsOfData = [];
    totalClicks = 0;
    pairCounter = 0;

    win.style.opacity = "0";
    setTimeout(function(){
      win.style.visibility = "hidden";
      container.classList.remove('container_idle');
    }, 5);

    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
    for (cards of queryCards) {
      cards.querySelector('.pin').classList.remove('pin_clicked');
      cards.classList.remove('clicked');
    }

  }
  shuffleBoard(container);

      //Count length of compareUs array and compare values
  let comparisonFunc = (dataset) => {
    totalClicks++;
    if (compareUs.length == 2 && divsOfData.length == 2) {
      if (compareUs[0] == compareUs[1]) {
        pairCounter++;
        if (pairCounter == 1 ) {
          win.style.visibility = "visible";
          highScoreCount.push(totalClicks);
          let congrats = `Congratulations! You scored ${pairCounter} pairs with a total of ${totalClicks} clicks.`;
          win.innerHTML += congrats;
          for (highScores of highScoreCount) {
            highScore.innerHTML += `<li> ${totalClicks} clicks </li>`;
          }
          setTimeout(function(){
            win.style.opacity = "1";
            container.classList.toggle('container_idle');
          }, 500)
        }

        compareUs = [];
        divsOfData = [];

      } else {
        container.classList.add('container_clicked');
        setTimeout(function(){
          container.classList.remove('container_clicked');
        }, 700);

        return clearRound();
      }
    }
  }
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
//reset game
  resetGame.addEventListener('click', () => {
    setTimeout(function() {
           queryCards.forEach(totallyRandom);
          }, 100 );
    return shuffleBoard();
    return clearRound();
});
