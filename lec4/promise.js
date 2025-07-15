let p = new Promise((resolve, reject) => {
    resolve("wada poora kiya")
})
console.log(p);

p.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})

function buyProduct(product_Name) {
    return new Promise((resolve, reject) => {
        let isProduct = product.filter((p) => p.name==product_Name)[0];
    if (!isProduct) {
        return reject("product is not available")
    }
    resolve(isProduct.amount);
    })
}

buyProduct("Iphone 16").then((amount) => {
    console.log(amount)
})
.catch((err) => {
    console.log(err)
})