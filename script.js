function one(){
    let textbox=document.getElementById("disp");
    textbox.value+=1;
};
function two(){
    let textbox=document.getElementById("disp");
    textbox.value+=2;
};
function three(){
    let textbox=document.getElementById("disp");
    textbox.value+=3;
};
function four(){
    let textbox=document.getElementById("disp");
    textbox.value+=4;
};
function five(){
    let textbox=document.getElementById("disp");
    textbox.value+=5;
};
function six(){
    let textbox=document.getElementById("disp");
    textbox.value+=6;
};
function seven(){
    let textbox=document.getElementById("disp");
    textbox.value+=7;
};

function eight(){
    let textbox=document.getElementById("disp");
    textbox.value+=8;
};
function nine(){
    let textbox=document.getElementById("disp");
    textbox.value+=9;
};
function ten(){
    let textbox=document.getElementById("disp");
    textbox.value+=10;
};
function plus(){
    let textbox=document.getElementById("disp");
    textbox.value+="+";
};
function sub(){
    let textbox=document.getElementById("disp");
    textbox.value+="-";
};
function mul(){
    let textbox=document.getElementById("disp");
    textbox.value+="*";
};
function div(){
    let textbox=document.getElementById("disp");
    textbox.value+="/";
};
function zero(){
    let textbox=document.getElementById("disp");
    textbox.value+=0;
};
function erase(){
    let textbox=document.getElementById("disp");
    textbox.value="";
};
function ans() {
    let values=document.getElementById('disp').value;
    let ans=calculate(values);
    document.getElementById('disp').value = ans;
}
function calculate(values) {
        let func=new Function('return '+values);
        return func();
    
}