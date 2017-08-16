function Roman(logger) {
    this.logger = logger; 
}

Roman.prototype.convertToRoman = function (input) 
{
    var numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArray =  ['M', 'CM', 'D', 'CD', 'C','XC','L','XL','X','IX','V','IV','I'];
    
    var result = '';
    
    this.logger.Write(input);
    
    while (input > 0)
    {
        for (i = 0; i < numberArray.length; i++)
        {
            if (numberArray[i] <= input)
            {
                result = result + romanArray[i];
                input = input - numberArray[i];
                break;
            }
        }

    //   if (900 <= input)
    //     {
    //         result = result + "CM";
    //         input = input - 900;
    //     }
        
    //  else if (500 <= input)
    //     {
    //         result = result + "D";
    //         input = input - 500;
    //     }
             
    //   else if (400 <= input)
    //     {
    //         result = result + "CD";
    //         input = input - 400;
    //     }
                
    //   else if (100 <= input)
    //     {
    //         result = result + "C";
    //         input = input - 100;
    //     }
        
    //   else if (90 <= input)
    //     {
    //         result = result + "XC";
    //         input = input - 90;
    //     }
        
    //   else if (50 <= input)
    //     {
    //         result = result + "L";
    //         input = input - 50;
    //     }
        
    //   else if (40 <= input)
    //     {
    //         result = result + "XL";
    //         input = input - 40;
    //     }
        
    //   else if (10 <= input)
    //     {
    //         result = result + "X";
    //         input = input - 10;
    //     }
        
    //   else if (9 <= input)
    //     {
    //         result = result + "IX";
    //         input = input - 9;
    //     }
        
    //     else if (5 <= input)
    //     {
    //         result = result + "V";
    //         input = input - 5;
    //     }
        
    //     else if (4 <= input)
    //     {
    //         result = result + "IV";
    //         input = input - 4;
    //     }
        
    //     else if (1 <= input)
    //     {
    //         result = result + "I";
    //         input = input - 1;
    //     }
        

    }

   return result;

 
 
} 

module.exports = Roman;