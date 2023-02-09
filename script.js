const input = document.querySelector('#email');
const form = document.getElementById('form');
const formControl = document.querySelector('.form-control'); 
const btn=formControl.nextElementSibling;
const label =input.nextElementSibling;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkEmail();
})

function checkEmail(){
    const emailValue= input.value;
    let regex= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)(\.[a-z]{2,20})(\.[a-z]{2,8})?$/
    if(emailValue ===''){
        printError('Email field can not be blank')
    }
    else if(!emailValue.match(regex)){
        printError('Please provide a valid email address')
    }
    else{
        success();
    }
}
function printError(msg){
   
   formControl.classList.add('error')
    label.textContent=msg;
    input.getAnimations().forEach((anim)=>{

        anim.cancel();
        anim.play();
      
    })
}
function success(){
    formControl.classList.remove('error');
    input.getAnimations().forEach((anim)=>{
       if(anim.animationName === 'fadeIn'){
       anim.cancel();
       }
    })
    formControl.classList.add('success');
    btn.classList.add('success');
    const timeoutId=setTimeout(()=>{
        input.value=''
        formControl.classList.remove('success');
        btn.classList.remove('success');
        btn.getAnimations()[1].cancel();//cancelling the grow animation 
       
    },2000)
   
}