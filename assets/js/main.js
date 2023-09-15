import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import getProducts from "./helpers/getProducts.js"
import products2 from "./components/products2.js"
// import products from "./components/products.js"
import cart from "./components/cart.js"
import cart2 from "./components/cart2.js"
// import modal from "./components/modal.js"
import darkMode from "./components/darkMode.js"

// UI elements
// Ocultar loader
loader()

// Mostrar menu
showMenu()

// Mostrar carrito
showCart()

// End UI elements

// Products
const {db,printProducts} = products2(await getProducts())

// End products

// Carrito
cart2(db,printProducts)

// Dark Mode
darkMode()

// Modal
// modal(db, printProducts)