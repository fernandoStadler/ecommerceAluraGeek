import { productsSevice } from "../service/product_service.js"

const form = document.querySelector('[data-form]');
const modalAlert = document.querySelector('[data-alert]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const tumbnail = event.target.querySelector('[data-url]').value;
    const category = event.target.querySelector('[data-category]').value;
    const product_name = event.target.querySelector('[data-product_name]').value;
    const product_price = event.target.querySelector('[data-product_price]').value;
    const short_description = event.target.querySelector('[data-product_description]').value;

    if (tumbnail &&
        category &&
        product_name &&
        product_price && 
        short_description !== undefined || 
        tumbnail && category && 
        product_name && 
        product_price && 
        short_description !== '') {

        productsSevice.criarProdutcts(
            tumbnail,
            category,
            product_name,
            product_price,
            short_description)
            .then(() => {
                window.location.href = "/view/all_products.html";
            })
    } else {
        modalAlert.classList.toggle('hidden');
        setTimeout(() => {
            modalAlert.classList.toggle('hidden');
        }, 6000);
    }

});



