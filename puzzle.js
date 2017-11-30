
// TO DO:
        //1. Push all existing cards in to array
        //2. When click on cards, see if match,
        //    if no match, flip cards back over.
        //    if match, stay flipped


  let container = document.querySelector('.cardcontainer');
  let queryCards = document.querySelectorAll('.cards');
  let existingCards = Array.from(queryCards);

  let compareUs = [];
  let dataArray = [];
  let counter = 0;


      //Count length of compareUs array and compare values

  let comparisonFunc = (dataset, callback) => {
    if (compareUs.length == 2) {
      if (compareUs[0] == compareUs[1]) {
        console.log('WIN');
        compareUs = [];

        counter++;

      } else {
        console.log('LooSE');
        compareUs = [];
      }
    }
  }

      //Loop through cards and carddata
      for (card of existingCards) {
      let queryCardsData = card.dataset.card;
      dataArray.push(queryCardsData);

      // Listen for click and send card data to comparisonFunc, within loop.
    card.addEventListener('click', function(e){
      let currentTarget = e.target.dataset.card;
      let compare = compareUs.push(currentTarget);
      e.target.style.width = "300px";
      return comparisonFunc(e.target.dataset.card);




    })
  }

  //NEW LOOP FOR SHUFFLING DIV order
  for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }

  console.log(container.children);





//card animation




  //ToDO
  //1.Fetch each card
  //2. get Array from carddata
  //3. shuffle Array
  //3.create new divs with card data from shuffled array
  //4. output divs again
