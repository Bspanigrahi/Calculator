let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        } else if(e.target.innerHTML == '='){
            string = eval(string);//eval convert the string into code/number then the code will calculate
            display.value=string;
        }
        else {
        string += e.target.innerHTML;
        display.value = string;
        }
        
});

    
});




