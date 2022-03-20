// App_3

    // select the nodes
const inputs = document.querySelectorAll('body section .form div.inp input');
const span = document.querySelectorAll('body section .form div.inp span');
const btn = document.querySelector('body section .form input.btn');
const show = document.querySelector('body section .form .inp_password .show');
const hidden = document.querySelector('body section .form .inp_password .hidden');
    
    //function blur
function Blur(index){
    if(inputs[index].value.length == 0){
        span[index].style.cssText = `transform: translateX(10px);color: grey;font-size: 18px;transition-duration:.5s;`;
    };
};

    //function focus
function Focus(index){
    span[index].style.cssText = `transform: translate(0px,-180%);color:#000;font-size:17px;transition-duration:.5s;`;
};

    //add event focus & blur for inputs
for(let i = 0;i<inputs.length;i++){
    inputs[i].addEventListener('focus',function(){Focus(i)});
    inputs[i].addEventListener('blur',function(){Blur(i)});
};

    //add event for input[1]
inputs[1].addEventListener('keyup',function(){
    if(inputs[1].value.length != 0){
        show.style.cssText = 'display:block;color: black;';
    }
    else{
        show.style.cssText = 'display:none;color: transparent;';
    };
});

    //add events for icon ,show&&hidden
show.addEventListener('mousedown',function(){
    inputs[1].type = 'text';
    show.style.cssText = 'display:block;color: transparent;';
    hidden.style.cssText = 'color: black;';
});
show.addEventListener('mouseup',function(){
    inputs[1].type = 'password';
    show.style.cssText = 'display:block;color: black;';
    hidden.style.cssText = 'color: transparent;';
    inputs[1].focus();
});

    //add event for button 
btn.addEventListener('click',function(){
    let conteur = 0;
    for(let i = 0;i<inputs.length;i++){
        if(inputs[i].value.length == 0){
            alert(`Please Fill the input ${inputs[i].type}`);
            inputs[i].focus();
            conteur++;
            break;
        };
    }
    if(conteur == 0){
        let arr = [inputs[0].value,inputs[1].value];
        for(let i = 0;i<inputs.length;i++){
            inputs[i].value = '';   
            Blur(i);
            focus(i)
        };
        alert(`Your email address : '${arr[0]}' & Your Password : '${arr[1]}'`);
        console.log(`Your email address : '${arr[1]}' & Your Password : '${arr[1]}'`);
        show.style.cssText = 'display:none;';
    };
});

//windowReload
window.addEventListener('load',function(){
    for(let i = 0;i<inputs.length;i++){
        inputs[i].value = '';
    };  
});