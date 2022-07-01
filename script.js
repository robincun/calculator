let btn = document.querySelector('.digits');
const display = document.querySelector('h1');
let dValue= '';
display.innerText = dValue;
btn.addEventListener('click',(event)=>{
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    else if(dValue === ''& event.target.innerText === 'x' ){
        
    }
    else if (dValue === '' & event.target.innerText === '+'){

    }
    else if (dValue === '' & event.target.innerText ==='-'){

    }
    else if (dValue[dValue.length -1] === 'x'){
        check();
    }
    else if (dValue[dValue.length -1] === '+'){
      check();  
    }
    else if (dValue[dValue.length -1] === '-'){
        check();
    }
    else if (event.target.innerText ==='='){

    }
    else if (event.target.innerText === 'AC'){
        dValue = '';    
    }
    else{
        if (event.target.innerText === 'x'){
            dValue += ' ' + event.target.innerText + ' ';
        }
        else if(event.target.innerText === '+'){
            dValue += ' ' + event.target.innerText+ ' ';
        }
        else if(event.target.innerText === '-'){
            dValue += ' ' + event.target.innerText+ ' ';
        }
        else{
            dValue += event.target.innerText;
        }
    }
    if (event.target.innerText === '='){
        dValue = calculate(dValue);
    }
    display.innerText= dValue;
    console.log(calculate(dValue));
});
function check(){
    if (event.target.innerText === 'x'){

    }
    else if(event.target.innerText === '+'){

    }
    else if(event.target.innerText === '-'){

    }
    else{
        dValue += event.target.innerText;
    }
}
function calculate(myArray){
    var newArray = myArray.split(" ")
    let ergebniss;
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i] === '+'){
            ergebniss = parseInt(newArray[i -1],10) + parseInt(newArray[i+1],10);
        }
        else if ( newArray[i] === '-'){
            ergebniss = parseInt(newArray[i - 1 ],10) - parseInt(newArray[i +1],10);
        }
        else if ( newArray[i]=== 'x'){
            ergebniss = parseInt(newArray[i-1],10) * parseInt(newArray[i+1],10);
        }
    }
    return ergebniss;
}