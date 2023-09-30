var firstNumber = null; // the first number memory is empty
    var nextNumber = true;// if true, it clears when you start typing the next number
    var operation = null; // operation1 memory empty
    var secondNumber = null; // the second number memory is empty too
    var result = 0; // no result yet
    var number1 = number2 = false; // is it populated?
    var dot = false; // only one dot in the numbers
    var calc_display; // the display
    
    // Dealing with binary floating point numbers in IEEE 754
    var decimal0 = false; // to activate the decimal bug patch.
    var decimal1 = 0; // first number decimal places
    var decimal2 = 0; // second number decimal places
    var decimal3 = 0; // number places of whoever have the most.
        
    function operate(){
        switch(operation){
            case "+": result = Number(firstNumber) + Number(secondNumber); break;
            case "-": result = Number(firstNumber) - Number(secondNumber); break;
            case "x": result = Number(firstNumber) * Number(secondNumber); break;
            case "/": result = Number(firstNumber) / Number(secondNumber); break;
            default: console.log("what in the freak!");
        }
        
        result = result.toFixed(decimal3);
        firstNumber = calc_display.textContent = result;
        secondNumber = null; 
        number2 = decimal0 = false;
        decimal1 = decimal2 = decimal3 = 0;    
    }

    function clearDisplay(){
        calc_display.textContent = ""; 
            firstNumber = null;
            secondNumber = null;
            operation = null;
            result = null;
            number1 = false;
            number2 = false;
            var dot = false;
    }

    function handleClick(buttonPressed){
        calc_display = document.getElementById("display");
                
        //Clear
        if (buttonPressed == "C"){clearDisplay();}

        //Dot
        else if (buttonPressed == "."){
            decimal0 = true;
            if (nextNumber){calc_display.textContent = ""; nextNumber = false;}
            if (!dot){dot = true; calc_display.textContent += ".";}
        }

        //Back
        else if(buttonPressed == "B"){
            var str = calc_display.textContent;
            str = str.slice(0, -1);
            firstNumber = result = calc_display.textContent = Number(str);
            if (calc_display.textContent == "0"){clearDisplay();}
        }
        
        //+,-,*,/
        else if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "x" || buttonPressed == "/"){
            nextNumber = true; dot = false; decimal0 = false;
            if (firstNumber != null){ number1 = true;}
            if (secondNumber != null){number2 = true;}
            if (number1 && number2){operate();}
            operation = buttonPressed;
        }

        //Equal new
        else if (buttonPressed == "="){
            dot = false;
            decimal0 = false;
            decimal3 = (decimal1 > decimal2) ? decimal3 = decimal1 : decimal3 = decimal2;
            operate();
            operation = null;//you can press equal just once
        }

        //Number    
        else if (buttonPressed =>0 && buttonPressed <=9){
               
                //clear the screen to type a new number
                if (nextNumber){
                calc_display.textContent = ""; 
                nextNumber = false;
                }
            
                //just populate the screen with numbers
                calc_display.textContent += buttonPressed;
                if (!number1){firstNumber = calc_display.textContent; if (decimal0){decimal1++;}}
                else if (!number2){secondNumber = calc_display.textContent; if (decimal0){decimal2++;}}
        }
        
        function debugging(){
         console.log("button clicked: "+buttonPressed);
         console.log("first number = "+Number(firstNumber));
         console.log("second number = "+Number(secondNumber));
         console.log("operation = "+operation);
         console.log("result = "+Number(result));
         console.log("______________________________________");
        }
}
