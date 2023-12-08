//Abaca Tote Bag: price_1OL4rTJ98akyvy0zCc07MQaG
//Barong Tagalog: price_1OL5GrJ98akyvy0zeBEvHfEI
//Banig: price_1OL5HJJ98akyvy0zxvKAkmYj
//Bayong: price_1OL5cgJ98akyvy0z16kPQ1zR
//Inabel Fabric: price_1OL5eYJ98akyvy0z4yXo3MAN

const productsArray = [
    {
        id: "price_1OL4rTJ98akyvy0zCc07MQaG",
        title: "Abaca Tote Bag",
        price: 500,
        image: "https://imgur.com/fkzrN4Z.jpg"
    },
    {
        id: "price_1OL5GrJ98akyvy0zeBEvHfEI",
        title: "Barong Tagalog",
        price: 2000,
        image: "https://imgur.com/eQlwzDn.png"
    },
    {
        id: "price_1OL5HJJ98akyvy0zxvKAkmYj",
        title: "Banig",
        price: 150,
        image: "https://imgur.com/tsVz2xJ.jpg"
    },
    {
        id: "price_1OL5cgJ98akyvy0z16kPQ1zR",
        title: "Bayong",
        price: 500,
        image: "https://imgur.com/l0MSyGW.png"
    },
    {
        id: "price_1OL5eYJ98akyvy0z4yXo3MAN",
        title: "Inabel Fabric",
        price: 500,
        image: "https://imgur.com/y74ag8X.png"
    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined){
        console.log("Produt data does not exist for ID" + id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};