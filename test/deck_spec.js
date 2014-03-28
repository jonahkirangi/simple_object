var expect = require('chai').expect,
  Card = require('../lib/card').Card;
  Deck = require('../lib/deck').Deck;

describe('when a deck of cards is created', function() {
  var myDeck;

  beforeEach(function() {
    myDeck = new Deck();
    myDeck.init();
  });

  describe('constructor', function() {
    it('deck should exist', function() {
      expect(myDeck).to.be.an('object');
    });

    it('deck should not have cards as a property', function() {
      expect(myDeck).to.not.have.property('cards');
    });

    it('deck should store 52 cards', function() {
      expect(myDeck.size()).to.equal(52);
    });
  });
});
