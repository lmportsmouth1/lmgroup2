"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');
var Logger = require('./logger');
var sinon = require('sinon');


describe("Roman Numeral Tests", function () {
    
    var logger;
    
    beforeEach(function (done) {
       logger = new Logger();
       done(); 
    });
    
    it("checkInput1-fake", function(done) { 
        logger.Write = function() {};
        getRoman("I",1);
        done();
    });
    
      it("checkInput2-dummy", function(done) { 
			logger.Write = function() 
			{
                console.log("dummy");
			};
        getRoman("II",2);
        done();
    });
    
    it("checkInput3-stub", function(done) { 
			var stubWrite = sinon.stub(logger, 'Write');
			stubWrite.returns(console.log("stub"));
        getRoman("III",3);
        done();
    });
    
    it("checkInput4", function(done) { 
        getRoman("IV",4);
        done();
    });
        it("checkInput5", function(done) { 
        getRoman("V",5);
        done();
    });
        it("checkInput6", function(done) { 
        getRoman("VI",6);
        done();
    });
        it("checkInput9", function(done) { 
        getRoman("IX",9);
        done();
    });
        it("checkInput10", function(done) { 
        getRoman("X",10);
        done();
    });
        it("checkInput12", function(done) { 
        getRoman("XII",12);
        done();
    });
        it("checkInput42", function(done) { 
        getRoman("XLII",42);
        done();
    });
    
        it("checkInput55", function(done) { 
        getRoman("LV",55);
        done();
    });
    
        it("checkInput93", function(done) { 
        getRoman("XCIII",93);
        done();
    });
    
            it("checkInput415", function(done) { 
        getRoman("CDXV",415);
        done();
    });    
    
            it("checkInput515", function(done) { 
        getRoman("DXV",515);
        done();
    });  
        
        it("checkInput922", function(done) { 
        getRoman("CMXXII",922);
        done();
    });  
    
        it("checkInput22", function(done) { 
        getRoman("XXII",22);
        done();
    });  

        it("checkInput200", function(done) { 
        getRoman("CC",200);
        done();
    });  
      function getRoman(expected, input) {
        var instanceRoman = new Roman(logger);
        var result = instanceRoman.convertToRoman(input);
        assert(expected === result, "Input: " + input + " Failed, result was " + result);
    }

 
    
});