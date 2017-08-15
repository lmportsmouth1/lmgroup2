function Roman() {
   
}

Roman.prototype.convertToRoman = function (input) 
{
    if ((input == 1) || (input ==2)  || (input == 3))
    {
        var loop = input/1;
        var result = '';
       for (i = 0; i < loop; i++) 
       { 
          result = result + 'I';
       }
    }

 
 
} 

module.exports = Roman;