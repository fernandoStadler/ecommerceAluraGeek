let storage = localStorage.getItem('auth')

let btnLogout = document.querySelector('[data-logout]');
if (storage == null ){
        window.location.href = "./login.html"; 
}
btnLogout.addEventListener('click',()=>{
        localStorage.removeItem('auth');
        window.location.href = "./login.html"; 

});