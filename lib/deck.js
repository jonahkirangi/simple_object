var Card = require('./card').Card;

exports.Deck = function() {

  var deck = [];
  var rank = ['Ace', 'King', 'Queen', 'Jack', 2,3,4,5,6,7,8,9,10];
  var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  var Constructor = function () {};

  Constructor.prototype.init = function () {
    for (var i = 0; i < suit.length; i++) {
      for (var n = 0; n < rank.length; n++) {
        var card = new Card(rank[n], suit[i]);
        deck.push(card);
      }
    }
  };

  Constructor.prototype.dealCard = function() {
    return deck.pop();
  };

  Constructor.prototype.size = function() {
    return deck.length;
  };

  return new Constructor();
};
