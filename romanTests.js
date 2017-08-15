"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');

describe("Roman Numeral Tests", function () {
    
    
    it("checkInput1", function(done) { 
        getRoman("I",1);
        done();
    });
    
      it("checkInput2", function(done) { 
        getRoman("II",2);
        done();
    });
    
          it("checkInput3", function(done) { 
        getRoman("III",3);
        done();
    });
    
    
      function getRoman(expected, input) {
        var instanceRoman = new Roman();
        var result = instanceRoman.convertToRoman(input);
        assert(expected === result, "Input: " + input + " Failed, result was " + result);
    }

 
    
});