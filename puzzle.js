
// TO DO:
        //1. Push all existing cards in to array
        //2. When click on cards, see if match,
        //    if no match, flip cards back over.
        //    if match, stay flipped


  let container = document.querySelector('.cardcontainer');
  let queryCards = document.querySelectorAll('.cards');
  let existingCards = Array.from(queryCards);
  let win = document.querySelector('.win')

  let compareUs = [];
  let divsOfData = [];
  let dataArray = [];
  let counter = 0;

      //Count length of compareUs array and compare values

  let comparisonFunc = (dataset) => {
    if (compareUs.length == 2 && divsOfData.length == 2) {
      if (compareUs[0] == compareUs[1]) {
        console.log('WIN');

        counter++;
        console.log(counter);
        if (counter == 8) {
          win.style.visibility = "visible";
          setTimeout(function(){
            win.style.opacity = "1";
            container.classList.toggle('container_idle');
          }, 500)
        }
        console.log(counter);
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

        console.log(divsOfData[1]);
      }
    }

  }

      //Loop through cards and carddata
      for (card of existingCards) {
      let queryCardsData = card.dataset.card;
      dataArray.push(queryCardsData);

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


  let resetGame = document.querySelector('.reset');
  resetGame.addEventListener('click', () => {
    win.style.opacity = "0";
    setTimeout(function(){
      win.style.visibility = "hidden";
      container.classList.toggle('container_idle');
    }, 500)

    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }

for (var i = 0; i < existingCards.length -1; i++) {
  let currentLeft = existingCards[i].getBoundingClientRect().left;
  let currentTop = existingCards[i].getBoundingClientRect().top;
  let currentRight = existingCards[i].getBoundingClientRect().right;
  let currentBottom = existingCards[i].getBoundingClientRect().bottom;
  let nextLeft = existingCards[i + 1].getBoundingClientRect().left;
  let nextTop = existingCards[i + 1].getBoundingClientRect().top;
  let nextRight = existingCards[i + 1].getBoundingClientRect().right;
  let nextBottom = existingCards[i + 1].getBoundingClientRect().bottom;

  existingCards[i].style.left = nextLeft + 'px';
  existingCards[i].style.top = nextTop + 'px';
  existingCards[i].style.right = nextRight + 'px';
  existingCards[i].style.bottom = nextBottom + 'px';
  existingCards[i].style.left = currentLeft + 'px';
  existingCards[i].style.top = currentTop + 'px';
  existingCards[i].style.right = currentRight + 'px';
  existingCards[i].style.bottom = currentBottom + 'px';
  console.log(i);
}


});
