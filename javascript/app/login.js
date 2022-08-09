const btn = document.querySelector('[data-btnLogin]');

btn.addEventListener('click', () => {
    const login = document.querySelector('[data-user').value;
    const password = document.querySelector('[data-password]').value;

    let userTemp = login;
    let passwordTemp = password;
    if (userTemp == "admin@admin.com.br" && passwordTemp == "admin123") {
        console.log(userTemp);
        console.log(passwordTemp);
        localStorage.setItem("auth", "logado");
        window.location.href = "/view/all_products.html"; 
        
    }else{
        localStorage.removeItem("auth");
        window.location.href = "./login.html"; 
    }
});


