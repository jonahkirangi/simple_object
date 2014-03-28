var Card = require('./card').Card;

exports.Deck = function() {

  var deck = [];
  var rank = ['Ace', 'King', 'Queen', 'Jack', 2,3,4,5,6,7,8,9,10];
  var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  for (i = 0; i < suit.length; i++) {
    for (n = 0; n < rank.length; n++) {
      var card = new Card(rank[n], suit[i]);
      deck.push(card);
    }
  }

  constructor.prototype.dealCard = function() {
    return deck.pop();
  };

  return new constructor();
};
