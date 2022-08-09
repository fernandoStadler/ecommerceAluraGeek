const getUrl = new URL(window.location);
console.log();

let targetUrl = getUrl.pathname;
const brandName = document.querySelector('[data-brandCrowd_name');
switch (targetUrl) {
    case "/index.html":
            brandName.innerHTML = `
            <p>Home > <i class="fa-solid fa-house" data-brandIcon></i></p>` 
        break;
    case "/view/all_products.html":
        brandName.innerHTML = `
        <p>Todos produtos > <i class="fa-solid fa-clipboard-list"></i></p>` 
        break;
    case "/view/new_products.html":
        brandName.innerHTML = `
        <p>Adicionar Produto > <i  class="fa-solid fa-square-plus"></i></p>` 
        break;
    case "/view/editarProduto.html":
        brandName.innerHTML = `
        <p>Editar Produto > <i class="fa-solid fa-pen-to-square"></i></p>` 
        break;

    default:
        break;
}
