
import { productsSevice } from "../service/product_service.js"
const cardAdmin = document.querySelector('[data-card-admin]')



const listProducts = (
    id,
    product_name,
    tumbnail,
    product_price,
    category,
    short_description
) => {
    const cardAdmin = document.createElement('div');
    const Content =
        `
        <div class="card" data-div_criada>
        <picture class="tumb">
            <img src="${tumbnail}">
        </picture>
        <div class="description">
        <small>${product_name}</small>
        <p><small>Categoria:</small>${category}</p>
        <p><strong>${product_price}</strong></p>
        </div>
        <div class="card-btn">
        <button class="btn-editar btn-admin"><i
                class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-deleted btn-admin btn-deleted--deletar"><i
                class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
`
cardAdmin.innerHTML = Content;
cardAdmin.dataset.id = id;
    return cardAdmin;
} 
listProducts();


productsSevice.listaProducts()
    .then(data =>{
        data.forEach(element => {
            cardAdmin.appendChild(listProducts(
        element.id,
        element.product_name,
        element.tumbnail,
        element.product_price,
        element.category,
        element.short_description))
        });
    })

    cardAdmin.addEventListener('click', (event) => {
        let btnDeletar = event.target.className = 'btn-deleted btn-admin btn-deleted--deletar';
            if (btnDeletar){
                const divClient = event.target.closest('[data-id]');
                let id = divClient.dataset.id;   
                productsSevice.deletarProducts(id)
                .then(()=>{
                    divClient.remove();
                })
            }
        })