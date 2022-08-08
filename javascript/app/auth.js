let storage = localStorage.getItem('auth')
console.log(storage);

if (storage == null ){
        window.location.href = "./login.html"; 
    console.log('Sai Carai');


}
