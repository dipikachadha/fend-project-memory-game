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
};

list = shuffle(list);

let text = "";
for (const card of list) {
    text += `
    <li class = "card">
      <i class = "${card}"></i>
    </li>`;
}
document.getElementsByClassName("deck")[0].innerHTML = text;

//flipping the card when it is clicked
$('.card').click(function() {
  $(this).toggleClass('open show');
  openCard(this);
  moveCounter();
  $ratingStars = $('i');
  setRating();
  gameWon();
});

//Comparison of two cards in order to match
function openCard(card) {
  open_card.push(card);
  if (open_card.length > 1) {
    if ($(open_card).children().first().attr('class') !=
        $(open_card).children().last().attr('class')) {
          setTimeout(function(){
            $(open_card).removeClass('open show ').addClass('animated infinite rubberBand');
            open_card = [];
          }, 400);
        } else {
          $(open_card).addClass('match animated infinite wobble');
          ImgFound++;
          open_card = [];
      }
    }
  };

//Increment of moves when a card is clicked
function moveCounter() {
  move_counter++;
  document.getElementsByClassName("moves")[0].innerHTML = move_counter;
};

//SetRating as per the decrement of move_counter as stars will decrement
var rating = 3;
function setRating() {
    if(move_counter > 20 && move_counter < 25) {
      $ratingStars.eq(2).removeClass('fa-star').addClass('fa-star-o');
      rating = 2;
    } else if (move_counter > 26 && move_counter < 28) {
      $ratingStars.eq(1).removeClass('fa-star').addClass('fa-star-o');
      rating = 1;
    } else if (move_counter > 29 && move_counter < 30) {
      $ratingStars.eq(0).removeClass('fa-star').addClass('fa-star-o');
      rating = 0;
    }
};

let gameWonStatus = 0;
//logic of finishing the game
function gameWon() {
  if(ImgFound == list.length/2) {
    document.getElementsByClassName("deck")[0].innerHTML =
      'Congratulation, You Won! with ' + move_counter + ' moves and with ' + rating + ' star\n' +
      'Hit Restart to play again';
    gameWonStatus = 1;
  }
};

//Restart the game
$('.restart').click(function() {
  location.reload()
})

//Timer goes here
var secondsElapsed = 0;
// Update the count down every 1 second
var x = setInterval(function() {
  if (!gameWonStatus) {
    secondsElapsed++;
  }
  // Display the result in the element with id="timer"
  document.getElementsByClassName("timer")[0].innerHTML =
  `<i class='fa fa-clock-o'>
    ${Math.floor(secondsElapsed / 60)}:${
      (secondsElapsed % 60 < 10) ?
        ('0' + secondsElapsed % 60) : secondsElapsed % 60}</i>`;
}, 1000);
