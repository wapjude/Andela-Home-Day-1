
var dataTypes = require('../app/index').dataTypes;
describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(dataTypes(null)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(dataTypes(undefined)).toEqual('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(dataTypes(true)).toBe(true);
    });

    it("should return false for `false`", function() {
      expect(dataTypes(false)).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(dataTypes(100)).toBe('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(dataTypes('tergiversate')).toBe(12);
    });

    it("should return the length of an empty string", function() {
      expect(dataTypes('')).toBe(0);
    });

    it("should return the length of `555`", function() {
      expect(dataTypes('555')).toBe(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(dataTypes([0, 1, 2])).toBe(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(dataTypes([])).not.toBeDefined();
    });
    it("should return `undefined` for `[4, 9]`", function() {
      expect(dataTypes([4, 9])).not.toBeDefined();
    });
  });

  describe("Case for functions", function() {
    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(dataTypes(callback)).toBe('called callback');
    });
  });
});

var getPrimes = require('../app/index').getPrimes;
describe("Case for arrays", function() {

    it("should return invalid input for `[0, 1, 2]`", function() {
      expect(getPrimes([0, 1, 2])).toBe('invalid input');
    });


    it("should return invalid input for jude ", function() {
      expect(getPrimes("jude")).toBe('invalid input');
    });
    it("should return invalid input for jude ", function() {
      expect(getPrimes(-29)).toBe('negative value supplied');
    });

    
    it("should return not prime input for 1", function() {
      expect(getPrimes(1)).toBe('not prime');
    });

   it("should return [2,3] prime input for 4", function() {
      expect(getPrimes(4)).toEqual([2,3]);
    });
    it("should return [2,3,5,7,11] prime input for 12", function() {
      expect(getPrimes(12)).toEqual([2,3,5,7,11]);
    });



  });

var Media = require('../app/oop.js').Media;
var Audio = require('../app/oop.js').Audio;
var Video = require('../app/oop.js').Video;
Video.prototype = new Media();
Audio.prototype = new Media();
describe("Video Class: Create a video, make it play", function() {
  
    it("The Video should be a type of `object`, and an instance of the `Video` class", function() {
      
      var cartoon = new Video('Tom and Jerry');
      expect(typeof cartoon).toEqual(typeof {});
      expect(cartoon instanceof Video).toBeTruthy();
    });

     it("The Video title should be called Tom and Jerry and volume should be 23 by default", function() {
      var cartoon = new Video('Tom and Jerry');
      expect(cartoon.title).toEqual('Tom and Jerry');
      expect(cartoon.volume).toEqual(23);
    });

it("The Audio should be a type of `object`, and an instance of the `Audio` class", function() {
      
      var jackson = new Audio('Thriller');
      expect(typeof jackson).toEqual(typeof {});
      expect(jackson instanceof Audio).toBeTruthy();
    });
it("The Audio should return 'Playing The return of the Mosco By Micheal Jackson At volume of 83' when the title is The return of the Mosco and Author is Micheal Jackson and volume plus 60 ", function() {
      
      var jackson = new Audio('The return of the Mosco');
      jackson.high(60);
      jackson.author = "Micheal Jackson";
      expect(jackson.Play()).toEqual('Playing The return of the Mosco By Micheal Jackson At volume of 83');
      
    });
it("The Video should return 'Playing Andela trick Season 3 By Waleola Akinsami At volume of 13' when the title is The return of the Mosco and Author is Micheal Jackson and volume minus 10 ", function() {
      
      var video = new Video('Andela trick Season 3');
      video.low(10);
      video.author = "Waleola Akinsami";
      expect(video.Play()).toEqual('Playing Andela trick Season 3 By Waleola Akinsami At volume of 13');
      
    });

  });