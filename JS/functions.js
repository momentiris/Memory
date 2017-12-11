let newGame = () => {

  queryCards.forEach(function(card, index) {
    card.style.opacity = "0";
    setTimeout(function() {
      card.style.opacity = "1";
    }, 200 * index);
  })
}

//This function animates card on hit "play again" button.
function totallyRandom(element, index, array) {
  let random = Math.random() * -100 + 'px';
  let random2 = Math.random() * 900 + 'px';
  let random3 = Math.random() / -100 * -400 + 'px';
  let randomDeg = Math.random() * 1500 + 'deg';
  let randomShadow = Math.random() * 100 + 'px';

  setTimeout(function() {
    element.style.transform = `translateZ(${random3, random, random2}) translateX(${random3, random2, random}) translateY(${random3, random2, random}) rotate(${randomDeg})`;
  }, 75 * index);
  card.style.transition = "all 1s ease";
  setTimeout(function() {
    setTimeout(function() {
      element.style.cssText = "";
    }, 100 * index)
  }, 1500)
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

//This function clears all arrays of datavalues and shuffles card order in the DOM

let shuffleBoard = () => {
  compareUs = [];
  divsOfData = [];
  totalClicks = 0;
  pairCounter = 0;
  win.style.opacity = "0";
  setTimeout(function() {
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

//Here we compare dataset value of the cards and execute for true/false
let comparisonFunc = (dataset) => {
  totalClicks++;
  if (compareUs.length == 2 && divsOfData.length == 2) {
    if (compareUs[0] == compareUs[1]) {
      pairCounter++;
      if (pairCounter == 8) {
        win.style.visibility = "visible";
        highScoreCount.push(totalClicks);
        let congrats = `Congratulations! You completed the game with a total of ${totalClicks} clicks.`;
        win.innerHTML += congrats;

          highScore.innerHTML += `<li> ${totalClicks} clicks </li>`;

        setTimeout(function() {
          win.style.opacity = "1";
          container.classList.toggle('container_idle');
        }, 500)
      }
      compareUs = [];
      divsOfData = [];

    } else {
      container.classList.add('container_clicked');
      setTimeout(function() {
        container.classList.remove('container_clicked');
      }, 700);

      return clearRound();
    }
  }
}
