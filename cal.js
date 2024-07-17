let screenOutput=document.getElementById('outputbox')

function display(num){
    outputbox.value +=num; 
}
function calculate(){
   try{
        screenOutput.value =eval(screenOutput.value)
    }
    catch (err)
    {
        alert('invalid')
    }
}
function Clear(){
    screenOutput.value = ""; 
}
function Delete(){
     screenOutput.value = screenOutput.value.slice(0,-1);
}
