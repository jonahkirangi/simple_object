var expect = require('chai').expect,
Card = require('../lib/card').Card;

describe('when I create a card with a particular suit and rank', function() {

  var myCard;

  beforeEach(function() {
    myCard = new Card('heart', 8);
  });

  it('card has that suit and rank', function() {

    expect(myCard).to.be.ok;

    expect(myCard.getSuit()).to.equal('heart');

    expect(myCard.getRank()).to.equal(8);


  });

});
