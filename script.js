var firstNumber = null; // the first number memory is empty
    var nextNumber = true;//if true, it clears when you start typing the next number
    var operation = null; // operation1 memory empty
    var secondNumber = null; // the second number memory is empty too
    var result = null; // no result yet
    var number1 = number2 = false; //is it populated?
    var dot = false; //only one dot in the numbers
    
       function operate(operation){
                    
            switch(operation){
                case "+": result = Number(firstNumber) + Number(secondNumber); break;
                case "-": result = Number(firstNumber) - Number(secondNumber); break;
                case "x": result = Number(firstNumber) * Number(secondNumber); break;
                case "/": result = Number(firstNumber) / Number(secondNumber); break;
                default: console.log("what in the freak!");
            }
            console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        }

    function handleClick(buttonPressed){
                
        var calc_display = document.getElementById("display");
                
           //Clear
        if (buttonPressed == "C"){
            calc_display.textContent = ""; 
            firstNumber = null;
            secondNumber = null;
            operation = null;
            result = null;
            number1 = false;
            number2 = false;
            var dot = false;
            }

        //Number    
        else if (buttonPressed != "." && 
                buttonPressed != "B" && 
                buttonPressed != "+" && 
                buttonPressed != "-" &&
                buttonPressed != "x" &&
                buttonPressed != "/" &&
                buttonPressed != "="){
            if (buttonPressed =>0 && buttonPressed <=9){
               
            //clear the screen to type a new number
            if (nextNumber){
                calc_display.textContent = ""; 
                nextNumber = false;
            }
            
            //just populate the screen with numbers
            calc_display.textContent += buttonPressed;
            if (!number1){firstNumber = calc_display.textContent;}
            else if (!number2){secondNumber = calc_display.textContent;}
            }
        }
        
        //Dot
        else if (buttonPressed == "."){
            if (nextNumber){calc_display.textContent = ""; nextNumber = false;}
            if (!dot){dot = true; calc_display.textContent += ".";}
        }

        //Back
        else if(buttonPressed == "B"){
            var str = calc_display.textContent;
            str = str.slice(0, -1);
            firstNumber = result = calc_display.textContent = Number(str);
            }
        
        //Plus
        else if (buttonPressed == "+"){
            nextNumber = true;
            if (firstNumber != null){ number1 = true;}
            if (secondNumber != null){number2 = true;}
            if (number1 && number2){
            operate(operation);
            calc_display.textContent = firstNumber = result;
            secondNumber = null; number2 = false;}
            operation = "+";
        }

        //Minus
        else if (buttonPressed == "-"){
            nextNumber = true;
            if (firstNumber != null){ number1 = true;}
            if (secondNumber != null){number2 = true;}
            if (number1 && number2){
            operate(operation);
            calc_display.textContent = firstNumber = result;
            secondNumber = null; number2 = false;}
            operation = "-";
        }

        //Multiplication
        else if (buttonPressed == "x"){
            nextNumber = true;
            if (firstNumber != null){ number1 = true;}
            if (secondNumber != null){number2 = true;}
            if (number1 && number2){
            operate(operation);
            calc_display.textContent = firstNumber = result;
            secondNumber = null; number2 = false;}
            operation = "x";
        }

        //Plus
        else if (buttonPressed == "/"){
            nextNumber = true;
            if (firstNumber != null){ number1 = true;}
            if (secondNumber != null){number2 = true;}
            if (number1 && number2){
            operate(operation);
            calc_display.textContent = firstNumber = result;
            secondNumber = null; number2 = false;}
            operation = "/";
        }

         //Equal
         else if (buttonPressed == "="){
            switch(operation){
                case "+": result = Number(firstNumber) + Number(secondNumber); break;
                case "-": result = Number(firstNumber) - Number(secondNumber); break;
                case "x": result = Number(firstNumber) * Number(secondNumber); break;
                case "/": result = Number(firstNumber) / Number(secondNumber); break;
                default: console.log("what in the freak!");
            }
            console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
            firstNumber = calc_display.textContent = result;
            secondNumber = null;
            operation = null;//you can press equal just once
        }

        console.log("button clicked: "+buttonPressed);
        console.log("first number = "+Number(firstNumber));
        console.log("second number = "+Number(secondNumber));
        console.log("operation = "+operation);
        console.log("result = "+Number(result));
        console.log("______________________________________");
    }