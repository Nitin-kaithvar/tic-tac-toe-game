//function called whenever user clicked the box
function myfun() {

    //setting dom to all boxes or input field
    var a1,a2,a3,b1,b2,b3,c1,c2,c3;
    a1=document.getElementById('a1').value;
    a2=document.getElementById('a2').value;
    a3=document.getElementById('a3').value;
    b1=document.getElementById('b1').value;
    b2=document.getElementById('b2').value;
    b3=document.getElementById('b3').value;
    c1=document.getElementById('c1').value;
    c2=document.getElementById('c2').value;
    c3=document.getElementById('c3').value;
    
    var a1btn,a2btn,a3btn,b1btn,b2btn,b3btn,c1btn,c2btn,c3btn;
    a1btn=document.getElementById('a1');
    a2btn=document.getElementById('a2');
    a3btn=document.getElementById('a3');
    b1btn=document.getElementById('b1');
    b2btn=document.getElementById('b2');
    b3btn=document.getElementById('b3');
    c1btn=document.getElementById('c1');
    c2btn=document.getElementById('c2');
    c3btn=document.getElementById('c3');

//checking if playerX won and after that disable all fields
    if(a1=='X' && a2 =="X" && a3=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a1btn.style.color = 'red'
        a2btn.style.color = 'red'
        a3btn.style.color = 'red'
    }
    else if(b1=='X' && b2 =="X" && b3=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        b1btn.style.color = 'red'
        b2btn.style.color = 'red'
        b3btn.style.color = 'red'
    }
    else if(c1=='X' && c2 =="X" && c3=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;

        c1btn.style.color = 'red'
        c2btn.style.color = 'red'
        c3btn.style.color = 'red'
    }
    else if(a1=='X' && b1 =="X" && c1=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c3btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;

        a1btn.style.color = 'red'
        b1btn.style.color = 'red'
        c1btn.style.color = 'red'
    }
    else if(a1=='X' && b2 =="X" && c3=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c1btn.disabled = true;
        b3btn.disabled = true;

        a1btn.style.color = 'red'
        b2btn.style.color = 'red'
        c3btn.style.color = 'red'
    }
    else if(a3=='X' && b3 =="X" && c3=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a1btn.disabled = true;
        c1btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;

        a3btn.style.color = 'red'
        b3btn.style.color = 'red'
        c3btn.style.color = 'red'
    }
    else if(a3=='X' && b2 =="X" && c1=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a1btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        c3btn.disabled = true;

        a3btn.style.color = 'red'
        b2btn.style.color = 'red'
        c1btn.style.color = 'red'
    }
    else if(a2=='X' && b2 =="X" && c2=="X"){
        document.getElementById("print").innerHTML = "Player X Won";
        c1btn.disabled = true;
        a1btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        a3btn.disabled = true;
        c3btn.disabled = true;

        a2btn.style.color = 'red'
        b2btn.style.color = 'red'
        c2btn.style.color = 'red'
    }
    else if(a1=='O' && a2 =="O" && a3=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a1btn.style.color = 'red'
        a2btn.style.color = 'red'
        a3btn.style.color = 'red'
    }
    else if(b1=='O' && b2 =="O" && b3=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        b1btn.style.color = 'red'
        b2btn.style.color = 'red'
        b3btn.style.color = 'red'
    }
    else if(c1=='O' && c2 =="O" && c3=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;

        c1btn.style.color = 'red'
        c2btn.style.color = 'red'
        c3btn.style.color = 'red'
    }
    else if(a1=='O' && b1 =="O" && c1=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c3btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;

        a1btn.style.color = 'red'
        b1btn.style.color = 'red'
        c1btn.style.color = 'red'
    }
    else if(a1=='O' && b2 =="O" && c3=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c1btn.disabled = true;
        b3btn.disabled = true;

        a1btn.style.color = 'red'
        b2btn.style.color = 'red'
        c3btn.style.color = 'red'
    }
    else if(a3=='O' && b3 =="O" && c3=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a1btn.disabled = true;
        c1btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;

        a3btn.style.color = 'red'
        b3btn.style.color = 'red'
        c3btn.style.color = 'red'
    }
    else if(a3=='O' && b2 =="O" && c1=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        c2btn.disabled = true;
        a2btn.disabled = true;
        a1btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        c3btn.disabled = true;

        a3btn.style.color = 'red'
        b2btn.style.color = 'red'
        c1btn.style.color = 'red'
    }
    else if(a2=='O' && b2 =="O" && c2=="O"){
        document.getElementById("print").innerHTML = "Player O Won";
        c1btn.disabled = true;
        a1btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        a3btn.disabled = true;
        c3btn.disabled = true;

        a2btn.style.color = 'red'
        b2btn.style.color = 'red'
        c2btn.style.color = 'red'
    }

    //checking for tie means no one won
    else if((a1=='X' || a1=="O") && (a2=="X" || a2=="O") && (a3=="X" || a3=="O") && (b3=="X" || b3=="O") && (c3=="X" || c3=="O") && (b1=="X" || b1=="O") && (b2=="X" || b2=="O") && (c1=="X" || c1=="O") && (c2=="X" || c2=="O"))
    {
        document.getElementById("print").innerHTML = "Match Tie";
    }
    else {
        if(flag ==1){
            document.getElementById("print").innerHTML = "Player X Turn";
        }
        else{
            document.getElementById("print").innerHTML = "Player O Turn";
        }
    }
}
//function to reset
function reset(){
    location.reload();
}

//assigning the inputs to the boxes
var flag = 1;
function myfun1(){
    if(flag ==1){
        document.getElementById("a1").value = "X";
        document.getElementById("a1").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a1").value = "O";
        document.getElementById("a1").disabled = true;
        flag = 1;
    }
}

function myfun2(){
    if(flag ==1){
        document.getElementById('a2').value = "X";
        document.getElementById('a2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('a2').value = "O";
        document.getElementById('a2').disabled = true;
        flag = 1;
    }
}
function myfun3(){
    if(flag ==1){
        document.getElementById('a3').value = "X";
        document.getElementById('a3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('a3').value = "O";
        document.getElementById('a3').disabled = true;
        flag = 1;
    }
}
function myfun4(){
    if(flag ==1){
        document.getElementById('b1').value = "X";
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b1').value = "O";
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}function myfun5(){
    if(flag ==1){
        document.getElementById('b2').value = "X";
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b2').value = "O";
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}function myfun6(){
    if(flag ==1){
        document.getElementById('b3').value = "X";
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b3').value = "O";
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}
function myfun7(){
    if(flag ==1){
        document.getElementById('c1').value = "X";
        document.getElementById('c1').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('c1').value = "O";
        document.getElementById('c1').disabled = true;
        flag = 1;
    }
}function myfun8(){
    if(flag ==1){
        document.getElementById('c2').value = "X";
        document.getElementById('c2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('c2').value = "O";
        document.getElementById('c2').disabled = true;
        flag = 1;
    }
}function myfun9(){
    if(flag ==1){
        document.getElementById('c3').value = "X";
        document.getElementById('c3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('c3').value = "O";
        document.getElementById('c3').disabled = true;
        flag = 1;
    }
}
