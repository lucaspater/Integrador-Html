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

const songList = [
    {
        title: "A Sentir",
        file: "A Sentir.wav",
    },
    {
        title: "Amore",
        file: "Amore.wav",
    },
    {
        title: "Morir",
        file: "Morir.wav",
    },
    {
        title: "Nimbo",
        file: "Nimbo.wav",
    },
    {
        title: "Volver a Nacer",
        file: "Volver a Nacer.wav",
    }
]

const songs = document.getElementById ('songs')



const loadSongs = () => {
    songList.forEach((song, index) => {
        const li = document.createElement('li')
        const link = document.createElement('a')
        link.textContent = song.title
        link.href = '#'
        link.addEventListener('click',() => loadSong(index))
        li.appendChild(link)
        songs.appendChild(li)
    })
}

const loadSong = (songIndex) => {
    console.log(songIndex)
}

loadSongs()