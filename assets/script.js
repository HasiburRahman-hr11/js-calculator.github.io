let display = document.getElementById('display');

let buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click' , function(e){
        buttonText = e.target.innerText
        if(buttonText == 'C'){
            display.value = ''
        }else if(buttonText == 'X'){
            buttonText= '*'
            display.value += buttonText
        }else if(buttonText == '%'){
            buttonText= '/100'
            display.value += buttonText
        }else if(buttonText == 'DEL'){
            buttonText= ''
            display.value = display.value.slice(0 , -1)
        }else if(buttonText == '='){
            if(display.value == ''){
                display.value = ''
            }else{
                display.value = eval(display.value)
            }
        }else{
            display.value += buttonText
        }

        
        
    })
})