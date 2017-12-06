


  let container = document.querySelector('.cardcontainer');
  let queryCards = document.querySelectorAll('.cards');


  let existingCards = Array.from(queryCards);
  let shadow = document.querySelectorAll('.shadow');
  let win = document.querySelector('.win')

  let randomDeg2 = Math.random() * 1000 + 'deg';
  let randomDeg3 = Math.random() * 1000 + 'deg';
  let randomDeg4 = Math.random() * 1000 + 'deg';
  let randomDegReset = Math.random() * 0 + 'deg';

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

  console.log(highScoreCount);



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

  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }

      //Count length of compareUs array and compare values

  let comparisonFunc = (dataset) => {
    totalClicks++;
    if (compareUs.length == 2 && divsOfData.length == 2) {
      if (compareUs[0] == compareUs[1]) {
        pairCounter++;

        if (pairCounter == 2) {
          win.style.visibility = "visible";
          highScoreCount.push(totalClicks);
          console.log(highScoreCount);
          console.log(highScoreCount);
          let congrats = `Congratulations! You scored ${pairCounter} pairs with a total of ${totalClicks} clicks.`;
          win.innerHTML += congrats;


            highScore.innerHTML += `<li> ${totalClicks} clicks </li>`;





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
        }, 800);

        setTimeout(function() {
          divsOfData [0].classList.remove('clicked');
          divsOfData[0].querySelector('.images').classList.remove('images_clicked');
            divsOfData[0].querySelector('.pin').classList.remove('pin_clicked');
          divsOfData[1].classList.remove('clicked');
          divsOfData[1].querySelector('.images').classList.remove('images_clicked');
          divsOfData[1].querySelector('.pin').classList.remove('pin_clicked');


          divsOfData = [];
          compareUs = [];
        }, 800);
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

  //NEW LOOP FOR SHUFFLING DIV order

  resetGame.addEventListener('click', () => {
    divsIndex = [];
    compareUs = [];
    divsOfData = [];
    totalClicks = 0;
    pairCounter = 0;
    for (divs of queryCards) {
      divs.querySelector('img').classList.remove('images_clicked');
    }

    win.style.opacity = "0";
    setTimeout(function(){
      win.style.visibility = "hidden";
      container.classList.remove('container_idle');
    }, 5);

    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
      divsIndex.push(i);
    }

    for (cards of queryCards) {
      cards.querySelector('.pin').classList.remove('pin_clicked');
      cards.classList.remove('clicked');
    }

    setTimeout(function() {

           queryCards.forEach(totallyRandom);
          }, 100 );
});
