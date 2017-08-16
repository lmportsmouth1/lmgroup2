// Refactoring Workbook (01-02-03)
// Copyright 2001-2, William C. Wake. All Rights Reserved.
// Original in Java
//	expectedToMatchTo = [10, 50, 30, 98];
//var valuesToTryWith = [12, 55, 25, 110];
var Matcher = (function () 
{
    function Matcher()
    {
    }
    Matcher.prototype.match = function (expected, actual, clipLimit, delta)
    {

        
        // Clip "too-large" values
        clipValue(actual,clipLimit);
        
        // Check for length differences
        if (!ValidLength(actual,expected))
            {
                return false;
            }

        // Check that each entry within expected +/- delta
    if (!ValidDelta(actual,expected, delta))
            {
                return false;
            }
            
        return true;
    };
    
        function clipValue(actual, clipLimit)
    {
        // Clip "too-large" values
        for (var i = 0; i < actual.length; i++)
            if (actual[i] > clipLimit)
                actual[i] = clipLimit;
    }
    
        function ValidLength(actual, expected)
    {
        // Check for length differences
        if (actual.length !== expected.length)
        {
            return false;
        }
        return true;
    }
    
        function ValidDelta(actual, expected, delta)
    {
        // Check that each entry within expected +/- delta
        for (var i = 0; i < actual.length; i++)
        {
            if (Math.abs(expected[i] - actual[i]) > delta)
                return false;
        }
        return true;
                
    }
    
    return Matcher;
}());



module.exports = Matcher;