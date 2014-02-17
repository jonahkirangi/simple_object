var expect = require('chai').expect,
  Card = require('../lib/card').Card;

describe('when I create a card with a particular suit and rank', function() {
  var myCard;

  beforeEach(function() {
    myCard = new Card('heart', 8);
  });

  describe('constructor', function() {
    it('card should exist', function() {
      expect(myCard).to.be.ok; //jshint ignore:line
    });

    it('card should have particular suit', function() {
      expect(myCard.getSuit()).to.equal('heart');
    });

    it('card should have particular rank', function() {
      expect(myCard.getRank()).to.equal(8);
    });
  });
});
