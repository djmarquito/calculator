var firstNumber = null; // the first number memory is empty
    var nextNumber = true;// if true, it clears when you start typing the next number
    var operation = null; // operation1 memory empty
    var secondNumber = null; // the second number memory is empty too
    var result = null; // no result yet
    var number1 = number2 = false; // is it populated?
    var dot = false; // only one dot in the numbers
    var calc_display; // the display
        
    function operate(){
        switch(operation){
            case "+": result = Number(firstNumber) + Number(secondNumber); break;
            case "-": result = Number(firstNumber) - Number(secondNumber); break;
            case "x": result = Number(firstNumber) * Number(secondNumber); break;
            case "/": result = Number(firstNumber) / Number(secondNumber); break;
            default: console.log("what in the freak!");
        }
        console.log(firstNumber + " " + operation + " " + secondNumber + " = " + result);
        firstNumber = calc_display.textContent = result;
        secondNumber = null; number2 = false;
    }

    function handleClick(buttonPressed){
        calc_display = document.getElementById("display");
                
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
        
        //+,-,*,/
        else if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "x" || buttonPressed == "/"){
            nextNumber = true;
            if (firstNumber != null){ number1 = true;}
            if (secondNumber != null){number2 = true;}
            if (number1 && number2){
            operate();
            }
            operation = buttonPressed;
        }

        //Equal new
        else if (buttonPressed == "="){
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
                if (!number1){firstNumber = calc_display.textContent;}
                else if (!number2){secondNumber = calc_display.textContent;}
            }
        
        //debugging
        console.log("button clicked: "+buttonPressed);
        console.log("first number = "+Number(firstNumber));
        console.log("second number = "+Number(secondNumber));
        console.log("operation = "+operation);
        console.log("result = "+Number(result));
        console.log("______________________________________");
    }