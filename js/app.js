/*
 * Create a list that holds all of your cards
 */

let list = ["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt",
        "fa fa-cube","fa fa-anchor","fa fa-leaf","fa fa-bicycle","fa fa-diamond",
        "fa fa-bomb","fa fa-leaf","fa fa-bomb","fa fa-bolt","fa fa-bicycle",
        "fa fa-paper-plane-o","fa fa-cube"];

 let move_counter = 0;
 let ImgFound = 0;
 open_card = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

list = shuffle(list);

let text = "";
for (const card of list) {
    text += `
    <li class = "card">
      <i class = "${card}"></i>
    </li>`;
}
document.getElementsByClassName("deck")[0].innerHTML = text;


$('.card').click(function() {
  $(this).toggleClass('open show');
  openCard(this);
  moveCounter();
  gameWon();
});

function openCard(card) {
  open_card.push(card);
  if (open_card.length > 1) {
    if ($(open_card).children().first().attr('class') !=
        $(open_card).children().last().attr('class')) {
          setTimeout(function(){
            $(open_card).removeClass('open show');
            open_card = [];
          }, 700);
        } else {
          $(open_card).addClass('match');
          ImgFound++;
      }
    }
  }

  function moveCounter() {
    move_counter++;
    document.getElementsByClassName("moves")[0].innerHTML = move_counter;
  }

  function gameWon() {
    if(ImgFound == list.length/2) {
      document.getElementsByClassName("deck")[0].innerHTML = "You have completed the game. Hit restart to play again.";
    }
  }
  //
  // $('.restart').click(function() {
  //   $('.card').children().removeClass('open show');
  //   move_counter = 0;
  //   ImgFound = 0;
  //   shuffle(list);
  //   return false;
  // })









/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
