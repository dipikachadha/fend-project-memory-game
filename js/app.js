/*
 * Create a list that holds all of your cards
 */

let list = ["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt",
        "fa fa-cube","fa fa-anchor","fa fa-leaf","fa fa-bicycle","fa fa-diamond",
        "fa fa-bomb","fa fa-leaf","fa fa-bomb","fa fa-bolt","fa fa-bicycle",
        "fa fa-paper-plane-o","fa fa-cube"];
        
let ImgOpened = "";
let imgFound = 0;

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




//function ResetGame() {

//}
$('.card').click(function() {
  $(this).toggleClass('open show');
  //if $(this).children().first().attr('.class') == $(open_cards[open_cards.length-1]).children().first().attr('.class') {
    //open_cards.push(this);
function OpenCard() {
  if(ImgOpened == "") {
    ImgOpened = $(this).children().first();
    setTimeout(function() {
      $(this).bind('click',OpenCard)
    },500)
  } else {
    CurrentOpened = $(this).children().last();
      if(ImgOpened != CurrentOpened) {
        setTimeout(function(){
          $(this).toggle();
          ImgOpened ="";
        }, 400);
      } else {
        $(this).parent().hide();
        ImgFound++;
      }
    }
  }
});
// var card1 = undefined;
// var card2 = undefined;
//
// $('.card').click(function() {
//   if($(this).attr('class') === 'open show') {
//       $card1 = list[0];
//     } else {
//       $card2 = list[1];
//     }
//      if ($($card1).text() === $($card2).text()){
//        $(this).is('match');
//      } else {
//        $(this).toggleClass('card');
//      }
//   })




//   if(move_counter = list.length/2) {
//     document.getElementsByClassName("container")[0].innerHTML = "YOU COMPLETED THE GAME-HIT RESTART TO PLAY AGAIN";
//   }
//   shuffle(list);
// }

//document.getElementsByClassName("moves")[0].innerHTML = move_counter;




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
