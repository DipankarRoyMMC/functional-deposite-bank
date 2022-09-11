document.getElementById('login-button').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');

    if(userEmail.value == 'youremail@gmail.com' && userPassword.value == 'password'){
        window.location.href="banking.html";
    } else{
        alert('Please provide your valid information');
    }

});