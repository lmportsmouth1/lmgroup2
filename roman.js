function Roman() {
   
}

Roman.prototype.convertToRoman = function (input) 
{
    if (input == 1)
    {
        return "I";
    }
    
    if (input == 2)
    {
        return "II";
    }
 
} 

module.exports = Roman;