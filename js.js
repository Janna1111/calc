function operand(num){
    document.getElementById('input').value = 
    document.getElementById('input').value+num;
}

function clean(){
    document.getElementById('input').value = '';
}

function back(){
    let sub = document.getElementById('input').value;
    document.getElementById('input').value = sub.substring(0, (sub.length-1))
}

function equal(){
    let number = document.getElementById('input').value;
    if(number){
        document.getElementById('input').value = eval(number);   
    }
}
function mihatban(){
    console.log("aaa")
}
function mi(){
    console.log("jj")
}