const input = document.querySelector('#email');
const form = document.getElementById('form');
const formControl = document.querySelector('.form-control'); 
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
    const label =input.nextElementSibling;
   formControl.classList.add('error')

    label.textContent=msg;
}
function success(){
    formControl.classList.remove('error');
    formControl.classList.add('success');
    const btn=formControl.nextElementSibling;
    btn.style.backgroundColor='#2ECC71';
    
    setTimeout(()=>{
        input.value=''
        formControl.classList.remove('success');
        formControl.nextElementSibling.style.backgroundColor='hsl(209, 33%, 12%)';
    },2000)
}