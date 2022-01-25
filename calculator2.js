if(container1.hasFocus()){
    let cal1= container1.onclick(dis1(val));

}


function dis1(val)
{
document.getElementById("display1").value+=val;
 }
 
 function solve1()

    {
let x = document.getElementById("display1").value;
let y = eval(x);
document.getElementById("display1").value = y;

};





function clr1(){
        
document.getElementById("display1").value = "";

}


function back1(){
    let bc=document.getElementById("display1").value;
    temp=bc.slice(0,-1);
    document.getElementById("display1").value=temp;

}


//  cont2
 if(container2.hasFocus()){
    let cal1= container2.onclick(dis2(val));

}
function dis2(val)
{
document.getElementById("display2").value+=val;
 }

 function solve2()

 {
let x = document.getElementById("display2").value;
let y = eval(x);
document.getElementById("display2").value = y;

};





function clr2(){
     
document.getElementById("display2").value = "";

}


function back2(){
 let bc=document.getElementById("display2").value;
 temp=bc.slice(0,-1);
 document.getElementById("display2").value=temp;

}