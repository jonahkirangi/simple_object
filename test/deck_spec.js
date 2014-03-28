var expect = require('chai').expect,
  Card = require('../lib/card').Card;
  Deck = require('../lib/deck').Deck;

describe('when a deck of cards is created', function() {
  var myDeck;

  beforeEach(function() {
    myDeck = new Deck();
  });

  describe('constructor', function() {
    it('deck should exist', function() {
      expect(myDeck).to.be.an('object');
    });

    it('deck should have cards', function() {
      expect(myDeck).to.have.property('cards');
    });

    it('deck should store 52 cards', function() {
      expect(myDeck).to.have.length.equal(52);
    });
  });
});
