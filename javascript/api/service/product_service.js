const api = `http://localhost:3000`

const criarProdutcts = (tumbnail,category ,product_name ,product_price, short_description,id) => {
    const dataProducts = {
        tumbnail: tumbnail,
        category: category,
        product_name: product_name,
        product_price: product_price,
        short_description: short_description,
        id: id
    }
    return fetch(`${api}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataProducts),
    }) .then(response => {
        return response.json
    });

}
const listaProducts = () => {
    return fetch(`${api}/products`)
        .then(response => {
           return response.json();
        })
} 
listaProducts();
    const updateProduct = (id,tumbnail,category,product_name ,product_price,short_description) => {
        const dataProductsUpdate = {
            tumbnail: tumbnail,
            category: category,
            product_name: product_name,
            product_price: product_price,
            short_description: short_description,
            id: id
        }
        return fetch(`${api}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataProductsUpdate),
        }) .then(response => {
            return response.json
        });
}
const deletarProducts = (id) => {
    return fetch(`${api}/products/${id}`, {
        method: 'DELETE',
    })
}
const searchProduct = (id) => {
    return fetch(`${api}/products/${id}`)
        .then(response => {
           return response.json();
        })
} 
listaProducts();
export const productsSevice = {
    criarProdutcts,
    listaProducts,
    updateProduct,
    deletarProducts,
    searchProduct,
}