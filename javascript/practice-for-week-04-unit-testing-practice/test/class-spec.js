const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const w = new Word();
      expect(w).to.have.key('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      const w = new Word('abc');
      expect(w.word).to.equal('abc');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const w1 = new Word('abceou');
      const w2 = new Word('cdf');
      const w3 = new Word('ABCEF');
      const w4 = new Word('');

      expect(w1.removeVowels()).to.equal('bc');
      expect(w2.removeVowels()).to.equal('cdf');
      expect(w3.removeVowels()).to.equal('BCF');
      expect(w4.removeVowels()).to.equal('');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const w1 = new Word('abceou');
      const w2 = new Word('cdf');
      const w3 = new Word('ABCEF');
      const w4 = new Word('');

      expect(w1.removeConsonants()).to.equal('aeou');
      expect(w2.removeConsonants()).to.equal('');
      expect(w3.removeConsonants()).to.equal('AE');
      expect(w4.removeConsonants()).to.equal('');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const w1 = new Word('abcsd');
      const w2 = new Word('ceobx');
      const w3 = new Word('bcx');

      expect(w1.pigLatin()).to.equal('abcsdyay');
      expect(w2.pigLatin()).to.equal('eobxcay');
      expect(w3.pigLatin()).to.equal(undefined);
    });
  });
});