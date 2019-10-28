$(document).ready(function() {

  var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
  cards.forEach(function(rank) {
    suits.forEach(function(suit) {
      $('ol').append('<li>' + rank + ' of ' + suit + '</li>');
    });
  });
});
