const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let newWord;

    beforeEach(() => {
      newWord = new Word("dinosaur");
    })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(newWord).to.have.all.keys('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(newWord.word).to.be.equal("dinosaur");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(newWord.removeVowels()).to.be.equal("dnsr");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(newWord.removeConsonants()).to.be.equal("ioau");;
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(newWord.pigLatin()).to.be.equal("inosaurday");;
    });
  });
});
