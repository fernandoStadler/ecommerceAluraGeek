import { productsSevice } from "../service/product_service.js"

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get('id');

const tumbnail = document.querySelector('[data-url]');
const category = document.querySelector('[data-category]');
const product_name = document.querySelector('[data-product_name]');
const product_price = document.querySelector('[data-product_price]');
const short_description = document.querySelector('[data-product_description]');

productsSevice.searchProduct(id)
.then( data =>{
    
    tumbnail.value = data.tumbnail;
    category.value = data.category;
    product_name.value = data.product_name;
    product_price.value = data.product_price;
    short_description.value = data.short_description; 
})
const updateForm = document.querySelector('[data-form_editar]');
updateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    productsSevice.updateProduct(
        id,
        tumbnail.value,
        category.value,
        product_name.value,
        `R$ ${product_price.value}`,
        short_description.value)
        .then(() => {
            window.location.href = '/all_products.html'
        });
});
