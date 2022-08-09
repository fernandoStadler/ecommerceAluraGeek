import { productsSevice } from "../service/product_service.js"
const card = document.querySelector('[data-card]')

const listProducts = (
    id,
    product_name,
    tumbnail,
    product_price,
    category,
    short_description
) => {
    const newCard = document.createElement('div');
    const Content =
        `
        <div class="card" data-card>
        <picture class="tumb">
            <img src="${tumbnail}">
        </picture>
        <div class="description">
            <small>${product_name}</small>
            <p><strong>R$ ${product_price}</strong></p>
            <button class="btn-link">Ver produto</button>
        </div>
        </div>
`
    newCard.innerHTML = Content;
    return newCard;
} 
listProducts();
productsSevice.listaProducts()
    .then(data =>{
        data.forEach(element => {
            card.appendChild(listProducts(element.id,
        element.product_name,
        element.tumbnail,
        element.product_price,
        element.category,
        element.short_description))
        });
    })


   