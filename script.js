// Account Validation
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');

document.getElementById('btn-submit').addEventListener('click', function(){
    const email = userEmail.value;
    const password = userPassword.value;
    if(email === 'galib0124@gmail.com' && password === 'fahim'){
        window.location.href = "bank_deposit.html";
        userEmail.value = '';
    } else{
        return;
    }
})


