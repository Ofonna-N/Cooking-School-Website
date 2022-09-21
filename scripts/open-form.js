
const signupForm = document.querySelector(".sign-up-form");

const loginForm = document.querySelector(".login-form");

const forgotPasswordForm = document.querySelector(".reset-pass-form");

const loginBtns = document.querySelectorAll(".login-btn");
const signUpBtns = document.querySelectorAll(".signup-btn");
const forgotPassBtns = document.querySelectorAll(".forgotpass-btn");


// console.log(loginForm);
// console.log(signupForm);
// console.log(forgotPasswordForm);
// console.log(loginBtns);
// console.log(signUpBtns);
// console.log(forgotPassBtns);

(function initModalBtns()
{
    loginBtns.forEach(btn => 
    {
        btn.onclick = openLoginForm;
        
    });
    loginForm.onclick = function(e)
    {
        closeLoginForm(e.target);
    }
    
    signUpBtns.forEach(btn => 
    {
        btn.onclick = openSignupForm;
    });
    signupForm.onclick = function(e)
    {

        closeSignupForm(e.target);
    }

    
    forgotPassBtns.forEach(btn => 
    {
        btn.onclick = openForgotPassForm;
    });
    forgotPasswordForm.onclick = function(e)
    {
        closeForgotPassForm(e.target);
    }
})();

function openLoginForm(e)
{
    e.preventDefault();
    closeSignupForm(signupForm);
    closeForgotPassForm(forgotPasswordForm);
    loginForm.classList.add("active");
}


function closeLoginForm(target)
{
    if(target !== loginForm || !loginForm.classList.contains("active"))return;
    loginForm.classList.remove("active");
}

function openSignupForm(e)
{
    e.preventDefault();
    closeLoginForm(loginForm);
    closeForgotPassForm(forgotPasswordForm);
    signupForm.classList.add("active");
}

function closeSignupForm(target)
{
    if(target !== signupForm || !signupForm.classList.contains("active"))return;
    signupForm.classList.remove("active");
}

function openForgotPassForm(e)
{
    e.preventDefault();
    closeLoginForm(loginForm);
    closeSignupForm(signupForm);
    forgotPasswordForm.classList.add("active");
}

function closeForgotPassForm(target)
{
    if(target !== forgotPasswordForm || !forgotPasswordForm.classList.contains("active"))return;
    forgotPasswordForm.classList.remove("active");
}