//CARRITO

const totalItems = document.getElementById('totalItems')
const totalProducts = document.getElementById('totalProducts')
const cartWrapper = document.getElementById('cartWrapper')

let products = []

const setCount = () => {
    let totalCount = 0

    for(let item in products){
        totalCount += products[item].count
    }

    totalItems.innerText = totalCount.toString()
    return totalCount
}

const totalPrice = () => {
    let totalCart = 0

    for(let item in products){
        totalCart += products[item].price * products[item].count
    }

     totalProducts.innerText = `${totalCart}`
    return totalCart
}

const productsList = () => {
    cartWrapper.innerHTML = products.map(product => {
        return `
            <div class="cart-item">
                <div class="cart-item-content">
                    <span>${product.product}</span>
                    <span>$ ${product.price}</span>
                    <span>Cantidad: ${product.count}</span>
                </div>
            </div>
        `
    })
}

const addProduct = (product, price, count) => {
    for(let item in products) {
        if(products[item].product === product) {
            products[item].count ++
            setCount()
            totalPrice()
            productsList()
            return
        }
    }

    products.push({ product: product, price: price, count: count});
    setCount()
    totalPrice()
    productsList()
}

//REPRODUCTOR DE MUSICA
const playSong = document.getElementsByClassName("play")
const sotpSong = document.getElementsByClassName("stop")
const volume = document.querySelector('.volume')
let audio

for(elemento of playSong){
    elemento.addEventListener('click', function(){
        let song = this.getAttribute('id')
        audio = new Audio(`./audio/${song}.wav`)
        audio.play()
    })
}

for(elemento of sotpSong){
    elemento.addEventListener('click', function(){
        audio.pause()
    })
}

volume.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
})