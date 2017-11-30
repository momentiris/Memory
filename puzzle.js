  // const sentence = `${name + mname}`;


// TO DO:
        //1. Push all existing cards in to array
        //2. When click on cards, see if match,
        //    if no match, flip cards back over.
        //    if match, remove pair from array of existing cards and from the game board.






  let compareUs = [];
  let queryCards = document.querySelectorAll('.cards');
  let existingCards = Array.from(queryCards);

  let comparisonFunc = (dataset, callback) => {
    if (compareUs.length == 2) {
      if (compareUs[0] == compareUs[1]) {
        console.log('WIN');
        compareUs = [];
      } else {
        console.log('LooSE');
        compareUs = [];
      }
    }
  }

    for (card of existingCards) {
      card.addEventListener('click', function(e){
        let currentTarget = e.target.dataset.card;
        let compare = compareUs.push(currentTarget);
        return comparisonFunc(e.target.dataset.card);
      })
    }
