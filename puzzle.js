
// TO DO:
        //1. Push all existing cards in to array
        //2. When click on cards, see if match,
        //    if no match, flip cards back over.
        //    if match, stay flipped


  let container = document.querySelector('.cardcontainer');
  let queryCards = document.querySelectorAll('.cards');
  let existingCards = Array.from(queryCards);
  let win = document.querySelector('.win')





  let randomDeg2 = Math.random() * 1000 + 'deg';
  let randomDeg3 = Math.random() * 1000 + 'deg';
  let randomDeg4 = Math.random() * 1000 + 'deg';
  let randomDegReset = Math.random() * 0 + 'deg';


  let compareUs = [];
  let divsOfData = [];
  let divsIndex = [];
  let counter = 0;

  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }

      //Count length of compareUs array and compare values

  let comparisonFunc = (dataset) => {
    if (compareUs.length == 2 && divsOfData.length == 2) {
      if (compareUs[0] == compareUs[1]) {
        console.log('WIN');

        counter++;

        if (counter == 8) {
          win.style.visibility = "visible";
          setTimeout(function(){
            win.style.opacity = "1";
            container.classList.toggle('container_idle');
          }, 500)
        }

        compareUs = [];
        divsOfData = [];

      } else {
        console.log('LooSE');


        setTimeout(function() {
          divsOfData[0].classList.remove('clicked');
          divsOfData[1].classList.remove('clicked');
              divsOfData = [];
                compareUs = [];
        }, 400);


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
          e.target.classList.toggle('clicked');
      }, 100);
      return comparisonFunc(e.target.dataset.card);
    })
  }

  //NEW LOOP FOR SHUFFLING DIV order
  let one = document.querySelectorAll('.one');

  let resetGame = document.querySelector('.reset');
  resetGame.addEventListener('click', () => {
    divsIndex = [];
    compareUs = [];
    divsOfData = [];
    counter = 0;

    win.style.opacity = "0";
    setTimeout(function(){
      win.style.visibility = "hidden";
      container.classList.remove('container_idle');
    }, 1000);

    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
      divsIndex.push(i);
    }
    console.log(divsIndex);

    setTimeout(function() {
      for (cards of queryCards) {
        let random = Math.random() * -10 * 20 + 'px';
         let random2 = Math.random() * 30 * 80 + 'px';
         let random3 = Math.random() * 20 * -100 + 'px';
           let randomDeg = Math.random() * 1000 + 'deg';
               cards.style.transform = `translateZ(${random3, random, random2}) translateX(${random3, random2, random}) translateY(${random3, random2, random}) rotate(${randomDeg})`;


          cards.style.transition = "all 1s ease";
                setTimeout(function() {
                  for (cards of queryCards) {
                    let randomReset = Math.random() * 0 + 'px';
                    cards.style.transform = `translateY(${randomReset}) translateX(${randomReset}) rotate(${randomDegReset})`;
                  }
                }, 1000)
      }

    }, 100);

});
